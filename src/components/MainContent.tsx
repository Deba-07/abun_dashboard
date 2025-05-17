import { useState, useMemo } from "react";
import { ArticleRow } from "./ArticleRow";

type Article = {
  id: number;
  title: string;
  keyword: string;
  words: number;
  createdOn: string;
  status?: string; // status added for tab filtering
};

const allArticles: Article[] = [
  {
    id: 1,
    title: "How to Improve Your Skills in League of Legends",
    keyword: "league of legends [2240000]",
    words: 4575,
    createdOn: "20 hours ago",
    status: "Generated Articles",
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
];

const TABS = [
  "Generated Articles",
  "Published Articles",
  "Scheduled Articles",
  "Archived Articles",
];

export const MainContent = () => {
  const [selectedTab, setSelectedTab] = useState<string>("Generated Articles");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [entriesPerPage, setEntriesPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortField, setSortField] = useState<keyof Article | "">("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const filteredArticles = useMemo(() => {
    let result = allArticles.filter((a) => a.status === selectedTab);

    if (searchTerm) {
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          a.keyword.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortField) {
      result = [...result].sort((a, b) => {
        const valA = a[sortField] ?? "";
        const valB = b[sortField] ?? "";

        if (typeof valA === "number" && typeof valB === "number") {
          return sortOrder === "asc" ? valA - valB : valB - valA;
        } else {
          return sortOrder === "asc"
            ? String(valA).localeCompare(String(valB))
            : String(valB).localeCompare(String(valA));
        }
      });
    }

    return result;
  }, [selectedTab, searchTerm, sortField, sortOrder]);

  const totalPages = Math.ceil(filteredArticles.length / entriesPerPage);
  const currentArticles = filteredArticles.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  const handleSort = (field: keyof Article) => {
    if (sortField === field) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const suggestions = useMemo(() => {
    const lowerTerm = searchTerm.toLowerCase();
    return allArticles
      .filter((a) => a.status === selectedTab)
      .filter(
        (a) =>
          a.title.toLowerCase().includes(lowerTerm) ||
          a.keyword.toLowerCase().includes(lowerTerm)
      )
      .slice(0, 5);
  }, [searchTerm, selectedTab]);

  return (
    <main className="flex-1 p-6 overflow-x-auto min-w-[720px] max-w-full">
      <div className="bg-white rounded shadow-sm p-6">
        <h2 className="font-bold text-center mb-4 text-xl">Articles</h2>
        <div className="flex flex-wrap justify-center gap-2 mb-4 text-[10px] font-semibold">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setSelectedTab(tab);
                setCurrentPage(1);
              }}
              disabled={selectedTab === tab}
              className={`rounded px-3 py-1 text-xs ${
                selectedTab === tab
                  ? "bg-[#2563eb] text-white cursor-default select-none"
                  : "border border-gray-300 hover:bg-gray-100"
              }`}
              type="button"
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="relative flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search for Title & Keywords..."
            className="border border-gray-300 rounded text-xs px-3 py-1 w-72 focus:outline-none focus:ring-1 focus:ring-[#2563eb] focus:border-[#2563eb]"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
          {searchTerm && suggestions.length > 0 && (
            <ul className="absolute top-full mt-1 w-72 bg-white border border-gray-300 rounded shadow-md text-xs z-10">
              {suggestions.map((s) => (
                <li
                  key={s.id}
                  onClick={() => setSearchTerm(s.title)}
                  className="px-3 py-1 hover:bg-gray-100 cursor-pointer"
                >
                  {s.title}
                </li>
              ))}
            </ul>
          )}
        </div>

        <table className="w-full text-[10px] text-gray-700 border-collapse">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="pl-2 pr-1 py-2 text-left w-5">
                <input aria-label="Select all articles" type="checkbox" />
              </th>
              <th
                className="py-2 text-left cursor-pointer select-none"
                onClick={() => handleSort("title")}
              >
                Article Title{" "}
                <i className="fas fa-sort ml-1 text-gray-400"></i>
              </th>
              <th
                className="py-2 text-left cursor-pointer select-none max-w-[180px]"
                onClick={() => handleSort("keyword")}
              >
                Keyword [Traffic]{" "}
                <i className="fas fa-sort ml-1 text-gray-400"></i>
              </th>
              <th
                className="py-2 text-left cursor-pointer select-none w-16"
                onClick={() => handleSort("words")}
              >
                Words <i className="fas fa-sort ml-1 text-gray-400"></i>
              </th>
              <th
                className="py-2 text-left cursor-pointer select-none w-24"
                onClick={() => handleSort("createdOn")}
              >
                Created On <i className="fas fa-sort ml-1 text-gray-400"></i>
              </th>
              <th className="py-2 text-left w-16">Action</th>
              <th className="py-2 text-left w-12">Publish</th>
            </tr>
          </thead>
          <tbody>
            {currentArticles.map((article) => (
              <ArticleRow key={article.id} {...article} />
            ))}
          </tbody>
        </table>

        <div className="mt-4 flex items-center justify-between text-[10px] text-gray-600 font-semibold">
          <div>Total {filteredArticles.length} Article Titles</div>
          <div className="flex items-center gap-1">
            <span>Show</span>
            <select
              value={entriesPerPage}
              onChange={(e) => {
                setEntriesPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="text-xs font-semibold text-gray-700 border border-gray-300 rounded-md py-1 px-2 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#2563eb] focus:border-[#2563eb]"
            >
              {[10, 25, 50, 100].map((count) => (
                <option key={count} value={count}>
                  {count}
                </option>
              ))}
            </select>
            <span>entries per page</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600 select-none">
            <button
              className="border border-gray-300 rounded px-2 py-1"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            >
              ‹
            </button>
            <span>
              {currentPage} / {totalPages || 1}
            </span>
            <button
              className="border border-gray-300 rounded px-2 py-1"
              disabled={currentPage >= totalPages}
              onClick={() =>
                setCurrentPage((p) => Math.min(totalPages, p + 1))
              }
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
