import css from "./LayoutNotes.module.css";

type Props = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  modal: React.ReactNode;
};

const NotesLayout = ({ children, sidebar, modal }: Props) => {
  return (
    <section className={css.section}>
      <aside>{sidebar}</aside>
      <div>{children}</div>
      <div>{modal}</div>
    </section>
  );
};

export default NotesLayout;
