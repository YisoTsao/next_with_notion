import { getAllPublished } from "@/lib/notion";
import { notFound } from "next/navigation";

export default async function Page() {
  const post = await getAllPublished();

  console.log(post[0]);
  if (!post) notFound();

  return (
    <div className="p-8">
      <div>
        {post.length &&
          post.map((item) => (
            <div
              className="flex gap-4 border-b border-solid border-gray-300 p-2"
              key={item.id}
            >
              <div>{item?.id}</div>
              <div>{item?.title}</div>
              <div>{item?.date}</div>
              <div>{item?.published ? 1 : 0}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
