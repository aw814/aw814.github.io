import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectsEducationSection = () => {
  const projects = [
    {
      title: "LLM-based Chatbot for Stress Detection and Regulation",
      period: "Sep–Dec 2023",
      category: "Applied NLP & Cognitive Behavioral Therapy",
      highlights: [
        "Developed an LLM-powered conversational agent for stress detection and adaptive mental health support",
        "Integrated principles from cognitive behavioral therapy to ground model responses in evidence-based techniques"
      ]
    },
    {
      title: "Differentially Private Synthetic Data Generation for Time Series",
      period: "Jan–Apr 2024",
      category: "Privacy-Preserving Machine Learning",
      highlights: [
        "Designed methods for generating realistic synthetic time-series data under differential privacy constraints",
        "Combined deep learning architectures with formal privacy guarantees to balance utility and protection"
      ]
    }
  ];

  const teaching = [
    {
      title: "Undergraduate Teaching Assistant – Natural Language Processing",
      organization: "UBC",
      period: "Sep 2023 – Dec 2023",
      highlights: [
        "Supported 80+ students in implementing NLP algorithms for tasks such as classification, sequence tagging, and question answering",
        "Assisted with course assessment design and grading, providing feedback to reinforce student learning outcomes"
      ]
    },
    {
      title: "Technical Director (Pro Bono)",
      organization: "Women in Data Science Association at UBC",
      period: "May 2022 – Jan 2023",
      highlights: [
        "Organized bi-weekly workshops on data science, applied mathematics, and visualization for 200+ participants",
        "Mentored 10+ students, supporting their academic growth and professional development in STEM"
      ]
    }
  ];

  const skills = {
    "Programming": ["Python", "MATLAB", "R", "C++", "Java"],
    "Frameworks & Tools": ["TensorFlow", "PyTorch", "AWS", "MySQL", "REDCap"],
    "Specialized Skills": ["Deep Learning", "Natural Language Processing", "Causal Inference"]
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Projects */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">Selected Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="p-6 shadow-soft hover:shadow-cute transition-all duration-300 transform hover:-translate-y-2 border-0 bg-card/60 backdrop-blur-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="secondary">{project.category}</Badge>
                    <Badge variant="outline" className="border-primary text-primary">{project.period}</Badge>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-foreground flex items-start">
                      <span className="text-accent mr-2 mt-1.5 flex-shrink-0">•</span>
                      <span className="text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* Education & Teaching */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Education */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-primary">Education</h2>
            <Card className="p-6 shadow-cute border-0 bg-card/80 backdrop-blur-sm animate-bounce-in">
              <h3 className="text-xl font-semibold text-foreground mb-2">University of British Columbia (UBC)</h3>
              <p className="text-muted-foreground mb-1">Vancouver, BC</p>
              <div className="space-y-2 mb-4">
                <p className="text-foreground">• M.Sc. in Computer Science (Sep 2024 – Present)</p>
                <p className="text-foreground">• B.Sc. in Computer Science & Statistics (Sep 2019 – May 2024)</p>
              </div>
              <Badge className="bg-gradient-primary border-0 text-white">GPA: 4.0/4.0</Badge>
            </Card>
          </div>

          {/* Teaching */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-primary">Teaching & Mentorship</h2>
            <div className="space-y-6">
              {teaching.map((item, index) => (
                <Card 
                  key={index} 
                  className="p-6 shadow-soft border-0 bg-card/60 backdrop-blur-sm animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <div className="mb-3">
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="text-primary font-medium">{item.organization}</p>
                    <Badge variant="outline" className="border-primary text-primary mt-2">
                      {item.period}
                    </Badge>
                  </div>
                  
                  <ul className="space-y-1">
                    {item.highlights.map((highlight, i) => (
                      <li key={i} className="text-foreground flex items-start">
                        <span className="text-accent mr-2 mt-1.5 flex-shrink-0">•</span>
                        <span className="text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">Technical Skills</h2>
          <Card className="p-8 shadow-cute border-0 bg-card/80 backdrop-blur-sm animate-bounce-in">
            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, skillList], index) => (
                <div key={index} className="text-center">
                  <h3 className="text-lg font-semibold text-primary mb-4">{category}</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {skillList.map((skill, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary" 
                        className="text-xs animate-fade-in-up"
                        style={{ animationDelay: `${(index * skillList.length + i) * 0.1}s` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsEducationSection;