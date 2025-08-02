import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface Event {
  title: string;
  icon: JSX.Element;
  description: string;
  details: string;
  rules?: string[];
}

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-white">{event.title}</h3>
        <span className="text-2xl">{event.icon}</span>
      </div>
      
      <p className="text-gray-300 mb-4">{event.description}</p>
      
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-3 bg-white/5 rounded-md hover:bg-white/10 transition-colors">
          <span className="text-white font-medium">View Details</span>
          {isOpen ? (
            <ChevronUp className="h-4 w-4 text-white" />
          ) : (
            <ChevronDown className="h-4 w-4 text-white" />
          )}
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-4 space-y-4">
          <div className="p-4 bg-white/5 rounded-md">
            <h4 className="font-semibold text-white mb-2">Description:</h4>
            <p className="text-gray-300">{event.details}</p>
          </div>
          
          {event.rules && event.rules.length > 0 && (
            <div className="p-4 bg-white/5 rounded-md">
              <h4 className="font-semibold text-white mb-2">Rules:</h4>
              <ul className="space-y-1">
                {event.rules.map((rule, index) => (
                  <li key={index} className="text-gray-300 text-sm">
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default EventCard;
