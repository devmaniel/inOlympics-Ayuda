import React from "react";

const Announcement_Page = () => {
  return (
    <div className="container mx-auto max-w-xl px-4 py-8">
      {/* Card Container */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {/* Banner Image */}
        <img
          src="https://files01.pna.gov.ph/category-list/2021/04/03/dswd-fb-ayuda2.jpg"
          alt="Banner"
          className="w-full h-48 object-cover"
        />

        {/* Content Section */}
        <div className="p-6">
          {/* User Info */}
          <div className="flex items-center gap-2 mb-4">
            <p className="text-xs font-medium text-gray-700">Posted by</p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/58/Bini_Billboard_K_POWER_100_%282%29_%28cropped%29.jpg"
              alt="Avatar"
              className="w-5 h-5 rounded-full"
            />
            <p className="text-xs font-medium text-gray-700">SK John Doe</p>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Title Announcement
          </h1>

          {/* Badge */}
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">
              Cash Assistance
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed magnam
            dicta omnis aliquid veniam sequi et repellendus accusantium tempora
            a?
          </p>

          {/* Read More Link */}
          <a
            href="#"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Announcement_Page;
