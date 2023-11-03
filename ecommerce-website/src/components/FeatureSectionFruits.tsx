import ProductCard from "./ProductCard";
import { useState } from "react";

const data = [
  { id: 0, img: "product__1.webp", name: "Dried Mango", price: "$15" },
  { id: 1, img: "product__2.webp", name: "Dried Mango Packet", price: "$50" },
  { id: 2, img: "product__3.webp", name: "Banana", price: "$20" },
  { id: 3, img: "product__4.webp", name: "Red Dates", price: "$50" },
  { id: 4, img: "product__5.webp", name: "Tomato", price: "$10" },
  { id: 5, img: "product__1.webp", name: "Dried Mango", price: "$15" },
  { id: 6, img: "product__2.webp", name: "Dried Mango Packet", price: "$50" },
  { id: 7, img: "product__3.webp", name: "Banana", price: "$20" },
  { id: 8, img: "product__4.webp", name: "Red Dates", price: "$50" },
  { id: 9, img: "product__5.webp", name: "Tomato", price: "$10" },
  { id: 10, img: "product__1.webp", name: "Dried Mango", price: "$15" },
  { id: 11, img: "product__2.webp", name: "Dried Mango Packet", price: "$50" },
  { id: 12, img: "product__3.webp", name: "Banana", price: "$20" },
  { id: 13, img: "product__4.webp", name: "Red Dates", price: "$50" },
  { id: 14, img: "product__5.webp", name: "Tomato", price: "$10" },
  { id: 15, img: "product__1.webp", name: "Dried Mango", price: "$15" },
  { id: 16, img: "product__2.webp", name: "Dried Mango Packet", price: "$50" },
  { id: 17, img: "product__3.webp", name: "Banana", price: "$20" },
  { id: 18, img: "product__4.webp", name: "Red Dates", price: "$50" },
  { id: 19, img: "product__5.webp", name: "Tomato", price: "$10" },
  { id: 20, img: "product__1.webp", name: "Dried Mango", price: "$15" },
  { id: 21, img: "product__2.webp", name: "Dried Mango Packet", price: "$50" },
  { id: 22, img: "product__3.webp", name: "Banana", price: "$20" },
  { id: 23, img: "product__4.webp", name: "Red Dates", price: "$50" },
  { id: 24, img: "product__5.webp", name: "Tomato", price: "$10" },
  { id: 25, img: "product__1.webp", name: "Dried Mango", price: "$15" },
  { id: 26, img: "product__2.webp", name: "Dried Mango Packet", price: "$50" },
  { id: 27, img: "product__3.webp", name: "Banana", price: "$20" },
  { id: 28, img: "product__4.webp", name: "Red Dates", price: "$50" },
  { id: 29, img: "product__5.webp", name: "Tomato", price: "$10" },
  
];



const FeatureSectionFruits = () => {

  const [page, setPage] = useState(1);

  const productsPerPage = 10;
  const totalPages = Math.ceil(data.length / productsPerPage);

  const handlePrevClick = () => {
    setPage(page => Math.max(1, page - 1)); 
  }

  const handleNextClick = () => {
    setPage(page => Math.min(totalPages, page + 1));
  }

  const displayData = data.slice((page - 1) * productsPerPage, page * productsPerPage);

  return (
    <div className="container pt-16">
      <div className="lg:flex justify-between item-center ">
        <div>
          <h3 className="font-medium text-2xl">Fruits & vegetables</h3>
          <p className="text-gray-600 mt-2">
            Buy farm fresh fruits and vegetables online at the best prices
          </p>
        </div>

        <div className="space-x-4 mt-8 lg:mt-0">
          <button className="feature_btn">Fruits</button>
          <button className="text-gray-600 hover:text-accent">
            Vegetables
          </button>
          <button className="text-gray-600 hover:text-accent">
            Bread & Bakery
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
        {/* <img
          className="w-full h=full object-cover"
          src="/feature__1.webp"
          alt="banner"
        /> */}
        {displayData.map((item) => (
          <ProductCard
            key={item.id}
            img={item.img}
            name={item.name}
            price={item.price}
          />
        ))}
        ;
      </div>

      <div className="flex justify-center mt-4 mb-10 gap-4">
        <button
          className="px-4 py-2 rounded text-white transition duration-300 bg-gray-500 hover:bg-gray-600"
          disabled={page === 1}
          onClick={handlePrevClick}
        >
          Prev
        </button>
          <h1 className="text-2xl text-green-500">{page}</h1>
        <button
          className="px-4 py-2 rounded text-white transition duration-300 bg-gray-500 hover:bg-gray-600"
          disabled={page === totalPages}
          onClick={handleNextClick}  
        >
          Next
        </button>
        
      </div>

    </div>


    
  );
};

export default FeatureSectionFruits;
