import menswear from "../assets/Images/menswear.jpg";
import womenwear from "../assets/Images/womenwear.jpg";
import kidswear from "../assets/Images/kidswear.jpg";

const CateogrySection = () => {
  const Cateogries = [
    {
      title: "Men",
      imageUrl: menswear,
    },
    {
      title: "Women",
      imageUrl: womenwear,
    },
    {
      title: "Kids",
      imageUrl: kidswear,
    },
  ];

  return (
    
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
      {Cateogries.map((cateogry, index) => (
        <div
          key={index}
          className="relative h-64 rounded-md shadow-md transform transition-transform duration-200 hover:scale-105 cursor-pointer"
        >
          <img
            src={cateogry.imageUrl}
            alt=""
            className="h-full w-full object-cover rounded-lg shadow-md"
          />
          <div className="absolute top-28 left-12 ">
            <p className="text-md font-bold mt-14 text-white ml-[-20px]">
              {cateogry.title}
            </p>
            <p className="text-xl font-bold text-white ml-[-20px]">
              View All
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CateogrySection;
