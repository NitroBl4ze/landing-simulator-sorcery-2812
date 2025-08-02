
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
      title: "E-TALASH",
      icon: <Code size={24} />,
      description: "Technical Treasure Hunt",
      details: "E-TALASH is a new and exciting version of treasure hunt in which the team has to enact the given technical terms.",
      rules: [
        "There should be only two members in a group. Group having less/more than two members will be disqualified.",
        "All the decisions will be taken by the higher authority.",
        "Participants must have basic technical knowledge of circuits"
      ]
    },
    {
      title: "CIRCUTRIX",
      icon: <Lightbulb size={24} />,
      description: "",
      details: "Maximum three members per team. Participants will be tested both on their Electrical & Electronics knowledge."
    },
    {
      title: "TECHNICAL QUIZ",
      icon: <Users size={24} />,
      description: "",
      details: "Teams can have maximum three people. The decision of the Judges will be final in any issue. A valid College Id card is necessary."
    },
    {
      title: "TECH-CHARADES",
      icon: <Trophy size={24} />,
      description: "",
      details: "Technical dumb-charades is a new and exciting version of dumb-charades in which the team has to enact the given technical terms.",
      rules: [
        "The team should consist of maximum 3 members.",
        "Lip movement is not allowed - only hand movements should be there.",
        "No alphabets are to be indicated.",
        "No objects should be indicated."
      ]
    },
    {
      title: "TED TALKS",
      icon: <Calendar size={24} />,
      description: "",
      details: "TED TALKS is a new and exciting version of ADZAP, where the participants have to sell the given products by enacting.",
      rules: [
        "Maximum of 4 members per team.",
        "Two rounds (prelims & final round)",
        "The decision of the Jurors will be final."
      ]
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

          {/* Department Titles */}
          <div className="text-center mb-8">
            <h2 className="text-lg md:text-xl font-semibold text-foreground mb-2">
              Department of Electrical and Electronics Engineering
            </h2>
            <div className="text-lg font-bold text-foreground mb-2">&</div>
            <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">
              Department of Electronics and Instrumentation Engineering
            </h2>
            <div className="text-base text-muted-foreground mb-8">presents</div>
          </div>
          
          {/* Main Logo */}
          <div className="mb-6">
            <img 
              src="/lovable-uploads/020427ad-93a7-4669-b7bc-c14b78adc974.png" 
              alt="Jet Potential Logo" 
              className="mx-auto h-32 md:h-48 w-auto animate-pulse-glow"
            />
          </div>

          {/* Register Now Button */}
          <div className="text-center mb-8">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-semibold btn-glow transition-all">
              Register Now
            </button>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold gradient-text mb-4">
            A One-Day National Level Technical Symposium
          </h1>
          <div className="text-center mb-4">
            <p className="text-muted-foreground mb-2">Total Cash Prize</p>
            <div className="text-4xl md:text-5xl font-bold gradient-text">₹ 30,000 /-</div>
          </div>
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
                A National level technical symposium is conducted every year for the undergraduate and 
                postgraduate students of Electrical and Electronics Engineering provides a forum for the engineering 
                institution's students to exchange ideas and knowledge in order to stay current with changes. The event's main 
                goal is to combine the knowledge of numerous academic fields and highlight the skills of its 
                participants.
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
                  event={event}
                />
              ))}
            </div>
          </section>

          {/* Gallery Section */}
          <div className="flex justify-center">
            <GallerySection />
          </div>

          {/* Instructions Section */}
          <section className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold gradient-text mb-4">Instructions</h2>
            </div>
            
            <div className="max-w-4xl mx-auto bg-card border border-border rounded-lg p-8">
              <div className="space-y-4 text-muted-foreground">
                <p>❖ Students have to register only through online and confirmation mail will be sent to participants.</p>
                <p>❖ No Spot Registration is allowed.</p>
                <p>❖ Transport is available from all parts of the city by our college bus.</p>
                <p>❖ All participants should bring their college ID card.</p>
                <p>❖ Participants are permitted to enter the campus only in Formal Dress code.</p>
                <p>❖ Participants will be allowed to enter only with a confirmation printout up to 9.00 A.M.</p>
                <p>❖ Proper decorum must be maintained following the college rules while on the College campus.</p>
                <p>❖ The judge's decision will be final and binding.</p>
                <p>❖ Cell phone is not allowed inside the college campus.</p>
                <p>❖ Breakfast and Lunch will be provided by our college.</p>
                <p>❖ No TA/DA will be provided.</p>
              </div>
            </div>
          </section>
        </div>
        
        <footer className="py-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 Jet Potential. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
