import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

interface AnnouncementCardProps {
  title: string;
  description: string;
  date: string;
  category: string;
  readTime?: string;
  priority?: "high" | "medium" | "low";
}

export const AnnouncementCard = ({ 
  title, 
  description, 
  date, 
  category, 
  readTime = "2 min read",
  priority = "medium" 
}: AnnouncementCardProps) => {
  const priorityColors = {
    high: "bg-primary text-primary-foreground",
    medium: "bg-primary text-primary-foreground",
    low: "bg-muted text-muted-foreground"
  };

  return (
    <Card className="group h-full bg-gradient-card shadow-elegant hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border-0">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-3">
          <Badge className={priorityColors[priority]}>
            {category}
          </Badge>
          <div className="flex items-center text-muted-foreground text-sm">
            <Calendar className="w-4 h-4 mr-1" />
            {date}
          </div>
        </div>
        <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="text-base leading-relaxed mb-4">
          {description}
        </CardDescription>
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="w-4 h-4 mr-1" />
          {readTime}
        </div>
      </CardContent>
    </Card>
  );
};