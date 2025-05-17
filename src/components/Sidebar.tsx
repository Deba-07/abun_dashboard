import { useEffect, useState, FC } from "react";

export const Sidebar: FC = () => {
  const [articlesOpen, setArticlesOpen] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <aside className="bg-white border-r border-gray-200 w-64 flex flex-col px-5 py-6 min-h-screen">
        <div className="mb-8">
          <div className="h-6 w-24 bg-gray-300 rounded animate-pulse" />
        </div>
        <div className="mb-8">
          <div className="h-5 w-32 bg-gray-300 rounded animate-pulse" />
        </div>
        <nav className="flex flex-col space-y-4">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="h-4 w-3/4 bg-gray-300 rounded animate-pulse"
            />
          ))}
        </nav>
      </aside>
    );
  }

  return (
    <aside className="bg-white border-r border-gray-200 w-64 flex flex-col px-5 py-6 select-none min-h-screen">
      <div className="mb-8">
        <h1 className="font-extrabold text-xl leading-none">abun</h1>
      </div>
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
          <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-[#b52e9f] to-[#d46b9a]" />
          <select
            aria-label="Select domain"
            className="text-xs font-semibold text-gray-700 border border-gray-300 rounded-md py-1 px-2 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#b52e9f] focus:border-[#b52e9f]"
            defaultValue="amazon.com"
          >
            <option>amazon.com</option>
          </select>
        </div>
      </div>
      <nav className="flex flex-col space-y-3 text-xs text-gray-600 font-semibold">
        <div>
          <button
            aria-expanded={articlesOpen}
            onClick={() => setArticlesOpen(!articlesOpen)}
            className="flex items-center gap-2 w-full text-left text-[#1a1a1a] font-semibold"
            type="button"
          >
            <i className="fas fa-file-alt text-[10px]" />
            Articles
            <i
              className={`fas ml-auto text-[10px] ${
                articlesOpen ? "fa-chevron-down" : "fa-chevron-right"
              }`}
            />
          </button>
          {articlesOpen && (
            <ul className="mt-1 ml-6 flex flex-col space-y-1 text-[11px] font-normal text-gray-600">
              {[
                "Create Article",
                "Generated Articles",
                "Keyword Projects",
                "AI Keyword to Article",
                "Steal Competitor Keyword",
                "Import Keyword from GSC",
                "Manual Keyword to Article",
                "Bulk Keyword to Article",
                "Longtail Keyword to Article",
                "Article Settings",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className={`block ${
                      item === "Generated Articles"
                        ? "text-[#b52e9f] font-semibold"
                        : "hover:text-[#b52e9f]"
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
        {[
          { label: "Auto Blog", icon: "fas fa-robot" },
          { label: "Internal Links", icon: "fas fa-link" },
          { label: "Free Backlinks", icon: "fas fa-link" },
          { label: "Integrations", icon: "fas fa-cogs" },
          { label: "Subscription", icon: "fas fa-credit-card" },
          { label: "Affiliate Program", icon: "fas fa-hand-holding-usd" },
          { label: "Help Center", icon: "fas fa-question-circle" },
          { label: "Updates", icon: "fas fa-sync-alt" },
          { label: "Live Chat Support", icon: "fas fa-comments" },
          { label: "Profile", icon: "fas fa-user" },
        ].map(({ label, icon }) => (
          <a
            key={label}
            href="#"
            className="flex items-center gap-2 hover:text-[#b52e9f]"
          >
            <i className={`${icon} text-[12px]`} />
            {label}
          </a>
        ))}
      </nav>
    </aside>
  );
};
