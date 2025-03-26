import React from 'react';
import { Search, ChevronRight, Book, Library, Globe, Calendar, Image, Database } from 'lucide-react';

const NavItem = ({ children }: { children: React.ReactNode }) => (
  <a href="#" className="hover:text-red-600 transition-colors">{children}</a>
);

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-red-700 text-white">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex gap-6 text-lg">
              <NavItem>首页</NavItem>
              <NavItem>文化动态</NavItem>
              <NavItem>文化之旅</NavItem>
              <NavItem>文化遗产</NavItem>
              <NavItem>闽台文化</NavItem>
              <NavItem>福建文库</NavItem>
              <NavItem>讲坛荟萃</NavItem>
              <NavItem>展览在线</NavItem>
            </div>
            <div className="relative">
              <input
                type="search"
                placeholder="站内检索"
                className="py-1 px-3 rounded text-black pr-8"
              />
              <Search className="absolute right-2 top-2 w-4 h-4 text-gray-500" />
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1533669955142-6a73332af4db?auto=format&fit=crop&w=2000&q=80" 
          alt="福建文化" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-4">
              迎新年文化惠民演出
            </h1>
            <p className="text-white text-xl md:text-2xl max-w-2xl">
              福建省实验闽剧院建院六十周年优秀剧目展演
            </p>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        {/* Featured Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="relative h-64 rounded-lg overflow-hidden group">
            <img 
              src="/images/a898-435883e8f66b.jpg" 
              alt="文化展览" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
              <h3 className="text-white text-xl font-semibold">文化展览</h3>
            </div>
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden group">
            <img 
              src="/images/60f810e7e4b00c69dc10e8261.jpg" 
              alt="传统艺术" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-semibold mb-2">传统艺术</h3>
              <p className="text-white text-sm opacity-90">探索中国传统艺术的精髓，传承千年文化瑰宝</p>
            </div>
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden group">
            <img 
              src="/images/rmrbhwb2020062911p26_b.jpg" 
              alt="文化遗产" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-semibold mb-2">文化遗产</h3>
              <p className="text-white text-sm opacity-90">守护历史文化遗产，延续文明火种</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* News Section */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center text-red-700">
              <Globe className="w-5 h-5 mr-2" />
              福建文化快讯
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center">
                <ChevronRight className="w-4 h-4 text-red-600 flex-shrink-0" />
                <a href="#" className="hover:text-red-600 ml-2">
                  福建省实验闽剧院举办建院六十周年庆典活动 (09-15)
                </a>
              </li>
              <li className="flex items-center">
                <ChevronRight className="w-4 h-4 text-red-600 flex-shrink-0" />
                <a href="#" className="hover:text-red-600 ml-2">
                  福州三坊七巷举办非遗文化展示周活动 (09-14)
                </a>
              </li>
              <li className="flex items-center">
                <ChevronRight className="w-4 h-4 text-red-600 flex-shrink-0" />
                <a href="#" className="hover:text-red-600 ml-2">
                  泉州提升世界遗产保护管理水平研讨会召开 (09-12)
                </a>
              </li>
            </ul>
          </section>

          {/* Cultural Events */}
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

          {/* Digital Library */}
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
        </div>
      </main>

      <footer className="bg-gray-800 text-white mt-12 py-6">
        <div className="container mx-auto px-4 text-center">
          <p>版权说明 | 主办：福建省文化厅</p>
          <p className="mt-2">承办与制作：福建省图书馆 | 联系我们</p>
        </div>
      </footer>
    </div>
  );
}

export default App;