
import { useEffect, useState } from 'react';
import CountdownTimer from '@/components/CountdownTimer';
import EventCard from '@/components/EventCard';
import GallerySection from '@/components/GallerySection';
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
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="py-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          JET POTENTIAL <span className="text-blue-400">'25</span>
        </h1>
        <p className="text-slate-300 max-w-2xl mx-auto px-4">
          A flagship event for tech enthusiasts
        </p>
      </header>

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Countdown Section */}
        <CountdownTimer />

        {/* Stats Section */}
        <div className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400">500+</div>
              <div className="text-slate-300">Participants</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400">5</div>
              <div className="text-slate-300">Events</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400">48</div>
              <div className="text-slate-300">Hours</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400">₹50K</div>
              <div className="text-slate-300">Prize Pool</div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">About Jet Potential '25</h2>
            <p className="text-slate-300 max-w-3xl mx-auto">
              Jet Potential '25 is a premier technology event that brings together students, professionals, 
              and industry leaders to explore, learn, and innovate. Join us for an exciting journey of 
              discovery, competition, and networking in the world of technology.
            </p>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Events</h2>
            <p className="text-slate-300">Click on any event to learn more</p>
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
      
      <footer className="py-8 border-t border-slate-800 text-center text-sm text-slate-500">
        <p>© 2025 Jet Potential. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
