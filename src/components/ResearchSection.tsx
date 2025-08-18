import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ResearchSection = () => {
  const interests = [
    {
      title: "Multilingual AI",
      description: "Investigating how multilingual models can surface underrepresented knowledge across languages, addressing the limitations of current systems that privilege dominant perspectives."
    },
    {
      title: "Expressive & Adaptive AI",
      description: "Designing emotionally expressive, adaptive AI systems that foster transparency and empathy, reframing AI not only as a computational tool but also as a medium for cultural inclusion and human connection."
    }
  ];

  const publications = [
    {
      title: "Ain't Misbehavin': Using LLMs to Generate Expressive Robot Behavior",
      authors: "Zining Wang, Paul Reisert, Eric Nichols, Randy Gómez",
      venue: "ACM/IEEE International Conference on Human-Robot Interaction (HRI), 2024",
      status: "published"
    },
    {
      title: "WikiGap: Promoting Epistemic Equity by Surfacing Knowledge Gaps Between English Wikipedia and Other Language Editions",
      authors: "Zining Wang, Yuxuan Zhang, Dongwook Yoon, Nicholas Vincent, Farhan Samir, Vered Shwartz",
      venue: "Under review at ACM CSCW, 2026",
      status: "under-review"
    },
    {
      title: "Are Neural Representation Learning Methods a Viable Alternative to TMLE for Causal Estimation?",
      authors: "Mohammad Ehsanul Karima, Zining Wang",
      venue: "Under review at Journal of Statistical Computation and Simulation",
      status: "under-review"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">Research</h2>
        
        {/* Research Interests */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold mb-8 text-foreground">Research Interests</h3>
          <p className="text-lg text-muted-foreground mb-8">
            I study human-centered, socio-technical AI systems that support epistemic equity and human well-being. My work focuses on:
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {interests.map((interest, index) => (
              <Card 
                key={index} 
                className="p-6 shadow-soft hover:shadow-cute transition-all duration-300 transform hover:-translate-y-2 border-0 bg-card/60 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h4 className="text-xl font-semibold mb-4 text-primary">{interest.title}</h4>
                <p className="text-foreground leading-relaxed">{interest.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Publications */}
        <div>
          <h3 className="text-3xl font-semibold mb-8 text-foreground">Publications</h3>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <Card 
                key={index} 
                className="p-6 shadow-soft hover:shadow-cute transition-all duration-300 border-0 bg-card/60 backdrop-blur-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-semibold text-foreground pr-4">{pub.title}</h4>
                  <Badge variant={pub.status === "published" ? "default" : "secondary"} className="shrink-0">
                    {pub.status === "published" ? "Published" : "Under Review"}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-2">{pub.authors}</p>
                <p className="text-sm text-accent italic">{pub.venue}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;