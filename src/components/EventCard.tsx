import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface EventCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  details: string;
  rules?: string[];
}

const EventCard = ({ title, icon, description, details, rules }: EventCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all">
        <CollapsibleTrigger className="w-full p-6 text-left hover:bg-muted/50 transition-colors btn-glow">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-secondary">
                {icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                {description && <p className="text-sm text-muted-foreground">{description}</p>}
              </div>
            </div>
            {isOpen ? (
              <ChevronUp className="w-5 h-5 text-muted-foreground" />
            ) : (
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            )}
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="px-6 pb-6 pt-2">
            <div className="text-muted-foreground leading-relaxed mb-4">
              {details}
            </div>
            {rules && (
              <div>
                <h4 className="font-semibold text-foreground mb-2">Rules:</h4>
                <ul className="text-muted-foreground space-y-1">
                  {rules.map((rule, index) => (
                    <li key={index} className="text-sm">• {rule}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
};

export default EventCard;