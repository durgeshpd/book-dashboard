import React from "react";
import { motion } from "framer-motion";

const Shimmer = () => {
  return (
    <motion.div
      className="p-6 space-y-6 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="flex items-center justify-between w-full"
        initial={{ opacity: 0,y: -10 }}
        animate={{ opacity: 1,y: 0 }}
        transition={{ delay: 0.2,duration: 0.6 }}
      >
        <div className="h-10 bg-gray-300 rounded-md w-40 animate-pulse" />
        <div className="h-10 bg-gray-300 rounded-md w-40 animate-pulse" />
      </motion.div>

      <div className="overflow-x-auto w-full">
        <table className="w-full table-fixed min-w-[1200px]">
          <thead>
            <tr className="w-full">
              {[
                "Title",
                "Author",
                "Genre",
                "Year",
                "Status",
                "Actions"
              ].map((_,index) => (
                <th key={index} className="px-6 py-3">
                  <div className="h-5 bg-gray-300 rounded w-full animate-pulse" />
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: 8 }).map((_,rowIdx) => (
              <motion.tr
                key={rowIdx}
                className="hover h-16 w-full"
                initial={{ opacity: 0,y: 10 }}
                animate={{ opacity: 1,y: 0 }}
                transition={{ delay: 0.1 + rowIdx * 0.05,duration: 0.4 }}
              >
                {Array.from({ length: 6 }).map((__,colIdx) => (
                  <td key={colIdx} className="px-6 py-3">
                    <div className="h-5 bg-gray-200 rounded w-full animate-pulse" />
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

export default Shimmer;