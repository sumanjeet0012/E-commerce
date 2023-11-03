import ProductCard from "./ProductCard";

const data = [
  { id: 0, img: "product__1.webp", name: "Dried Mango", price: "$500" },
  { id: 0, img: "product__1.webp", name: "Dried Mango", price: "$500" },
  { id: 0, img: "product__1.webp", name: "Dried Mango", price: "$500" },
  { id: 0, img: "product__1.webp", name: "Dried Mango", price: "$500" },
  { id: 0, img: "product__1.webp", name: "Dried Mango", price: "$500" },
  { id: 0, img: "product__1.webp", name: "Dried Mango", price: "$500" },
  { id: 0, img: "product__1.webp", name: "Dried Mango", price: "$500" },
  { id: 0, img: "product__1.webp", name: "Dried Mango", price: "$500" },
  { id: 0, img: "product__1.webp", name: "Dried Mango", price: "$500" },
  { id: 0, img: "product__1.webp", name: "Dried Mango", price: "$500" },
  { id: 0, img: "product__1.webp", name: "Dried Mango", price: "$500" },
  { id: 0, img: "product__1.webp", name: "Dried Mango", price: "$500" },
  { id: 0, img: "product__1.webp", name: "Dried Mango", price: "$500" },
  { id: 0, img: "product__1.webp", name: "Dried Mango", price: "$500" },
  { id: 0, img: "product__1.webp", name: "Dried Mango", price: "$500" },
  { id: 0, img: "product__1.webp", name: "Dried Mango", price: "$500" },
  { id: 0, img: "product__1.webp", name: "Dried Mango", price: "$500" },
  { id: 0, img: "product__1.webp", name: "Dried Mango", price: "$500" },
  { id: 0, img: "product__1.webp", name: "Dried Mango", price: "$500" },
  { id: 0, img: "product__1.webp", name: "Dried Mango", price: "$500" },
  { id: 0, img: "product__1.webp", name: "Dried Mango", price: "$500" },
  { id: 0, img: "product__1.webp", name: "Dried Mango", price: "$500" },
];

const FeatureSectionFruits = () => {
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
        {data.map((item) => (
          <ProductCard
            key={item.id}
            img={item.img}
            name={item.name}
            price={item.price}
          />
        ))}
        ;
      </div>
    </div>
  );
};

export default FeatureSectionFruits;
