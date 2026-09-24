'use client'
import { WorkoutContext } from "@/context/WorkoutsProvider";
import { IWorkOut } from "@/type/LibraryCard";
import { Bookmark, Plus } from "lucide-react";
import { useContext } from "react";

interface IPlanSaveBtnProps {
    datas: IWorkOut;
}


const PlanSaveBtn = ({ datas }: IPlanSaveBtnProps) => {

    const context = useContext(WorkoutContext);

if (!context) {
    throw new Error("PlanSaveBtn must be used within a WorkoutProvider");
}

    const {slecetedWorkout, setSlecetedWorkout}=useContext(WorkoutContext)

    // console.log(datas)

const handleClickBtn=()=>{
    setSlecetedWorkout({...slecetedWorkout , datas})
    console.log(handleClickBtn)
}

    return (
        <div className="flex gap-4 mt-6">
            <button onClick={()=>handleClickBtn()} className="flex items-center gap-2 bg-[#ccff00] text-black font-semibold px-5 py-2.5 rounded-full hover:bg-[#b8e600] transition cursor-pointer">
                <Plus size={16} />
                Add to today's plan
            </button>
            <button onClick={()=>handleClickBtn()} className="flex items-center gap-2 border border-white/20 text-white font-semibold px-5 py-2.5 rounded-full hover:bg-white/10 transition cursor-pointer">
                <Bookmark size={16} />
                Save for later
            </button>
        </div>
    );
};

export default PlanSaveBtn;