import Modal from "@/components/Modal/Modal";
import NotePreview from "@/components/NotePreview/NotePreview";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const ModalNotePage = async ({ params }: Props) => {
  const { id } = await params;

  return (
    <Modal>
      <NotePreview id={id} />
    </Modal>
  );
};

export default ModalNotePage;
