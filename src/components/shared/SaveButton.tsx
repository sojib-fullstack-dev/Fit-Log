"use client";

import React, { useContext } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { IWorkouts } from "@/type/LibraryCard";
import { WorkoutContext } from "@/context/WorkoutsProvider";


interface IPlanButtonProps {
  workout: IWorkouts;
}

const SavedButton = ({ workout }: IPlanButtonProps) => {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error("SavedButton must be inside WorkoutProvider");
  }

  const { addSaved } = context;

  return (
 <button
  onClick={() => addSaved(workout)}
  className="flex items-center gap-2 rounded-md border border-[#30343b] px-4 py-2 text-xs text-gray-300 transition hover:bg-[#1b1e23]"
>
  <FaRegBookmark size={14} />
  Save for later
</button>
  );
};

export default SavedButton;