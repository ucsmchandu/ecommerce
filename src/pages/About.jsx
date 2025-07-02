import React from "react";

const About = () => {
  return (
    <>
      <div className="mt-20">
        <div className="text-center bg-white py-10 shadow-md">
          <h1 className="text-4xl font-bold text-gray-700">About Us</h1>
          <p className="text-gray-500 mt-2 italic">
            "Built on trust and designed for everyone — our journey begins with
            delivering quality and convenience to your doorstep."
          </p>
          <p className="text-gray-600 mt-1">
            Carefully selected, crafted with quality — because you deserve the
            best in every purchase.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:ml-50 md:w-6xl mt-15 space-y-5 p-2">
        <h1 className="text-3xl font-bold">
          A Legacy of Purpose in Every Product
        </h1>
        <p className="text-sm font-extralight">
          Born from a deep desire to empower students through meaningful
          exchange, our journey began in a close-knit college community where
          everyday challenges sparked innovative solutions. What started as a
          simple idea to help peers has grown into a heartfelt mission: to
          connect students through reliable, purpose-driven products that carry
          value and stories.
        </p>
      </div>

      <div className="flex flex-col md:ml-50 md:w-6xl mt-4 space-y-5 p-2">
        <h1 className="text-3xl font-bold">Our Story</h1>
        <p className="text-sm font-extralight">
          Rooted in trust and community, our story began with the exchange of
          used books, lab kits, and tools among classmates. These weren’t just
          transactions—they were shared experiences. Over time, we saw the power
          of a student-to-student marketplace that not only saved money but also
          built connection. Today, we carry forward that spirit, creating a
          platform where students can buy or sell their products with
          confidence, care, and community at its core.
        </p>
      </div>

      <div className="flex flex-col md:ml-50 md:w-6xl mt-4 space-y-5 p-2">
        <h1 className="text-3xl font-bold">Our Mission</h1>
        <p className="text-sm font-extralight">
          To support students by providing a trusted space to exchange academic
          products, enabling them to save money, reduce waste, and access
          resources easily. With a focus on authentic connections and
          sustainable reuse, we aim to make every transaction meaningful.
        </p>
      </div>

      <div className="flex flex-col md:ml-50 md:w-6xl mt-4 space-y-5 p-2">
        <h1 className="text-3xl font-bold">What Makes Us Different</h1>
        <ul className="ml-10 space-y-3 list-disc">
          <li className="text-sm font-extralight">
            <span className="font-mono">🛠️ Curated for Students: </span> Every
            listing is from and for college students—ensuring relevance, trust,
            and local connection.
          </li>
          <li className="text-sm font-extralight">
            <span className="font-mono">💡 Purpose-Driven Platform: </span>It's
            more than just products—it’s about enabling better learning,
            affordability, and peer support.
          </li>
          <li className="text-sm font-extralight">
            <span className="font-mono">📦 Quality You Can Trust:</span>From
            books to electronics, users share real condition info, photos, and
            pricing with full transparency.
          </li>
          <li className="text-sm font-extralight">
            <span className="font-mono">🌱 Eco-Friendly Choice:</span>Giving
            products a second life means reducing waste and contributing to a
            more sustainable student culture.
          </li>
        </ul>
      </div>

      <div className="flex flex-col md:ml-50 md:w-6xl mt-4 space-y-5 p-2">
        <h1 className="text-3xl font-bold">Explore Our Pickles</h1>
        <p className="text-sm font-extralight">
          From second-hand textbooks to lab kits, drawing tools, and gadgets,
          every item carries value and a story. Discover practical solutions and
          budget-friendly finds that help you focus more on learning and less on
          spending.
        </p>
      </div>

      <div className="flex flex-col md:ml-50 md:w-6xl mt-4 space-y-5 p-2">
        <h1 className="text-3xl font-bold">Be Part of Our Story</h1>
        <p className="text-sm font-extralight">
          Join a growing network of students who believe in smart reuse,
          academic collaboration, and sustainable choices. Follow us on social
          media for real stories, helpful tips, and exclusive updates. Your
          support powers a platform that’s built by students, for students.
        </p>
      </div>
    </>
  );
};

export default About;
