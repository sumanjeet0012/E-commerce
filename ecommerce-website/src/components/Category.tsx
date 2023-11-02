import CategoryCard from "./CategoryCard";

const data = [
    {
        id: 0,
        name: "Fresh Fruits",
        count: "9 Products",
        img: "/category__1.webp",
    },
    {
        id: 1,
        name: "Fresh Fruits",
        count: "9 Products",
        img: "/category__2.webp",
    },
    {
        id: 2,
        name: "Fresh Fruits",
        count: "9 Products",
        img: "/category__3.webp",
    },
    {
        id: 3,
        name: "Fresh Fruits",
        count: "9 Products",
        img: "/category__4.webp",
    },
    {
        id: 4,
        name: "Fresh Fruits",
        count: "9 Products",
        img: "/category__5.webp",
    },
    {
        id: 5,
        name: "Fresh Fruits",
        count: "9 Products",
        img: "/category__6.webp",
    },
    {
        id: 6,
        name: "Fresh Fruits",
        count: "9 Products",
        img: "/category__7.webp",
    },
]

const Category = () => {
    return (
        <div className="container pt-16">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                {data.map((item) => (
                    <CategoryCard 
                        key={item.id}
                        img={item.img}
                        name={item.name}
                        count={item.count}
                        />
                    
                ))}
            </div>
        </div>
    )
}

export default Category;