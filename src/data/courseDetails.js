const meta = {
  "learn-figma-from-basic": {
    fullTitle: "Learn Figma from Basic: A Beginner's Guide",
    subtitle: "Go from your first frame to a finished interactive prototype",
    topic: "interface design in Figma",
    level: "Beginner",
  },
  "build-digital-asset": {
    fullTitle: "Build Digital Asset: A Comprehensive Guide",
    subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
    topic: "digital asset creation",
    level: "Intermediate",
  },
  "the-power-of-big-data": {
    fullTitle: "The Power of Big Data: From Raw Numbers to Insight",
    subtitle: "Learn to collect, analyze and visualize data that drives decisions",
    topic: "big data analysis",
    level: "Beginner",
  },
  "balancing-productivity": {
    fullTitle: "Balancing Productivity and Well-Being",
    subtitle: "Build sustainable habits that keep you effective without burning out",
    topic: "productivity and well-being",
    level: "Beginner",
  },
  "mastering-money-management": {
    fullTitle: "Mastering Money Management",
    subtitle: "Take control of your budget, savings and long-term financial goals",
    topic: "personal finance",
    level: "Beginner",
  },
  "from-idea-to-startup-success": {
    fullTitle: "From Idea to Startup Success",
    subtitle: "Validate your idea, build a team and launch with confidence",
    topic: "building a startup",
    level: "Beginner",
  },
};

const digitalAssetModules = [
  ["Introduction to Digital Assets", "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.", 12],
  ["Design Principles for Impact", "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.", 21],
  ["Advanced Techniques in Digital Creation", "Go beyond the basics with layering, masking and non-destructive workflows that make your assets faster to build and easier to change.", 16],
  ["User-Centric Design Strategies", "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.", 18],
  ["Interactive Media and Engagement", "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.", 20],
  ["Project Showcase and Critique", "Refine your presentation skills with 'Effective Presentation Techniques' and enhance collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.", 14],
  ["Optimizing Digital Assets for Various Platforms", "Adapt your digital creations for mobile, web and print, and optimize for social media. Ensure widespread accessibility and engagement across diverse digital landscapes.", 17],
];

function genericModules(topic) {
  return [
    ["Getting Started", `Meet the core ideas behind ${topic} and set up everything you need to follow along.`, 12],
    ["Core Principles", `Learn the principles that every good practitioner of ${topic} relies on.`, 19],
    ["Hands-On Techniques", `Apply what you've learned in guided exercises that build real skills in ${topic}.`, 22],
    ["Working on Real Projects", `Take on practical projects that mirror real-world challenges in ${topic}.`, 18],
    ["Collaboration and Feedback", "Learn how to give and receive feedback and improve your work with others.", 15],
    ["Showcase and Review", "Present your results with confidence and learn how to review your own progress.", 14],
    ["Next Steps", "Plan your next milestones and keep growing with curated resources.", 10],
  ];
}

const keyPoints = {
  "build-digital-asset": [
    "Foundational Concepts", "Design Principles Mastery", "Advanced Techniques in Digital Creation",
    "Project Showcase and Critique", "Optimizing for Various Platforms",
    "Digital Asset Management Best Practices", "Monetization Strategies", "Capstone Project: Building Your Portfolio",
  ],
};
const genericKeyPoints = (topic) => [
  "Foundational Concepts", `Core Skills in ${topic}`, "Practical, Hands-On Exercises", "Real-World Project Work",
  "Feedback and Peer Review", "Best Practices and Common Pitfalls", "Tools and Resources", "Capstone Project",
];

const reviews = [
  { id: 1, name: "Jenny Wilson", role: "UI/UX Designer", avatar: "/images/avatars/reviewer1.png", when: "a year ago",
    text: "This course provided me with a comprehensive understanding of the field. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!" },
  { id: 2, name: "Albert Flores", role: "UI/UX Designer", avatar: "/images/avatars/reviewer2.png", when: "a year ago",
    text: "This course transformed my approach to design. The combination of theory, exercises, and real-world applications made it a truly rewarding experience. Excited to apply it!" },
  { id: 3, name: "Cody Fisher", role: "UI/UX Designer", avatar: "/images/avatars/reviewer3.png", when: "a year ago",
    text: "The project critique and collaborative lessons were a standout. I loved discussing work with peers, and the feedback helped me grow both my skills and my confidence." },
  { id: 4, name: "Brooklyn Simmons", role: "UI/UX Designer", avatar: "/images/avatars/4.png", when: "a year ago",
    text: "The lessons on optimizing for various platforms were very insightful. The course struck a great balance between depth and clarity, and the engaging pace kept me motivated throughout." },
];

export const ratingBreakdown = [
  { stars: 5, count: 138 },
  { stars: 4, count: 24 },
  { stars: 3, count: 6 },
  { stars: 2, count: 2 },
  { stars: 1, count: 2 },
];

export function getCourseDetail(course) {
  const m = meta[course.id] ?? {
    fullTitle: course.title.replace(/\.\.\.$/, ""),
    subtitle: "Learn at your own pace with expert guidance",
    topic: course.title.replace(/\.\.\.$/, "").toLowerCase(),
    level: course.level,
  };
  const modules = (course.id === "build-digital-asset" ? digitalAssetModules : genericModules(m.topic)).map(
    ([title, description, minutes], i) => ({ number: i + 1, title, description, minutes })
  );
  const total = ratingBreakdown.reduce((s, r) => s + r.count, 0);
  const average = ratingBreakdown.reduce((s, r) => s + r.stars * r.count, 0) / total;

  return {
    ...course,
    fullTitle: m.fullTitle,
    subtitle: m.subtitle,
    level: m.level,
    rating: Math.round(average * 10) / 10,
    reviewCount: total,
    students: 199,
    totalLessons: 112,
    totalHours: 24,
    modules,
    description: [
      `Embark on an enlightening exploration into the world of ${m.topic} with our comprehensive course, "${m.fullTitle}". This transformative learning experience takes you on a journey from foundational concepts to mastering advanced techniques. The guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of ${m.topic}.`,
      `In the initial modules, you'll delve deep into the principles that shape the discipline, immersing yourself in the concepts that form the foundations of ${m.topic}. Understand the fundamental elements that constitute a compelling piece of work, and gain proficiency in leveraging these elements to communicate effectively.`,
      `As you progress through the course, you'll ascend to higher levels of mastery, delving into the nuances of real projects. Uncover the secrets behind effective, polished results, and develop your own style and process that stands out.`,
    ],
    keyPoints: keyPoints[course.id] ?? genericKeyPoints(m.topic),
    sneakPeek: ["digital-asset", "figma-basic", "big-data", "idea"].map((n) => `/images/courses/${n}.jpg`),
    includes: ["Learning Resources", "Quality Lesson Videos", "Certificate of Completion", "Private Consultation"],
    progress: 55,
    reviews,
  };
}
