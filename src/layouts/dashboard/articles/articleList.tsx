"use client";

import Table from "@/components/table/table";
import Pagination from "@/components/pagination/pagination";
import { Modal } from "@/components/modal/modal";
import { useState } from "react";
import { Dialog } from "@/components/modal/dialog";

interface ArticleProps {
  currentPage?: string | string[] | number;
}

export const ArticleList = ({ currentPage = 1 }: ArticleProps) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(true);

  const columns = [
    { key: "id", label: "#" },
    { key: "title", label: "Title" },
    { key: "author", label: "Author" },
    { key: "tags", label: "Tags" },
    { key: "excerpt", label: "Excerpt" },
    { key: "created", label: "Created" },
  ];

  const data = Array.from({ length: 10 }).map((_, i) => ({
    id: i + 1,
    title: "Article title",
    author: "@author_username",
    tags: "list of tags",
    excerpt: "First 20 words of article body",
    created: "<date>",
  }));

  const actions = [
    { label: "Edit", onClick: (row: any) => console.log("Edit", row) },
    { label: "Delete", onClick: (row: any) => console.log("Delete", row) },
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      <Table columns={columns} data={data} actions={actions} />
      <Pagination
        currentPage={5}
        totalPages={10}
        onPageChange={(page) => console.log("Go to page:", page)}
        disabled={false}
      />
      <Modal
        title="Delete Article"
        action={() => setIsDeleteModalOpen(false)}
        actionTitle="Delete"
        isOpen={isDeleteModalOpen}
        size="small"
        onClose={() => setIsDeleteModalOpen(false)}
        negative
      >
        <Dialog
          negative
          dialog="Are you sure you want to delete this article?"
        />
      </Modal>
    </div>
  );
};
