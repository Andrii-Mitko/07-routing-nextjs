import { NotifyEvent } from "@tanstack/react-query";
import { get } from "http";
import { notFound } from "next/navigation";

export default async function ProfilePage({
  params,
}: {
  params: { id: string };
}) {
  const user = await get<NotifyEvent>(`/notes/${params.id}`);

  if (!user) {
    notFound();
  }

  return <div>{user.name}</div>;
}
