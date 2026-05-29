import NotePreview from "@/components/NotePreview/NotePreview";

type Props = {
  params: { id: string };
};

const ModalNotePage = ({ params }: Props) => {
  return (
    <>
      <NotePreview id={params.id} />
    </>
  );
};

export default ModalNotePage;
