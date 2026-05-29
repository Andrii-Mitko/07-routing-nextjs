import css from "./page.module.css";

export default function Home() {
  return (
    <div>
      <main className={css.main}>
        <div className={css.container}>
          <h1 className={css.title}>Welcome to NoteHub</h1>
          <p className={css.description}>
            NoteHub is a simple and efficient application designed for managing
            personal notes. It helps keep your thoughts organized and accessible
            in one place, whether you are at home or on the go.
          </p>
          <p className={css.description}>
            The app provides a clean interface for writing, editing, and
            browsing notes. With support for keyword search and structured
            organization, NoteHub offers a streamlined experience for anyone who
            values clarity and productivity.
          </p>
        </div>
      </main>
    </div>
  );
}
{
  /*  
  LayoutNotes.module.css

  .container {
  display: flex;
  flex-direction: row;
  flex: 1;
}

.sidebar {
  width: 250px;
  background-color: #2c2c2c;
  color: white;
  padding: 16px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #ddd;
}

.notesWrapper {
  width: 100%;
}
  */
}

{
  /*
  NotePreview.module.css

.container {
  max-width: 800px;
  margin: 32px auto;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.item {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding-bottom: 8px;
}

.header h2 {
  margin: 0;
  font-size: 28px;
  color: #333;
}

.content {
  font-size: 18px;
  line-height: 26px;
  color: #444;
  white-space: pre-wrap;
}

.date {
  font-size: 14px;
  color: #888;
  text-align: right;
}

.tag {
  display: inline-block;
  padding: 4px 8px;
  font-size: 12px;
  color: #0d6efd;
  background-color: #e7f1ff;
  border: 1px solid #b6d4fe;
  border-radius: 12px;
  max-width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.backBtn {
  align-self: flex-start;
  padding: 6px 12px;
  font-size: 14px;
  color: #000000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: underline;
  display: inline-block;
  background-color: transparent;
}
  
  */
}
