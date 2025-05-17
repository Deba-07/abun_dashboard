"use client";

import { useState, useMemo, useEffect } from "react";
import { ArticleRow } from "../components/ArticleRow";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);

  const articles = useMemo(
    () => [
      {
        id: 1,
        title: "How to Improve Your Skills in League of Legends",
        keyword: "league of legends [2240000]",
        words: 4575,
        createdOn: "20 hours ago",
      },
      {
        id: 2,
        title: "How to Master Last Hitting in League of Legends",
        keyword: "league of legends [2240000]",
        words: 3480,
        createdOn: "21 hours ago",
        status: "Generated Articles",
      },
      {
        id: 3,
        title: "7 Tips for Better Teamplay in League of Legends",
        keyword: "league of legends [2240000]",
        words: 2676,
        createdOn: "a day ago",
        status: "Generated Articles",
      },
      {
        id: 4,
        title: "Top Virtual Executive Assistant Services (2024)",
        keyword: "virtual executive assistant [2900]",
        words: 2408,
        createdOn: "1 Oct, 24",
        status: "Published Articles",
      },
      {
        id: 5,
        title: "Unlimited Graphics Design Solutions",
        keyword: "unlimited graphic design services [390]",
        words: 1703,
        createdOn: "--",
        status: "Scheduled Articles",
      },
      {
        id: 6,
        title: "Top Amazon Payment Methods For Quick Access to Funds",
        keyword: "amazon payment methods [3600]",
        words: 2647,
        createdOn: "--",
        status: "Scheduled Articles",
      },
      {
        id: 7,
        title:
          "Backlinks 101: What are backlinks and why they're important [Free template]",
        keyword: "backlinks [810]",
        words: 2261,
        createdOn: "--",
        status: "Archived Articles",
      },
      {
        id: 8,
        title: "7 Leading AI SEO Tools in 2024 (Ranked & Compared)",
        keyword: "ai seo software [880]",
        words: 1543,
        createdOn: "--",
        status: "Archived Articles",
      },
      {
        id: 9,
        title: "How to Improve Your Skills in League of Legends",
        keyword: "league of legends [2240000]",
        words: 4575,
        createdOn: "20 hours ago",
        status: "Generated Articles",
      },
      {
        id: 10,
        title: "How to Master Last Hitting in League of Legends",
        keyword: "league of legends [2240000]",
        words: 3480,
        createdOn: "21 hours ago",
        status: "Generated Articles",
      },
      {
        id: 11,
        title: "7 Tips for Better Teamplay in League of Legends",
        keyword: "league of legends [2240000]",
        words: 2676,
        createdOn: "a day ago",
        status: "Generated Articles",
      },
      {
        id: 12,
        title: "Top Virtual Executive Assistant Services (2024)",
        keyword: "virtual executive assistant [2900]",
        words: 2408,
        createdOn: "1 Oct, 24",
        status: "Published Articles",
      },
      {
        id: 13,
        title: "Unlimited Graphics Design Solutions",
        keyword: "unlimited graphic design services [390]",
        words: 1703,
        createdOn: "--",
        status: "Scheduled Articles",
      },
      {
        id: 14,
        title: "Top Amazon Payment Methods For Quick Access to Funds",
        keyword: "amazon payment methods [3600]",
        words: 2647,
        createdOn: "--",
        status: "Scheduled Articles",
      },
      {
        id: 15,
        title:
          "Backlinks 101: What are backlinks and why they're important [Free template]",
        keyword: "backlinks [810]",
        words: 2261,
        createdOn: "--",
        status: "Archived Articles",
      },
      {
        id: 16,
        title: "7 Leading AI SEO Tools in 2024 (Ranked & Compared)",
        keyword: "ai seo software [880]",
        words: 1543,
        createdOn: "--",
        status: "Archived Articles",
      },
      {
        id: 17,
        title: "How to Improve Your Skills in League of Legends",
        keyword: "league of legends [2240000]",
        words: 4575,
        createdOn: "20 hours ago",
        status: "Generated Articles",
      },
      {
        id: 18,
        title: "How to Master Last Hitting in League of Legends",
        keyword: "league of legends [2240000]",
        words: 3480,
        createdOn: "21 hours ago",
        status: "Generated Articles",
      },
      {
        id: 19,
        title: "7 Tips for Better Teamplay in League of Legends",
        keyword: "league of legends [2240000]",
        words: 2676,
        createdOn: "a day ago",
        status: "Generated Articles",
      },
      {
        id: 20,
        title: "Top Virtual Executive Assistant Services (2024)",
        keyword: "virtual executive assistant [2900]",
        words: 2408,
        createdOn: "1 Oct, 24",
        status: "Published Articles",
      },
      {
        id: 21,
        title: "Unlimited Graphics Design Solutions",
        keyword: "unlimited graphic design services [390]",
        words: 1703,
        createdOn: "--",
        status: "Scheduled Articles",
      },
      {
        id: 22,
        title: "Top Amazon Payment Methods For Quick Access to Funds",
        keyword: "amazon payment methods [3600]",
        words: 2647,
        createdOn: "--",
        status: "Scheduled Articles",
      },
      {
        id: 23,
        title:
          "Backlinks 101: What are backlinks and why they're important [Free template]",
        keyword: "backlinks [810]",
        words: 2261,
        createdOn: "--",
        status: "Archived Articles",
      },
      {
        id: 24,
        title: "7 Leading AI SEO Tools in 2024 (Ranked & Compared)",
        keyword: "ai seo software [880]",
        words: 1543,
        createdOn: "--",
        status: "Archived Articles",
      },
      {
        id: 25,
        title: "How to Improve Your Skills in League of Legends",
        keyword: "league of legends [2240000]",
        words: 4575,
        createdOn: "20 hours ago",
        status: "Generated Articles",
      },
      {
        id: 26,
        title: "How to Master Last Hitting in League of Legends",
        keyword: "league of legends [2240000]",
        words: 3480,
        createdOn: "21 hours ago",
        status: "Generated Articles",
      },
      {
        id: 27,
        title: "7 Tips for Better Teamplay in League of Legends",
        keyword: "league of legends [2240000]",
        words: 2676,
        createdOn: "a day ago",
        status: "Generated Articles",
      },
      {
        id: 28,
        title: "Top Virtual Executive Assistant Services (2024)",
        keyword: "virtual executive assistant [2900]",
        words: 2408,
        createdOn: "1 Oct, 24",
        status: "Published Articles",
      },
      {
        id: 29,
        title: "Unlimited Graphics Design Solutions",
        keyword: "unlimited graphic design services [390]",
        words: 1703,
        createdOn: "--",
        status: "Scheduled Articles",
      },
      {
        id: 30,
        title: "Top Amazon Payment Methods For Quick Access to Funds",
        keyword: "amazon payment methods [3600]",
        words: 2647,
        createdOn: "--",
        status: "Scheduled Articles",
      },
      {
        id: 31,
        title:
          "Backlinks 101: What are backlinks and why they're important [Free template]",
        keyword: "backlinks [810]",
        words: 2261,
        createdOn: "--",
        status: "Archived Articles",
      },
      {
        id: 32,
        title: "7 Leading AI SEO Tools in 2024 (Ranked & Compared)",
        keyword: "ai seo software [880]",
        words: 1543,
        createdOn: "--",
        status: "Archived Articles",
      },
    ],
    []
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // simulate loading delay
    return () => clearTimeout(timer);
  }, []);

  const [selectedTab, setSelectedTab] = useState("Generated Articles");
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredByTab = useMemo(() => {
    switch (selectedTab) {
      case "Published Articles":
        return articles.slice(0, 5);
      case "Scheduled Articles":
        return articles.slice(5, 10);
      case "Archived Articles":
        return articles.slice(10, 15);
      default:
        return articles;
    }
  }, [selectedTab, articles]);

  const searchedArticles = useMemo(() => {
    if (!searchTerm) return filteredByTab;
    return filteredByTab.filter(
      (article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.keyword.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, filteredByTab]);

  const totalPages = Math.ceil(searchedArticles.length / itemsPerPage);
  const paginatedArticles = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return searchedArticles.slice(start, start + itemsPerPage);
  }, [currentPage, itemsPerPage, searchedArticles]);

  return (
    <main className="flex-1 p-6 overflow-x-auto min-w-[720px] max-w-full bg-gray-50">
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-xl font-bold">
            Articles
          </CardTitle>
          <div className="flex flex-wrap justify-center gap-2 mt-4 text-xs font-bold">
            {[
              "Generated Articles",
              "Published Articles",
              "Scheduled Articles",
              "Archived Articles",
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setSelectedTab(tab);
                  setCurrentPage(1);
                }}
                disabled={selectedTab === tab}
                className={`rounded px-3 py-1 text-xs ${
                  selectedTab === tab
                    ? "bg-blue-600 text-white cursor-default select-none"
                    : "border border-gray-300 hover:bg-gray-100"
                }`}
                type="button"
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex justify-center mt-4 mb-6">
            <input
              type="text"
              placeholder="Search for Title & Keywords..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="border border-gray-300 rounded text-xs px-3 py-1 w-72 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
            />
          </div>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <table className="w-full text-xs text-gray-900 border-collapse">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="pl-2 pr-1 py-2 text-left w-5">
                  <input aria-label="Select all articles" type="checkbox" />
                </th>
                <th className="py-2 text-left">Article Title</th>
                <th className="py-2 text-left max-w-[180px]">
                  Keyword [Traffic]
                </th>
                <th className="py-2 text-left w-16">Words</th>
                <th className="py-2 text-left w-24">Created On</th>
                <th className="py-2 text-left w-16">Action</th>
                <th className="py-2 text-left w-12">Publish</th>
              </tr>
            </thead>
            <tbody>
              {loading
                ? [...Array(itemsPerPage)].map((_, idx) => (
                    <tr
                      key={idx}
                      className="animate-pulse border-b border-gray-200"
                    >
                      <td className="pl-2 pr-1 py-2">
                        <div className="w-4 h-4 bg-gray-300 rounded"></div>
                      </td>
                      <td className="py-2">
                        <div className="h-3 w-40 bg-gray-300 rounded"></div>
                      </td>
                      <td className="py-2">
                        <div className="h-3 w-32 bg-gray-300 rounded"></div>
                      </td>
                      <td className="py-2">
                        <div className="h-3 w-10 bg-gray-300 rounded"></div>
                      </td>
                      <td className="py-2">
                        <div className="h-3 w-20 bg-gray-300 rounded"></div>
                      </td>
                      <td className="py-2">
                        <div className="h-3 w-12 bg-gray-300 rounded"></div>
                      </td>
                      <td className="py-2">
                        <div className="h-3 w-8 bg-gray-300 rounded"></div>
                      </td>
                    </tr>
                  ))
                : paginatedArticles.map((article) => (
                    <ArticleRow key={article.id} {...article} />
                  ))}
            </tbody>
          </table>
        </CardContent>
        <div className="mt-4 flex items-center justify-between text-xs text-gray-800 font-semibold px-4 pb-4">
          <div>Total {searchedArticles.length} Article Titles</div>
          <div className="flex items-center gap-1">
            <span>Show</span>
            <select
              aria-label="Select number of entries per page"
              className="text-xs font-semibold text-gray-700 border border-gray-300 rounded-md py-1 px-2 cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
            >
              {[10, 25, 50, 100].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
            <span>entries per page</span>
          </div>
          <div className="flex items-center gap-1 text-gray-400 select-none">
            <button
              className={`border border-gray-300 rounded px-2 py-1 ${
                currentPage === 1
                  ? "cursor-not-allowed"
                  : "cursor-pointer hover:bg-gray-100"
              }`}
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              aria-label="Previous Page"
            >
              ‹
            </button>
            <span>
              {currentPage} / {totalPages || 1}
            </span>
            <button
              className={`border border-gray-300 rounded px-2 py-1 ${
                currentPage === totalPages
                  ? "cursor-not-allowed"
                  : "cursor-pointer hover:bg-gray-100"
              }`}
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              aria-label="Next Page"
            >
              ›
            </button>
          </div>
        </div>
      </Card>
    </main>
  );
}
