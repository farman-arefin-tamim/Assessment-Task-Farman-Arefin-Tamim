const items = [
    "Share Your Expertise",
    "Monetize Your Passion",
    "Flexibility and Autonomy",
    "Build a Community",
];

const GrowthChecklist = () => (
    <ul className="flex flex-col gap-3 mt-6">
        {items.map((item) => (
            <li key={item} className="flex items-center gap-3">
                <span className="badge badge-primary badge-sm rounded-full">✓</span>
                <span>{item}</span>
            </li>
        ))}
    </ul>
);

export default GrowthChecklist;