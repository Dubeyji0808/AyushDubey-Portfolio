import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML", image: "public/Skills/html5-original.svg", category: "frontend" },
  { name: "CSS", image: "public/Skills/css3-original-wordmark.svg", category: "frontend" },
  { name: "JavaScript", image: "public/Skills/javascript-original.svg", category: "frontend" },
  { name: "React", image: "public/Skills/react-original-wordmark.svg", category: "frontend" },
  { name: "TypeScript", image: "public/Skills/typescript-original.svg", category: "frontend" },
  { name: "Tailwind CSS", image: "public/Skills/tailwindcss-original.svg", category: "frontend" },

  // Backend
  { name: "SpringBoot", image: "public/Skills/spring-original-wordmark.svg", category: "backend" },
  { name: "MySQL", image: "public/Skills/mysql-original-wordmark.svg", category: "backend" },
  { name: "PostgreSQL", image: "public/Skills/postgresql-original-wordmark.svg", category: "backend" },

  // Tools
  { name: "Git/GitHub", image: "public/Skills/git-original-wordmark.svg", category: "tools" },
  { name: "Intellij", image: "public/Skills/intellij-original.svg", category: "tools" },,
  { name: "Docker", image: "public/Skills/docker-original-wordmark.svg", category: "tools" },
  { name: "Kubernetes", image: "public/Skills/kubernetes-original-wordmark.svg", category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-md flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-16 h-16 transition-transform duration-300 group-hover:scale-110"
              />
              <p className="mt-4 font-medium text-lg">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
