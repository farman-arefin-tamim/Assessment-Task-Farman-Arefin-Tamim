const CategoryPreviewCard = ({ title, courseCount, studentCount }) => (
    <div className="card bg-base-100 shadow-lg p-4 w-[180px]">
        <h4 className="font-semibold text-sm">{title}</h4>
        <p className="text-gray-500 text-xs mt-1">
            {courseCount} Courses  •  {studentCount} Students
        </p>
    </div>
);

export default CategoryPreviewCard;