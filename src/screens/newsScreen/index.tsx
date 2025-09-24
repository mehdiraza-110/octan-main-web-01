import { NewsCard } from "@/components/NewsCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Newspaper, Filter } from "lucide-react";
import SectionImageWithText from "@/components/SectionImageWithText";

const newsArticles = [
  {
    id: 1,
    title: "Revolutionary AI Technology Transforms Industry Standards",
    excerpt: "Leading companies are adopting new artificial intelligence solutions that promise to revolutionize how businesses operate, with early adopters seeing 40% efficiency improvements.",
    publishedAt: "2 hours ago",
    category: "Technology",
    author: "Sarah Johnson",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
    featured: true
  },
  {
    id: 2,
    title: "Global Markets Show Positive Growth Despite Economic Uncertainty",
    excerpt: "Stock markets worldwide continue their upward trajectory as investors remain optimistic about future economic prospects and emerging market opportunities.",
    publishedAt: "4 hours ago",
    category: "Business",
    author: "Michael Chen",
    readTime: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop",
    featured: false
  },
  {
    id: 3,
    title: "Sustainable Energy Solutions Reach New Milestone",
    excerpt: "Renewable energy projects across the globe have achieved unprecedented efficiency levels, marking a significant step toward carbon neutrality goals.",
    publishedAt: "6 hours ago",
    category: "Environment",
    author: "Emma Rodriguez",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=400&fit=crop",
    featured: false
  },
  {
    id: 4,
    title: "Healthcare Innovation: New Treatment Shows Promise",
    excerpt: "Breakthrough medical research reveals a novel treatment approach that could potentially help millions of patients worldwide manage chronic conditions more effectively.",
    publishedAt: "8 hours ago",
    category: "Health",
    author: "Dr. James Wilson",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop",
    featured: false
  },
  {
    id: 5,
    title: "Educational Technology Transforms Learning Experience",
    excerpt: "Schools worldwide are implementing innovative digital learning platforms that adapt to individual student needs, improving engagement and academic outcomes.",
    publishedAt: "12 hours ago",
    category: "Education",
    author: "Lisa Park",
    readTime: "3 min read",
    imageUrl: "https://plus.unsplash.com/premium_photo-1690571200236-0f9098fc6ca9?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    featured: false
  },
  {
    id: 6,
    title: "Space Exploration Reaches New Heights",
    excerpt: "Private space companies collaborate with government agencies to advance space exploration, with plans for lunar missions and Mars colonization gaining momentum.",
    publishedAt: "1 day ago",
    category: "Science",
    author: "Alex Thompson",
    readTime: "7 min read",
    imageUrl: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=400&fit=crop",
    featured: false
  }
];

const News = () => {
  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = newsArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-background">


         <div className="mx-auto max-w-full px-5 py-5 sm:px-3">
      <SectionImageWithText
        pageTitle="News"
        imageSrc=""   
        imageAlt=""
        leftPrimary=""
        leftSecondary=""
        body={
        <>
          <p>
            </p>
          </>
        }
      />
    </div>

      {/* Search and Filter Section */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input 
              placeholder="Search news articles..." 
              className="pl-10 h-12 border-2 focus:border-primary"
            />
          </div>
          <Button variant="outline" className="h-12">
            <Filter className="w-4 h-4 mr-2" />
            Filter by Category
          </Button>
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <div className="mb-16">
            <NewsCard {...featuredArticle} featured />
          </div>
        )}

        {/* Regular Articles Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <NewsCard
                key={article.id}
                {...article}
              />
            ))}
          </div>
        </div>

        {/* Load More Section */}
        <div className="text-center mt-16">
          <Button size="lg" className="bg-[#032e6a] text-white 
            transition duration-300 ease-in-out delay-150 
            hover:cursor-pointer hover:bg-white hover:border hover:border-[#032e6a] 
            hover:text-[#032e6a] hover:opacity-90">
            Load More Articles
          </Button>
        </div>
      </section>
    </div>
  );
};

export default News;