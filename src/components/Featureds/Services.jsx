import React from "react";

const Services = () => {
  return (
    <section className="mt-12 py-8 overflow-hidden">
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <h2 className="text-5xl text-gray-800 font-bold mb-2 uppercase">
          What We Offer You
        </h2>
        <hr className="h-1 w-[27rem] "/>
        <p className="text-lg text-gray-600 mt-3 mb-8">
          Explore the Delightful World of Thai Cuisine with our Recipes, Tips,
          and Techniques.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-5/6 mx-auto text-center pb-12">
       {/* Card 1 */}
        <div className="text-gray-600 transition duration-500 hover:bg-[#2F8161] hover:text-white border  rounded-lg overflow-hidden">
          <img
            src="https://www.cuddlynest.com/blog/wp-content/uploads/2022/10/best_thai_food_featured_image.jpg"
            className="h-60 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl  font-semibold  mb-2">Catering</h3>
            <p>
              Experience the best of Thai cuisine at your next event.
            </p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="text-gray-600 transition duration-500 hover:bg-[#2F8161] hover:text-white border  rounded-lg overflow-hidden">
          <img
            src="https://www.blinkco.io/wp-content/uploads/2021/10/restaurants-online-ordering-system.jpg"
            alt="Item 2 Image"
            className="h-60 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">
              Order Online
            </h3>
            <p >
              Discover the convenience of online ordering with our Thai kitchen.
            </p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="text-gray-600 transition duration-500 hover:bg-[#2F8161] hover:text-white border  rounded-lg  overflow-hidden">
          <img
            src="https://i.insider.com/629a6b217bc6a80018b64bb8?width=700"
            className="h-60 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">
              Private Dining
            </h3>
            <p className="">
              A personalized Thai dining experience for you and your guests.
            </p>
          </div>
        </div>
        {/* Card 4 */}
        <div className="text-gray-600 transition duration-500 hover:bg-[#2F8161] hover:text-white border rounded-lg  overflow-hidden">
          <img
            src="https://popnosh.com/cdn/shop/products/e38bd83af578077b65a31424bd24d085.png?v=1588837793"
            alt="Item 4 Image"
            className="h-60 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold  mb-2">
              Gift Cards
            </h3>
            <p className="">
              Show your appreciation with a Thai kitchen gift card.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
