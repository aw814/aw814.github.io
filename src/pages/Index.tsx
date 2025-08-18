import ProfileSection from "@/components/ProfileSection";
import ResearchSection from "@/components/ResearchSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsEducationSection from "@/components/ProjectsEducationSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ProfileSection />
      <ResearchSection />
      <ExperienceSection />
      <ProjectsEducationSection />
      
      {/* Footer */}
      <footer className="py-12 px-6 bg-gradient-primary">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/90 text-lg mb-4">Let's connect and collaborate!</p>
          <p className="text-white/70">
            Interested in human-centered AI research? I'd love to hear from you.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
