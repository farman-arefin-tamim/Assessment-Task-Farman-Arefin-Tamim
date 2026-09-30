const ProgressCard = ({ label, percent }) => (
    <div className="card bg-base-100 shadow-lg p-4 w-[180px]">
        <p className="text-gray-500 text-xs">{label}</p>
        <p className="text-2xl font-bold mt-1">{percent}%</p>
        <progress className="progress progress-primary w-full mt-2" value={percent} max="100"></progress>
    </div>
);

export default ProgressCard;