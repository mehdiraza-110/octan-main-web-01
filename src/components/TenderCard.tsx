import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Calendar, Building, DollarSign, FileText, ExternalLink } from "lucide-react";

interface TenderCardProps {
  title: string;
  organization: string;
  category: string;
  status: "open" | "closing" | "closed";
  deadline: string;
  value: string;
  description: string;
  featured?: boolean;
  className?: string;
}

const TenderCard = ({
  title,
  organization,
  category,
  status,
  deadline,
  value,
  description,
  featured = false,
  className = ""
}: TenderCardProps) => {
  const statusConfig = {
    open: { label: "Open", className: "status-open" },
    closing: { label: "Closing Soon", className: "status-closing" },
    closed: { label: "Closed", className: "status-closed" }
  };

  const IconComponent = featured ? Building : FileText;

  return (
    <Card className={`${className} fade-in transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
      featured ? 'bg-[#2254a1] text-primary-foreground border-[#2254a1]' : ''
    }`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3">
            {/* Icon */}
            <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
              featured 
                ? 'bg-white/20 text-white' 
                : 'bg-primary/10 text-primary'
            }`}>
              <IconComponent className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <CardTitle className={`text-lg leading-tight ${
                featured ? 'text-white' : 'text-foreground'
              }`}>
                {title}
              </CardTitle>
              <CardDescription className={`mt-1 flex items-center ${
                featured ? 'text-white/80' : 'text-muted-foreground'
              }`}>
                <Building className="w-3 h-3 mr-1" />
                {organization}
              </CardDescription>
            </div>
          </div>
          <Badge variant={featured ? "secondary" : "default"} className={`${statusConfig[status].className} flex-shrink-0`}>
            {statusConfig[status].label}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Details */}
        <div className="grid grid-cols-1 gap-2">
          <div className="flex items-center text-sm">
            <Calendar className={`w-4 h-4 mr-2 flex-shrink-0 ${featured ? 'text-white/70' : 'text-muted-foreground'}`} />
            <span className={featured ? 'text-white/90' : 'text-muted-foreground'}>
              Deadline: {deadline}
            </span>
          </div>
          <div className="flex items-center text-sm">
            <DollarSign className={`w-4 h-4 mr-2 flex-shrink-0 ${featured ? 'text-white/70' : 'text-muted-foreground'}`} />
            <span className={`font-medium ${featured ? 'text-white' : 'text-foreground'}`}>
              {value}
            </span>
          </div>
        </div>

        <Separator className={featured ? 'bg-white/20' : ''} />

        {/* Description */}
        <p className={`text-sm leading-relaxed ${
          featured ? 'text-white/90' : 'text-muted-foreground'
        }`}>
          {description}
        </p>

        <Separator className={featured ? 'bg-white/20' : ''} />

        {/* Footer */}
        <div className="flex items-center justify-between">
          <Badge variant="outline" className={`text-xs ${
            featured ? 'text-white/70 border-white/30' : 'text-primary border-primary/30'
          }`}>
            {category}
          </Badge>
          
          <Button 
            size="sm" 
            variant={featured ? "secondary" : "outline"}
            className="ml-auto"
          >
            View Details
            <ExternalLink className="w-3 h-3 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TenderCard;