import { IWorkOut } from '@/type/LibraryCard';
import { Clock, Flame, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const TheLibraryCardDesign = ({data}:{data:IWorkOut}) => {
    const tagColors = ["bg-[#ccff00] text-black", "bg-orange-500 text-black"];

    return (
                   <div>
                     <Link
                                href={`/workouts/${data.id}`}
                                key={data.id}
                                className="bg-[#141414] rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-[#ccff00]/40 transition block"
                            >
                                {/* Image */}
                             <div className="relative h-48 w-full overflow-hidden">
                               <Image
                                  src={data.image}
                                  width={480}
                                 height={300}
                                alt={data.name}
                              className="w-full h-full object-cover object-top"/>
     
                           </div>

                                {/* Content */}
                                <div className="p-4">
                                    {/* Tags */}
                                    <div className="flex gap-2 mb-3">
                                        {data.muscleGroups.slice(0, 2).map((tag, i) => (
                                            <span
                                                key={tag}
                                                className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase ${tagColors[i % 2]}`}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-white font-bold uppercase text-base tracking-wide">
                                        {data.name}
                                    </h3>

                                    {/* Equipment */}
                                    <p className="text-gray-400 text-sm mt-1">{data.equipment}</p>

                                    <div className="border-t border-white/10 my-3" />

                                    {/* Stats row */}
                                    <div className="flex items-center gap-4 text-gray-300 text-sm">
                                        <div className="flex items-center gap-1">
                                            <Clock size={14} />
                                            <span>{data.duration} min</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Flame size={14} />
                                            <span>{data.caloriesBurned} kcal</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Star size={14} className="text-[#ccff00]" fill="#ccff00" />
                                            <span>{data.rating}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
        </div>
    );
};

export default TheLibraryCardDesign;