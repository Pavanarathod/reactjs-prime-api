import { useState } from "react";

const DaysButton = () => {
  const [selectedDates, setSelectedDates] = useState([]);

  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const handleDays = (day) => {
    if (selectedDates.includes(day)) {
      setSelectedDates(selectedDates.filter((item) => item !== day));
    } else {
      setSelectedDates([...selectedDates, day]);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen space-x-5">
      {days.map((btn) => (
        <button
          onClick={() => handleDays(btn)}
          className={`py-2 px-5 bg-gray-100 border border-gray-300 shadow-md rounded-md text-black ${
            selectedDates.includes(btn) && "bg-indigo-500 text-white"
          }`}
          key={btn}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default DaysButton;
