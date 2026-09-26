const Loading = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0d0f12] text-white">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-[#272b32] border-t-[#ccff00] rounded-full animate-spin"></div>
                <p className="text-gray-400 text-sm">Loading workouts...</p>
            </div>
        </div>
    );
};

export default Loading;