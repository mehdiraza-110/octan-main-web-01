import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, User } from "lucide-react";

interface NewsCardProps {
  title: string;
  excerpt: string;
  publishedAt: string;
  category: string;
  author: string;
  readTime?: string;
  imageUrl?: string;
  featured?: boolean;
}

export const NewsCard = ({ 
  title, 
  excerpt, 
  publishedAt, 
  category, 
  author,
  readTime = "3 min read",
  imageUrl,
  featured = false
}: NewsCardProps) => {
  const categoryColors = {
    Technology: "bg-primary text-primary-foreground",
    Business: "bg-secondary text-secondary-foreground", 
    Environment: "bg-muted text-muted-foreground",
    Health: "bg-primary text-primary-foreground",
    Education: "bg-accent text-accent-foreground",
    Science: "bg-primary text-primary-foreground"
  };

  if (featured) {
    return (
      <Card className="pt-0 pb-0 rounded-l-lg group bg-gradient-card shadow-elegant hover:shadow-hover transition-all duration-300 border-0">
        <div className="grid md:grid-cols-2 gap-0">
          {imageUrl && (
            <div className="relative overflow-hidden rounded-l-lg hover:cursor-pointer">
              <img 
                src={imageUrl} 
                alt={title}
                className="w-full rounded-l-lg h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <Badge className={categoryColors[category as keyof typeof categoryColors] || categoryColors.Technology}>
                  Featured • {category}
                </Badge>
              </div>
            </div>
          )}
          <div className="p-8">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-2xl md:text-3xl hover:cursor-pointer font-bold group-hover:text-primary transition-colors leading-tight">
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <CardDescription className="text-lg leading-relaxed mb-6">
                {excerpt}
              </CardDescription>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  {author}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {publishedAt}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {readTime}
                </div>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="pt-0 hover:cursor-pointer group h-full bg-gradient-card shadow-elegant hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden">
      {imageUrl && (
        <div className="relative overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3">
            <Badge className={categoryColors[category as keyof typeof categoryColors] || categoryColors.Technology}>
              {category}
            </Badge>
          </div>
        </div>
      )}
      <CardHeader className="pb-3">
        {!imageUrl && (
          <div className="flex items-center justify-between mb-3">
            <Badge className={categoryColors[category as keyof typeof categoryColors] || categoryColors.Technology}>
              {category}
            </Badge>
          </div>
        )}
        <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="text-base leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </CardDescription>
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            {author}
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {publishedAt}
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {readTime}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};