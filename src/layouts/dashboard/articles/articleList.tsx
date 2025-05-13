"use client";

import Table from "@/components/table/table";
import Pagination from "@/components/pagination/pagination";
import { Modal } from "@/components/modal/modal";
import { useEffect, useState } from "react";
import { Dialog } from "@/components/modal/dialog";
import { useArticleAPI } from "@/services/hooks/articles/article";
import { getExcerpt } from "./utils/functions";
import { formatDate } from "./utils/validations";
import { redirect } from "next/navigation";
import { deleteArticlesAPI } from "@/services/api/articles";

interface ArticleProps {
  currentPage?: number;
}

export const ArticleList = ({ currentPage = 1 }: ArticleProps) => {
  const { getArticles, deleteArticle } = useArticleAPI();

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [data, setData] = useState<string[]>([]);
  const [articlesCount, setArticlesCount] = useState(0);
  const [selectedRow, setSelectedRow] = useState("");
  const [reload, setReload] = useState(true);

  const getDataFromServer = async () => {
    const result = await getArticles({
      offset: (currentPage - 1) * 10,
      limit: 10,
    });
    setArticlesCount(result?.articlesCount);
    const articlesList: any[] = result.articles;
    const formatedData: any[] = articlesList.map((item, index) => {
      return {
        id: (currentPage - 1) * 10 + index + 1,
        slug: item.slug,
        title: item.title,
        author: item.author.username,
        tags: item.tagList.join(", "),
        excerpt: getExcerpt(item.body, 20),
        created: formatDate(item.createdAt),
      };
    });
    setData(formatedData);
  };

  useEffect(() => {
    if (reload) getDataFromServer();
    setReload(false);
  }, [reload]);

  const columns = [
    { key: "id", label: "#", type: "id" },
    { key: "title", label: "Title", type: "primary", link: "/articles/edit" },
    { key: "author", label: "Author", type: "info" },
    { key: "tags", label: "Tags", type: "list" },
    { key: "excerpt", label: "Excerpt", type: "info" },
    { key: "created", label: "Created", type: "date" },
  ];

  const actions = [
    {
      label: "Edit",
      onClick: (row: any) => {
        redirect(`/articles/edit/${row.slug}`);
      },
    },
    {
      label: "Delete",
      onClick: (row: any) => {
        setSelectedRow(row.slug);
        setIsDeleteModalOpen(true);
      },
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      <Table columns={columns} data={data} actions={actions} />
      <Pagination
        currentPage={currentPage}
        totalCount={articlesCount}
        onPageChange={(page) => redirect(`/articles/page/${page}`)}
        disabled={false}
      />
      <Modal
        title="Delete Article"
        action={async () => {
          await deleteArticle(selectedRow);
          setIsDeleteModalOpen(false);
          if (data.length > 1) {
            setReload(true);
          } else if (data.length < 1 && currentPage != 1) {
            redirect(`/articles/page/${currentPage - 1}`);
          } else {
            redirect(`/articles/page/1`);
          }
        }}
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
