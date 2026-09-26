'use client'

import { IWorkouts } from '@/type/LibraryCard';
import Image from 'next/image';
import Link from 'next/link';




interface IWorkoutProps {
    workout: IWorkouts
    setSelectedWorkouts: React.Dispatch<React.SetStateAction<number>>;
}

const WorkoutsCard = ({ workout }: IWorkoutProps) => {
    
    return (
        <Link
            href={`workouts/${workout.id}`}>
            <div className="rounded-xl border border-transparent hover:border-[#c2f800] transition-colors duration-300 bg-black text-white shadow-lg my-6">
                {/* Image */}
                <div className="h-[220px]  rounded-b-none rounded-2xl  overflow-hidden">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        width={900}
                        height={600}
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="p-4">

                    {/* Tags */}
                    <div className="mb-3 flex flex-wrap gap-2">
                        {workout.muscleGroups.slice(0, 2).map((muscle, index) => (
                            <span
                                key={index}
                                className="rounded-full bg-[#b6ff00] px-2.5 py-1 text-[10px] font-bold uppercase text-black"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    {/* Name */}
                    <h2 className="mb-1 text-sm font-bold uppercase">
                        {workout.name}
                    </h2>

                    {/* Equipment */}
                    <p className="mb-3 text-[11px] text-gray-200">
                        {workout.equipment}
                    </p>

                    {/* Divider */}
                    <div className="mb-3 border-t border-gray-800" />

                    {/* Stats */}
                    <div className="flex items-center justify-items-start gap-5 text-[10px] text-gray-400">

                        <div className="flex items-center font-bold gap-1">
                            
                            <span>{workout.duration} min</span>
                        </div>

                        <div className="flex items-center font-bold gap-1">
                          
                            <span>{workout.caloriesBurned} kcal</span>
                        </div>

                        <div className="flex items-center  font-bold gap-1">
                          
                            <span>{workout.rating}</span>
                        </div>

                    </div>
                </div>
            </div>
        </Link>
    );
};

export default WorkoutsCard;