import React from "react";

type ArticleRowProps = {
  id: number;
  title: string;
  keyword: string;
  words: number;
  createdOn: string;
};

export const ArticleRow: React.FC<ArticleRowProps> = ({
  id,
  title,
  keyword,
  words,
  createdOn,
}) => {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
      <td className="pl-2 pr-1 py-2">
        <input type="checkbox" aria-label={`Select article ${id}`} />
      </td>
      <td className="py-2 pr-2 max-w-xs truncate">{title}</td>
      <td className="py-2 pr-2 max-w-xs truncate">{keyword}</td>
      <td className="py-2 pr-2">{words}</td>
      <td className="py-2 pr-2">{createdOn}</td>
      <td className="py-2 pr-2">
        <button className="text-blue-500 hover:underline text-xs">Edit</button>
      </td>
      <td className="py-2 pr-2">
        <input type="checkbox" aria-label={`Publish article ${id}`} />
      </td>
    </tr>
  );
};
