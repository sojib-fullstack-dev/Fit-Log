import PlanSaveBtn from "@/app/components/WorkOutBtn/Plan&SaveBtn";
import { getWorkouts } from "@/lib/api";
import { IWorkOut } from "@/type/LibraryCard";
import { Bookmark, Plus, Star } from "lucide-react";
import Image from "next/image";

interface IDetailsPages {
    params:Promise<{
        id:string
    }>;
}

const LibraryCardDetails =async ({params}:IDetailsPages) => {
    const DetailsData =await getWorkouts()
    const {id}=await params
    // console.log('params details',params , 'iddddddddd', id )
    const datas=DetailsData.find((data:IWorkOut)=>data.id=== Number(id))

     if (!datas) {
        return <div className="font-bold text-white p-8">Workout not found.</div>
    }
    return (
        <div className="px-4 md:px-8 lg:px-16 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left - Image */}
            <div className="relative w-full h-[400px] lg:h-full rounded-2xl overflow-hidden">
                <Image
                    src={datas.image}
                    alt={datas.name}
                    fill
                    className="object-cover object-top"
                />
            </div>

            {/* Right - Details */}
            <div>
                <h1 className="text-white font-bold text-3xl uppercase">{datas.name}</h1>
                <p className="text-gray-400 mt-3">{datas.description}</p>

                {/* Tags */}
                <div className="flex gap-2 mt-4">
                    {datas.muscleGroups.map((tag: string, i: number) => (
                        <span
                            key={tag}
                            className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase ${
                                i % 2 === 0 ? "bg-[#ccff00] text-black" : "bg-orange-500 text-black"
                            }`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Specs Table */}
                <div className="bg-[#141414] rounded-xl mt-6 divide-y divide-white/10">
                    <div className="flex justify-between px-5 py-3">
                        <span className="text-gray-400 text-sm">EQUIPMENT</span>
                        <span className="text-white text-sm font-semibold">{datas.equipment}</span>
                    </div>
                    <div className="flex justify-between px-5 py-3">
                        <span className="text-gray-400 text-sm">DIFFICULTY</span>
                        <span className="text-white text-sm font-semibold">{datas.difficulty}</span>
                    </div>
                    <div className="flex justify-between px-5 py-3">
                        <span className="text-gray-400 text-sm">SETS</span>
                        <span className="text-white text-sm font-semibold">{datas.sets}</span>
                    </div>
                    <div className="flex justify-between px-5 py-3">
                        <span className="text-gray-400 text-sm">REPS</span>
                        <span className="text-white text-sm font-semibold">{datas.reps}</span>
                    </div>
                    <div className="flex justify-between px-5 py-3">
                        <span className="text-gray-400 text-sm">DURATION</span>
                        <span className="text-white text-sm font-semibold">{datas.duration} min</span>
                    </div>
                    <div className="flex justify-between px-5 py-3">
                        <span className="text-gray-400 text-sm">CALORIES</span>
                        <span className="text-white text-sm font-semibold">{datas.caloriesBurned} kcal</span>
                    </div>
                    <div className="flex justify-between px-5 py-3">
                        <span className="text-gray-400 text-sm">RATING</span>
                        <span className="text-white text-sm font-semibold flex items-center gap-1">
                            <Star size={14} className="text-[#ccff00]" fill="#ccff00" />
                            {datas.rating}
                        </span>
                    </div>
                </div>

                {/* Instructions */}
                <div className="mt-6">
                    <h2 className="text-white font-bold uppercase mb-3">Instructions</h2>
                    <ol className="space-y-2">
                        {datas.instructions.map((step: string, i: number) => (
                            <li key={i} className="text-gray-400 text-sm flex gap-2">
                                <span className="text-white font-semibold">{i + 1}.</span>
                                {step}
                            </li>
                        ))}
                    </ol>
                </div>

                {/* Buttons */}
                <PlanSaveBtn datas={datas}/>
            </div>
        </div>
    );
};

export default LibraryCardDetails;