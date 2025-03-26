import { Library } from 'lucide-react';

export const DigitalLibrary = () => {
  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4 flex items-center text-red-700">
        <Library className="w-5 h-5 mr-2" />
        数字图书馆
      </h2>
      <div className="mb-4 rounded-lg overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80" 
          alt="数字图书馆" 
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="space-y-4">
        <div>
          <h3 className="font-bold mb-2">电子期刊：</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-blue-600 hover:text-blue-800">维普中文科技期刊</a></li>
            <li><a href="#" className="text-blue-600 hover:text-blue-800">万方数字化期刊</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">数据库：</h3>
          <div className="grid grid-cols-2 gap-2">
            <a href="#" className="text-blue-600 hover:text-blue-800">方志</a>
            <a href="#" className="text-blue-600 hover:text-blue-800">闽人著述</a>
            <a href="#" className="text-blue-600 hover:text-blue-800">联合家谱</a>
            <a href="#" className="text-blue-600 hover:text-blue-800">馆藏家谱</a>
          </div>
        </div>
      </div>
    </section>
  );
};
