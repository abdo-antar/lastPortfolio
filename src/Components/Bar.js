import React from "react";

function SkillBar({ skill, percentage }) {
  return (
    <div className="mb-4 sm:mb-5">
      {/* skill  and percentage */}
      <div className="flex justify-between font-bold text-white mb-2 text-sm sm:text-base">
        <span>{skill}</span>
        <span className="text-blue-500">{percentage}%</span>
      </div>

      {/* Progress percentage */}
      <div className="bg-white rounded-full h-1.5 sm:h-2 overflow-hidden">
        <div
          className="h-full rounded-full "
          style={{
            width: `${percentage}%`,
            backgroundColor: "#3b82f6", // 
          }}
        ></div>
      </div>
    </div>
  );
}

export default SkillBar;
