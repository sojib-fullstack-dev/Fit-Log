"use client";

import { useContext } from "react";

import { IWorkouts } from "@/type/LibraryCard";
import { WorkoutContext } from "@/context/WorkoutsProvider";
import { FiPlus } from "react-icons/fi";
import { toast } from "react-toastify";


interface IPlanButtonProps {
  workout: IWorkouts;
}

const PlanButton = ({ workout }: IPlanButtonProps) => {
  const context = useContext(WorkoutContext);


  if (!context) {
    throw new Error("PlanButton must be inside WorkoutProvider");
  }

  const { addPlan, selectedWorkouts } = context;

  const alreadyAdded = selectedWorkouts.some((item) => item.id === workout.id);

  return (
   <button 
     onClick={() => {
      if (alreadyAdded) {
        toast.error("Already added");
        return;
      }
      addPlan(workout);
      toast.success("Added to today's plan");
      }}

  className={`flex items-center gap-2 font-semibold px-5 py-2.5 rounded-full transition ${
    alreadyAdded
      ? "bg-gray-600 text-gray-300 cursor-not-allowed"
      : "bg-[#ccff00] text-black hover:bg-[#b8e600] cursor-pointer"
  }`}
>
  <FiPlus size={16} />
  {alreadyAdded ? "Already Added" : "Add to today's plan"}
</button>
  );
};

export default PlanButton;