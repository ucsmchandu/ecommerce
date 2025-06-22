import React from "react";

const About = () => {
  return (
    <>
      <div className="mt-20">
        <div className="text-center bg-white py-10 shadow-md">
          <h1 className="text-4xl font-bold text-gray-700">About Us</h1>
          <p className="text-gray-500 mt-2 italic">
            "Built on trust and designed for everyone — our journey begins with delivering quality and convenience to your doorstep."
          </p>
          <p className="text-gray-600 mt-1">
            Carefully selected, crafted with quality — because you deserve the best in every purchase.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:ml-50 md:w-6xl mt-15 space-y-5 p-2">
        <h1 className="text-3xl font-bold">
          A Taste of Tradition in Every Jar
        </h1>
        <p className="text-sm font-extralight">
          Born from a deep passion for authentic Indian flavors, our journey
          began in the warmth of a family kitchen where age-old recipes and
          aromatic spices came to life. What started as a cherished family
          tradition has grown into a heartfelt mission: to bring the vibrant,
          bold taste of handcrafted pickles to your table.
        </p>
      </div>

      <div className="flex flex-col md:ml-50 md:w-6xl mt-4 space-y-5 p-2">
        <h1 className="text-3xl font-bold">Our Story</h1>
        <p className="text-sm font-extralight">
          Rooted in love and tradition, our story traces back to the comforting
          smells of our grandmother’s kitchen. Her timeless recipes—infused with
          fresh ginger, raw mangoes, and hand-ground spices—are the heart of
          everything we make. Today, we proudly continue her legacy, crafting
          every jar with the same care, soul, and authenticity.
        </p>
      </div>

      <div className="flex flex-col md:ml-50 md:w-6xl mt-4 space-y-5 p-2">
        <h1 className="text-3xl font-bold">Our Mission</h1>
        <p className="text-sm font-extralight">
          To celebrate and preserve India’s rich culinary heritage by offering
          pickles that are honest, flavorful, and made the traditional way. With
          the finest ingredients and a whole lot of love, we aim to make every
          meal memorable.{" "}
        </p>
      </div>

      <div className="flex flex-col md:ml-50 md:w-6xl mt-4 space-y-5 p-2">
        <h1 className="text-3xl font-bold">What Makes Us Different</h1>
        <ul className="ml-10 space-y-3 list-disc">
          <li className="text-sm font-extralight">
            <span className="font-mono">Finest Ingredients: </span> We handpick
            fresh fruits, vegetables, and spices to ensure maximum flavor and
            quality.
          </li>
          <li className="text-sm font-extralight">
            <span className="font-mono">Authentic Recipes: </span>Passed down
            through generations, our recipes bring the original taste of India
            to your home.
          </li>
          <li className="text-sm font-extralight">
            <span className="font-mono">Small-Batch Goodness: </span>Made in
            small batches for that homemade touch and unmatched attention to
            detail.
          </li>
          <li className="text-sm font-extralight">
            <span className="font-mono">Eco-Friendly Practices: </span>From
            sourcing to packaging, we strive to make choices that care for the
            planet.
          </li>
        </ul>
      </div>

      <div className="flex flex-col md:ml-50 md:w-6xl mt-4 space-y-5 p-2">
        <h1 className="text-3xl font-bold">Explore Our Pickles</h1>
        <p className="text-sm font-extralight">
          From the classic tang of Mango Pickle to the fiery depth of Andhra
          Style Ginger Pickle, every variety is a flavorful tribute to
          tradition. Discover bold blends and unique regional tastes that
          complement any meal, turning everyday dishes into celebrations.{" "}
        </p>
      </div>

      <div className="flex flex-col md:ml-50 md:w-6xl mt-4 space-y-5 p-2">
        <h1 className="text-3xl font-bold">Be Part of Our Story</h1>
        <p className="text-sm font-extralight">
          Join a growing family of pickle lovers who share a passion for flavor
          and tradition. Follow us on social media for behind-the-scenes
          stories, kitchen inspiration, and exclusive offers. Your stories and
          support are what keep our tradition alive.
        </p>
      </div>
    </>
  );
};

export default About;
