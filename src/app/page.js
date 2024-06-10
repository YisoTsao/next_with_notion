"use client";

import { useEffect } from "react";

export default function Home() {
  const getNotion = async () => {
    const notion = new Client({ auth: process.env.NOTION_TOKEN });
    const pages = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
    });

    console.log(pages);
  };

  useEffect(() => {
    getNotion();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>11</div>
    </main>
  );
}
