import ProductCard from "./ProductCard";
import { useState } from "react";

const data = [
  { id: 0, img: "product__5.webp", name: "Tomato 1", price: "$5" },
  { id: 1, img: "product__5.webp", name: "Tomato 2", price: "$15" },
  { id: 2, img: "product__5.webp", name: "Tomato 3 ", price: "$25" },
  { id: 3, img: "product__5.webp", name: "Tomato 4 ", price: "$35" },
  { id: 4, img: "product__5.webp", name: "Tomato 5 ", price: "$45" },
  { id: 5, img: "product__1.webp", name: "Dried Mango 1", price: "$15" },
  { id: 6, img: "product__1.webp", name: "Dried Mango 1", price: "$50" },
  { id: 7, img: "product__1.webp", name: "Dried Mango 1", price: "$20" },
  { id: 8, img: "product__1.webp", name: "Dried Mango 1", price: "$50" },
  { id: 9, img: "product__1.webp", name: "Dried Mango 1", price: "$10" },
  { id: 10, img: "product__2.webp", name: "Dried Mango Packet 1", price: "$1500" },
  { id: 11, img: "product__2.webp", name: "Dried Mango Packet 2", price: "$50" },
  { id: 12, img: "product__2.webp", name: "Dried Mango Packet 3", price: "$20" },
  { id: 13, img: "product__2.webp", name: "Dried Mango Packet 4", price: "$50" },
  { id: 14, img: "product__2.webp", name: "Dried Mango Packet 5", price: "$10" },
  { id: 15, img: "product__4.webp", name: "Red Dates 1", price: "$15" },
  { id: 16, img: "product__4.webp", name: "Red Dates 2", price: "$50" },
  { id: 17, img: "product__4.webp", name: "Red Dates 3", price: "$20" },
  { id: 18, img: "product__4.webp", name: "Red Dates 4", price: "$50" },
  { id: 19, img: "product__4.webp", name: "Red Dates 5", price: "$10" },
  { id: 20, img: "product__3.webp", name: "Banana 1", price: "$15" },
  { id: 21, img: "product__3.webp", name: "Banana 2", price: "$50" },
  { id: 22, img: "product__3.webp", name: "Banana 3", price: "$20" },
  { id: 23, img: "product__3.webp", name: "Banana 4", price: "$50" },
  { id: 24, img: "product__3.webp", name: "Banana 5", price: "$10" },
  { id: 25, img: "product__5.webp", name: "Tomato 1", price: "$15" },
  { id: 26, img: "product__5.webp", name: "Tomato 2", price: "$50" },
  { id: 27, img: "product__5.webp", name: "Tomato 3", price: "$20" },
  { id: 28, img: "product__5.webp", name: "Tomato 4", price: "$50" },
  { id: 29, img: "product__5.webp", name: "Tomato 5", price: "$10" },
  
];



const FeatureSectionFruits = () => {

  const categories = {
    all: 'All',
    fruits: 'Fruits',
    vegetables: 'Vegetables',
    bread: 'Bread & Bakery'
  };

  const [category, setCategory] = useState('fruits');

  const filteredData = data.filter(item => {
    if(category === 'all') return true;
    if(category === 'fruits') return item.id >= 5 && item.id < 25;
    if(category === 'vegetables') return item.id >= 0 && item.id < 4; 
    if(category === 'bread') return item.id >= 10 && item.id < 15;
  });

  const [page, setPage] = useState(1);

  const productsPerPage = 10;
  // const totalPages = Math.ceil(data.length / productsPerPage);
  const totalPages = Math.ceil(filteredData.length / productsPerPage);

  const handleCategoryClick = (cat:string) => {
    setCategory(cat);
    setPage(1);
  }

  const handlePrevClick = () => {
    setPage(page => Math.max(1, page - 1)); 
  }

  const handleNextClick = () => {
    setPage(page => Math.min(totalPages, page + 1));
  }

  const displayData = filteredData.slice((page - 1) * productsPerPage, page * productsPerPage);

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

        <button
            className={category === 'all' ? 'feature_btn' : ''} 
            onClick={() => handleCategoryClick('all')}
          >
            {categories.all}
        </button>

      <button 
        className={category === 'fruits' ? 'feature_btn' : ''}
        onClick={() => handleCategoryClick('fruits')}
      >
        {categories.fruits}  
      </button>

      <button
        className={category === 'vegetables' ? 'feature_btn' : ''}
        onClick={() => handleCategoryClick('vegetables')}  
      >
        {categories.vegetables}
      </button>

      <button
        className={category === 'bread' ? 'feature_btn' : ''}
        onClick={() => handleCategoryClick('bread')}
      >
        {categories.bread}
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
