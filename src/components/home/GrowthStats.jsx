const stats = [
    { id: 1, value: "12K", label: "Students" },
    { id: 2, value: "70+", label: "Courses" },
    { id: 3, value: "16", label: "Creators" },
];

const GrowthStats = () => (
    <div className="flex gap-10 mt-8">
        {stats.map((s) => (
            <div key={s.id}>
                <p className="text-primary text-2xl font-bold">{s.value}</p>
                <p className="text-gray-500 text-sm">{s.label}</p>
            </div>
        ))}
    </div>
);

export default GrowthStats;