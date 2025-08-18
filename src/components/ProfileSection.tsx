import { Card } from "@/components/ui/card";

const ProfileSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="relative inline-block mb-8">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-primary p-1 animate-float">
              <div className="w-full h-full rounded-full bg-muted flex items-center justify-center text-6xl">
                👩‍💻
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Zining (Annie) Wang
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6">
            Master's Student in Computer Science, University of British Columbia
          </p>
          
          <Card className="p-8 shadow-cute border-0 bg-card/80 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Research Summary</h2>
            <p className="text-foreground leading-relaxed text-lg">
              I develop human-centered AI systems that promote epistemic equity and cultural inclusion. 
              My work bridges multilingual natural language processing and emotionally expressive, 
              adaptive AI, with the goal of making AI not only accurate and transparent, but also a 
              medium for empathy, cultural awareness, and human well-being.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;