export const Hero = () => {
  return (
    <div className="relative h-[400px] overflow-hidden">
      <img
        src="/images/b03b.jpg"
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
  );
};
