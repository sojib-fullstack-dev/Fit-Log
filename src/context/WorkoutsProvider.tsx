"use client";

import { IWorkouts } from "@/type/LibraryCard";
import { createContext, useState } from "react";

interface IWorkoutContext {
  selectedWorkouts: IWorkouts[];
  addPlan: (workout: IWorkouts) => void;
  removePlan: (id: number) => void;

  savedWorkouts: IWorkouts[];
  addSaved: (workout: IWorkouts) => void;
  removeSaved: (id: number) => void;
}
export const WorkoutContext = createContext<IWorkoutContext | null>(null);

const WorkoutProvider = ({ children }: { children: React.ReactNode }) => {
          // plan useState 
  const [selectedWorkouts, setSelectedWorkouts] = useState<IWorkouts[]>([]);
              // save useState 
  const [savedWorkouts, setSavedWorkouts] = useState<IWorkouts[]>([]);

  // Add workout to today's plan
  const addPlan = (workout: IWorkouts) => {
    setSelectedWorkouts((prev) => {
      const alreadyAdded = prev.some((item) => item.id === workout.id);
      if (alreadyAdded) return prev;

      if (prev.length >= 5) return prev;

      return [...prev, workout];
    });
  };

  // Save workout
  const addSaved = (workout: IWorkouts) => {
    setSavedWorkouts((prev) => {
      const alreadySaved = prev.some((item) => item.id === workout.id);
      if (alreadySaved) return prev;

      return [...prev, workout];
    });
  };

    // Remove workout from today's plan
  const removePlan = (id: number) => {
    setSelectedWorkouts((prev) => prev.filter((item) => item.id !== id));
  };

  // Remove workout from saved
  const removeSaved = (id: number) => {
    setSavedWorkouts((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <WorkoutContext.Provider
      value={{ selectedWorkouts, addPlan, removePlan, savedWorkouts, addSaved, removeSaved }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;