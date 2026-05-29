"use client";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { useDebouncedCallback } from "use-debounce";

import css from "./notes.module.css";
import { fetchNotes } from "../../lib/api";

import NoteList from "../../components/NoteList/NoteList";
import SearchBox from "../../components/SearchBox/SearchBox";
import Pagination from "../../components/Pagination/Pagination";

import Modal from "../../components/Modal/Modal";
import NoteForm from "../../components/NoteForm/NoteForm";

type Props = {
  initialTag?: string;
};

export default function NotesClient({ initialTag }: Props) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const debouncedSearch = useDebouncedCallback((value: string) => {
    setSearch(value);
    setPage(1);
  }, 300);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["notes", page, search, initialTag],

    queryFn: () =>
      fetchNotes({
        page,
        perPage: 12,
        search,
        tag: initialTag === "all" ? undefined : initialTag,
      }),

    placeholderData: keepPreviousData,
  });

  const notes = data?.notes ?? [];
  const totalPages = data?.totalPages ?? 0;

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        <SearchBox onChange={debouncedSearch} />
      </header>

      <button onClick={() => setIsModalOpen(true)} className={css.button}>
        Create note +
      </button>

      {isLoading && <p>Loading...</p>}

      {isError && <p>Error loading notes</p>}

      {totalPages > 1 && (
        <Pagination totalPages={totalPages} page={page} setPage={setPage} />
      )}

      {notes.length > 0 && <NoteList notes={notes} />}

      {isModalOpen && (
        <Modal>
          <NoteForm onClose={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </div>
  );
}
