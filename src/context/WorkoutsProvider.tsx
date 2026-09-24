"use client"
import { IWorkOut } from '@/type/LibraryCard';
import React, { createContext, ReactNode, useState } from 'react';


interface IWorkoutContext {
    slecetedWorkout: IWorkOut[];
    setSlecetedWorkout: React.Dispatch<React.SetStateAction<IWorkOut[]>>;
}

export const WorkoutContext = createContext<IWorkoutContext | null>(null)

if (!WorkoutContext) {
    throw new Error("PlanSaveBtn must be used within a WorkoutProvider");
}


const WorkoutsProvider = ({ children }: { children: ReactNode }) => {

    const [slecetedWorkout, setSlecetedWorkout] = useState(0)
    const addPlan = () => {
        setSlecetedWorkout((item) => item + 1)
    }

    const Shared = {
        slecetedWorkout,
        addPlan
    }

    return (
        <WorkoutContext.Provider value={Shared} >{children}</WorkoutContext.Provider>

    )

};

export default WorkoutsProvider;