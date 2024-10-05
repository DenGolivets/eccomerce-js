import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [activeTab, setActiveTab] = useState("description");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                key={index}
                src={item}
                alt="product_img"
                className="w-[24%] sm:w-full sm:mb-4 flex-shrink-0 cursor-pointer"
                onClick={() => setImage(item)}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="" className="w-full h-auto" />
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-medium mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="star_icon" className="w-3 5" />
            <img src={assets.star_icon} alt="star_icon" className="w-3 5" />
            <img src={assets.star_icon} alt="star_icon" className="w-3 5" />
            <img src={assets.star_icon} alt="star_icon" className="w-3 5" />
            <img
              src={assets.star_dull_icon}
              alt="star_dull_icon"
              className="w-3 5"
            />
            <p className="pl-2">(122)</p>
          </div>
          <p className="text-3xl font-medium mt-5">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  key={index}
                  className={`border bg-gray-100 px-4 py-2 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button onClick={() => addToCart(productData._id, size)} className="uppercase bg-black text-white px-8 py-3 text-sm active:bg-gray-700">
            Add to Cart
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="flex">
          <button
            onClick={() => setActiveTab("description")}
            className={`border px-5 py-3 text-sm w-[150px] ${
              activeTab === "description" ? "font-bold" : ""
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`border px-5 py-3 text-sm w-[150px] ${
              activeTab === "reviews" ? "font-bold" : ""
            }`}
          >
            Reviews (122)
          </button>
        </div>
        {activeTab === "description" ? (
          <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
              expedita facilis non harum ea, fuga odit! Sed ut consequuntur
              dolores. Maxime nisi modi, fugiat aut eius sunt sequi
              necessitatibus sint quia distinctio pariatur ab exercitationem in
              inventore facere neque excepturi? Modi earum voluptates, quidem
              numquam cum quo fugiat fugit autem. Eius, accusantium corrupti?
              Quaerat amet suscipit laboriosam repellat esse magni quasi
              perferendis, voluptatem alias beatae vitae quia, facere reiciendis
              exercitationem repellendus quibusdam harum debitis nulla. Vero
              eius, suscipit nulla, deserunt magni pariatur necessitatibus quam
              sit ex modi voluptatum, aut eum praesentium quos asperiores
              perferendis temporibus id corrupti dignissimos accusamus voluptas.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestiae repudiandae dolore velit unde commodi hic dolores dolor
              excepturi est iste soluta consectetur, nesciunt modi provident
              voluptas, natus quisquam. Reprehenderit, provident.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
            <p>Customer review 1: Lorem ipsum dolor sit amet...</p>
            <p>Customer review 2: Consectetur adipiscing elit...</p>
            <p>Customer review 3: Nulla facilisi...</p>
          </div>
        )}
      </div>
      <div>
        <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
