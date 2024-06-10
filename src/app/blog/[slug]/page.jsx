import { getAllPublished } from "@/lib/notion";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  console.log(params);

  //   const post = await getAllPublished(params.slug);
  const post = await getAllPublished();

  console.log(post);
  if (!post) notFound();

  return <></>;
}
