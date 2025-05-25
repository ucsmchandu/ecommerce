import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="mt-20">
        <div className="text-center bg-white py-10 shadow-md">
          <h1 className="text-4xl font-bold text-gray-700">Contact Us</h1>
          <p className="text-gray-500 mt-2 italic">
            "Every connection starts a new story—let’s write yours together."
          </p>
          <p className="text-gray-600 mt-1">
            Handpicked treasures, just for you because you deserve the best.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:ml-50 mt-15 space-y-5 p-2">
        <span className="flex">
          {" "}
          <h1 className="text-3xl font-bold">Let’s Talk!</h1>
        </span>
        <p className="text-sm font-extralight">
          Whether you’re a potential partner interested in doing business with
          us or a valued customer with feedback or concerns, we’re here to
          listen and respond—just drop us a message!
        </p>
      </div>

      <div className="flex flex-col md:ml-50 mt-4 space-y-5 p-2">
        <h1 className="text-3xl font-bold">How To Reach Us</h1>
        <h1 className="text-3xl font-bold">Email Us:</h1>
        <p className="text-sm font-extralight">
          For general inquiries, please email us at{" "}
          <span className="font-semibold hover:underline">
            <a href="mailto:uchandrasaimahesh@gmail.com">
              uchandrasaimahesh@gmail.com
            </a>
            .
          </span>
          We strive to respond to all emails within 24-48 hours.
        </p>
      </div>
    </div>
  );
};

export default Contact;
