import React from "react";

const Announcement_Page = () => {
  return (
    <>
      <div className="container mx-auto   py-10">
        {/* Parent Grid Container */}
        <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-5 grid-rows-5 gap-4 md:gap-2 lg:gap-0 h-[500px]">
          {/* Div 1 */}
          <div className="col-span-1 md:col-start-1 md:col-end-2 row-span-1 md:row-start-1 md:row-end-4 bg-blue-500 p-4">
            Div 1
          </div>

          {/* Div 2 */}
          <div className="col-span-1 md:col-start-2 md:col-end-3 row-span-1 md:row-start-1 md:row-end-4 bg-green-500 p-4">
            Div 2
          </div>

          {/* Div 3 */}
          <div className="col-span-1 md:col-start-3 md:col-end-4 row-span-1 md:row-start-1 md:row-end-2 bg-red-500 p-4">
            Div 3
          </div>

          {/* Div 4 */}
          <div className="col-span-1 md:col-start-3 md:col-end-4 row-span-1 md:row-start-2 md:row-end-3 bg-yellow-500 p-4">
            Div 4
          </div>

          {/* Div 5 */}
          <div className="col-span-1 md:col-start-3 md:col-end-4 row-span-1 md:row-start-3 md:row-end-4 bg-purple-500 p-4">
            Div 5
          </div>
        </div>
      </div>
    </>
  );
};

export default Announcement_Page;
