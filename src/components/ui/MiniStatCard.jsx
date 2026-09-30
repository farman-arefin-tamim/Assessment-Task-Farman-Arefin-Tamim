const MiniStatCard = ({ label, sublabel, value, variant = "dark" }) => (
    <div className={`card p-4 w-[200px] ${variant === "dark" ? "bg-primary text-white" : "bg-base-100 shadow-lg"}`}>
        <p className="text-xs opacity-80">{label}</p>
        {sublabel && <p className="text-xs opacity-60">{sublabel}</p>}
        <p className="text-xl font-bold mt-1">{value}</p>
    </div>
);

export default MiniStatCard;