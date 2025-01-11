import React from "react";

const History = () => {
  // Mock data for demonstration
  const ayudaData = {
    title: "Bayanihan para sa Sakuna",
    location: "One Ayala Mall",
    status: "Ongoing", // Possible values: "Ongoing", "Completed", "Pending"
    description:
      "Donations of canned goods, rice, bottled water, and medical supplies.",
    date: "January 15, 2025",
  };

  // Status label styles
  const statusLabelColors = {
    Ongoing: "bg-yellow-100 text-yellow-800",
    Completed: "bg-green-100 text-green-800",
    Pending: "bg-gray-100 text-gray-800",
  };

  return (
    <div className="container mx-auto h-full max-w-4xl ">
      {/* Card Container */}
      <div className="bg-white shadow-md  overflow-hidden">
        <h1 className="text-4xl mx-5 mt-5 font-bold text-gray-900 mb-4">
          History
        </h1>

        <hr />

        {/* Content Section */}
        <div className="p-6 ">
          <div>
            {/* Title */}
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              {ayudaData.title}
            </h1>

            {/* Location */}
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Location: </span>
              {ayudaData.location}
            </p>

            {/* Status */}
            <p className="mb-4">
              <span className="font-semibold">Status: </span>
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  statusLabelColors[ayudaData.status]
                }`}
              >
                {ayudaData.status}
              </span>
            </p>

            {/* Description */}
            <p className="text-gray-600 mb-4">
              <span className="font-semibold">Description of Goods: </span>
              {ayudaData.description}
            </p>

            {/* Date */}
            <p className="text-gray-600">
              <span className="font-semibold">Date: </span>
              {ayudaData.date}
            </p>

            <hr className="mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
