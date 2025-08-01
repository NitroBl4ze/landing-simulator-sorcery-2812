import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface EventCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  details: string;
}

const EventCard = ({ title, icon, description, details }: EventCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden">
        <CollapsibleTrigger className="w-full p-6 text-left hover:bg-slate-700 transition-colors">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-blue-400">
                {icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="text-sm text-slate-300">{description}</p>
              </div>
            </div>
            {isOpen ? (
              <ChevronUp className="w-5 h-5 text-slate-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-slate-400" />
            )}
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="px-6 pb-6 pt-2">
            <div className="text-slate-300 leading-relaxed">
              {details}
            </div>
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
};

export default EventCard;