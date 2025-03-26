import { Globe, ChevronRight } from "lucide-react";

interface NewsItem {
  title: string;
  date: string;
  link: string;
}

export const NewsSection = () => {
  const newsItems: NewsItem[] = [
    {
      title: "福建省实验闽剧院举办建院六十周年庆典活动",
      date: "09-15",
      link: "#",
    },
    {
      title: "福州三坊七巷举办非遗文化展示周活动",
      date: "09-14",
      link: "#",
    },
    {
      title: "泉州提升世界遗产保护管理水平研讨会召开",
      date: "09-12",
      link: "#",
    },
  ];

  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4 flex items-center text-red-700">
        <Globe className="w-5 h-5 mr-2" />
        福建文化快讯
      </h2>
      <ul className="space-y-3">
        {newsItems.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="w-4 h-4 text-red-600 flex-shrink-0" />
            <a href={item.link} className="hover:text-red-600 ml-2">
              {item.title} ({item.date})
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
