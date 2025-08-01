
import { useEffect, useState } from 'react';
import CountdownTimer from '@/components/CountdownTimer';
import EventCard from '@/components/EventCard';
import GallerySection from '@/components/GallerySection';
import MotionBackground from '@/components/MotionBackground';
import { Calendar, Users, Trophy, Code, Lightbulb } from 'lucide-react';

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const events = [
    {
      title: "Coding Competition",
      icon: <Code size={24} />,
      description: "Showcase your programming skills",
      details: "Join our intensive coding competition where participants solve challenging algorithmic problems and build innovative solutions. Categories include web development, mobile apps, AI/ML, and data structures. Winners receive cash prizes and internship opportunities."
    },
    {
      title: "Tech Talks",
      icon: <Lightbulb size={24} />,
      description: "Learn from industry experts",
      details: "Attend inspiring talks from leading technology professionals, startup founders, and researchers. Topics cover emerging technologies, career guidance, industry trends, and breakthrough innovations shaping the future."
    },
    {
      title: "Workshop Sessions",
      icon: <Users size={24} />,
      description: "Hands-on learning experience",
      details: "Participate in interactive workshops covering the latest technologies including React, Python, Machine Learning, Cloud Computing, and more. All skill levels welcome with expert mentors to guide you through practical projects."
    },
    {
      title: "Innovation Challenge",
      icon: <Trophy size={24} />,
      description: "Build solutions for real problems",
      details: "Team up to solve real-world challenges presented by partner companies. Develop prototypes, present to industry judges, and compete for substantial prizes while making a meaningful impact."
    },
    {
      title: "Networking Event",
      icon: <Calendar size={24} />,
      description: "Connect with like-minded individuals",
      details: "Meet fellow developers, entrepreneurs, and industry professionals in a relaxed environment. Build valuable connections, discover collaboration opportunities, and expand your professional network."
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Motion Background */}
      <MotionBackground />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header with College Logos */}
        <header className="py-8 text-center">
          {/* College Logos Row */}
          <div className="flex justify-between items-center mb-8 px-4 max-w-6xl mx-auto">
            <div className="flex items-center gap-4">
              <img 
                src="/lovable-uploads/2de9abef-02ad-4fd0-9b30-fde60eb8655b.png" 
                alt="St. Joseph's College of Engineering" 
                className="h-16 md:h-20 w-auto hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm text-muted-foreground">Celebrating</div>
                <div className="text-lg font-bold gradient-text">32 Years of Excellence</div>
                <div className="text-xs text-muted-foreground">Since 1994</div>
              </div>
            </div>
          </div>
          
          {/* Main Logo */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/da7037b6-051b-490c-b959-3138ece468bf.png" 
              alt="Jet Potential Logo" 
              className="mx-auto h-32 md:h-48 w-auto animate-pulse-glow"
            />
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold gradient-text mb-4">
            A flagship event for tech enthusiasts
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto px-4">
            Join us for the ultimate technology experience
          </p>
        </header>

        <div className="container mx-auto px-4 max-w-6xl">
          {/* Countdown Section */}
          <CountdownTimer />

          {/* Stats Section */}
          <div className="py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-all">
                <div className="text-3xl font-bold gradient-text">500+</div>
                <div className="text-muted-foreground">Participants</div>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-all">
                <div className="text-3xl font-bold gradient-text">5</div>
                <div className="text-muted-foreground">Events</div>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-all">
                <div className="text-3xl font-bold gradient-text">48</div>
                <div className="text-muted-foreground">Hours</div>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-all">
                <div className="text-3xl font-bold gradient-text">₹50K</div>
                <div className="text-muted-foreground">Prize Pool</div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <section className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold gradient-text mb-4">About Jet Potential '25</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Jet Potential '25 is a premier technology event that brings together students, professionals, 
                and industry leaders to explore, learn, and innovate. Join us for an exciting journey of 
                discovery, competition, and networking in the world of technology.
              </p>
            </div>
          </section>

          {/* Events Section */}
          <section className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold gradient-text mb-4">Events</h2>
              <p className="text-muted-foreground">Click on any event to learn more</p>
            </div>
            
            <div className="space-y-4 max-w-4xl mx-auto">
              {events.map((event, index) => (
                <EventCard
                  key={index}
                  title={event.title}
                  icon={event.icon}
                  description={event.description}
                  details={event.details}
                />
              ))}
            </div>
          </section>

          {/* Gallery Section */}
          <GallerySection />
        </div>
        
        <footer className="py-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 Jet Potential. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
