import { getWorkouts } from "@/lib/api";
import { IWorkOut } from "@/type/LibraryCard";

import TheLibraryCardDesign from "./TheLibraryCardDesign";


const TheLibraryCard = async () => {

    const LibraryData = await getWorkouts()

    // console.log('data', LibraryData)

    return (
        <div className="px-4 md:px-8 lg:px-16">
            <div>
                <h1 className="font-bold text-3xl text-white">THE LIBRARY</h1>
                <p className="text-gray-400">Twelve lifts covering every major muscle group.</p>
            </div>
            <div className="  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {
                    LibraryData.map((data: IWorkOut,id:number) => {
                        return (
                            <TheLibraryCardDesign key={id} data={data} />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default TheLibraryCard;