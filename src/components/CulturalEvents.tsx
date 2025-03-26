import { Calendar } from 'lucide-react';

export const CulturalEvents = () => {
  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4 flex items-center text-red-700">
        <Calendar className="w-5 h-5 mr-2" />
        讲坛荟萃
      </h2>
      <div className="mb-4">
        <div className="mb-4 rounded-lg overflow-hidden">
          <img 
            src="/images/55-02.jpg" 
            alt="讲座现场" 
            className="w-full h-48 object-cover"
          />
        </div>
        <h3 className="font-bold">最新讲座主题：</h3>
        <p>习近平新时代中国特色社会主义思想</p>
        <p className="text-sm text-gray-600">主讲：李永杰</p>
        <div className="mt-2">
          <a href="#" className="text-red-600 hover:text-red-700 mr-4">[详细内容]</a>
          <a href="#" className="text-red-600 hover:text-red-700">[在线观看]</a>
        </div>
      </div>
    </section>
  );
};
