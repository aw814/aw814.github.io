import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Graduate Student Researcher",
      organization: "UBC NLP Lab & Vector Institute of AI",
      location: "Vancouver, BC",
      period: "Jan 2025 – Present",
      highlights: [
        "Designing benchmarks to evaluate multilingual LLMs' ability to generalize facts across languages",
        "Applying causal inference to identify and measure cross-lingual knowledge gaps",
        "Developed WikiGap, a system that surfaces factual disparities across Wikipedia editions to promote cross-cultural awareness and transparency"
      ]
    },
    {
      title: "Natural Language Processing Research Intern",
      organization: "Honda Research Institute Japan Co., Ltd.",
      location: "Saitama, Japan",
      period: "May 2023 – Dec 2023",
      highlights: [
        "Built large-scale datasets for emotion recognition in text",
        "Designed label schemes tailored for social robotics, improving alignment between human affect and robot behavior",
        "Investigated methods for integrating NLP models into emotionally expressive robotic interactions"
      ]
    },
    {
      title: "Data Scientist Intern",
      organization: "Faculty of Medicine, University of British Columbia",
      location: "Vancouver, BC",
      period: "Jan 2022 – Mar 2023",
      highlights: [
        "Developed knowledge graphs to support clinical research data integration",
        "Automated survey workflows to improve efficiency in large-scale clinical studies",
        "Conducted data analysis to guide improvements in survey design and patient engagement"
      ]
    },
    {
      title: "Database Developer",
      organization: "Digital Solutions, UBC Faculty of Medicine",
      location: "Vancouver, BC",
      period: "Sep 2021 – Dec 2021",
      highlights: [
        "Implemented automated data pipelines to facilitate metadata sharing across thousands of clinical studies",
        "Built interactive dashboards for research administration and resource allocation"
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">Experience</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block animate-bounce-in"
                     style={{ animationDelay: `${index * 0.2 + 0.5}s` }}></div>
                
                <Card className="ml-0 md:ml-20 p-6 shadow-cute hover:shadow-cute transition-all duration-300 transform hover:-translate-y-1 border-0 bg-card/80 backdrop-blur-sm">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.organization}</p>
                      <p className="text-muted-foreground text-sm">{exp.location}</p>
                    </div>
                    <Badge variant="outline" className="border-primary text-primary">
                      {exp.period}
                    </Badge>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-foreground flex items-start">
                        <span className="text-accent mr-2 mt-1.5 flex-shrink-0">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;