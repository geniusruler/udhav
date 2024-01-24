import React from 'react';

const ProgressBar = ({ skill, percentage }) => {
  return (
    <div className="mb-4">
      <p className="text-sm font-semibold text-gray-600">{skill}</p>
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
              {percentage}%
            </span>
          </div>
        </div>
        <div className="flex h-2 overflow-hidden text-xs bg-teal-200 rounded">
          <div
            style={{ width: `${percentage}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
