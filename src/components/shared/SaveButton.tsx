"use client";

import React, { useContext } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { IWorkouts } from "@/type/LibraryCard";
import { WorkoutContext } from "@/context/WorkoutsProvider";
import { toast } from "react-toastify";


interface IPlanButtonProps {
  workout: IWorkouts;
}

const SavedButton = ({ workout }: IPlanButtonProps) => {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error("SavedButton must be inside WorkoutProvider");
  }

  const { addSaved , savedWorkouts} = context;

  const alreadyAdded=savedWorkouts.some((item)=>
    item.id===workout.id
  );

  return (
<button
  onClick={() => {
    if (alreadyAdded) {
      toast.error("Already Saved");
      return;
    }
    addSaved(workout);
    toast.success("Saved for later");
  }}
  className={`flex items-center gap-2 font-semibold px-5 py-2.5 rounded-full transition ${
    alreadyAdded
      ? "bg-[#ccff00] text-black hover:bg-[#b8e600] cursor-pointer"
      : "bg-[#ccff00] text-black hover:bg-[#b8e600] cursor-pointer"
  }`}
>
  <FaRegBookmark size={14} />
  {alreadyAdded ? "Save for later" : "Save for later"}
</button>
  );
};

export default SavedButton;