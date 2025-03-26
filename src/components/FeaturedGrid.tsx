import React from 'react';

interface FeaturedItemProps {
  image: string;
  title: string;
  description?: string;
}

const FeaturedItem = ({ image, title, description }: FeaturedItemProps) => (
  <div className="relative h-64 rounded-lg overflow-hidden group">
    <img 
      src={image}
      alt={title}
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
      <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
      {description && <p className="text-white text-sm opacity-90">{description}</p>}
    </div>
  </div>
);

export const FeaturedGrid = () => {
  const featuredItems = [
    {
      image: '/images/a898-435883e8f66b.jpg',
      title: '文化展览'
    },
    {
      image: '/images/60f810e7e4b00c69dc10e8261.jpg',
      title: '传统艺术',
      description: '探索中国传统艺术的精髓，传承千年文化瑰宝'
    },
    {
      image: '/images/rmrbhwb2020062911p26_b.jpg',
      title: '文化遗产',
      description: '守护历史文化遗产，延续文明火种'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {featuredItems.map((item, index) => (
        <FeaturedItem key={index} {...item} />
      ))}
    </div>
  );
};
