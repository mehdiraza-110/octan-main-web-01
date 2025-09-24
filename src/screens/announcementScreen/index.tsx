import { AnnouncementCard } from "@/components/AccouncementCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Bell, Filter } from "lucide-react";
import SectionImageWithText from "@/components/SectionImageWithText";

const announcements = [
  {
    id: 1,
    title: "New Feature Release: Advanced Analytics Dashboard",
    description: "We're excited to announce the launch of our new analytics dashboard with real-time insights, custom reports, and enhanced data visualization tools to help you make better decisions.",
    date: "Jan 15, 2024",
    category: "Product Update",
    priority: "high" as const,
    readTime: "3 min read"
  },
  {
    id: 2,
    title: "Scheduled Maintenance: System Updates",
    description: "We'll be performing scheduled maintenance on our servers to improve performance and security. Expected downtime is minimal and we'll keep you updated throughout the process.",
    date: "Jan 12, 2024",
    category: "Maintenance",
    priority: "medium" as const,
    readTime: "1 min read"
  },
  {
    id: 3,
    title: "Community Spotlight: Success Stories",
    description: "Discover how our amazing community members are using our platform to achieve incredible results. Read inspiring stories and learn new tips and tricks from power users.",
    date: "Jan 10, 2024",
    category: "Community",
    priority: "low" as const,
    readTime: "5 min read"
  },
  {
    id: 4,
    title: "Security Update: Enhanced Protection",
    description: "We've implemented additional security measures including two-factor authentication improvements and enhanced encryption to keep your data safe and secure.",
    date: "Jan 8, 2024",
    category: "Security",
    priority: "high" as const,
    readTime: "2 min read"
  },
  {
    id: 5,
    title: "Holiday Schedule & Support Hours",
    description: "Our support team will have modified hours during the holiday season. Find out when we're available and how to get help when you need it most.",
    date: "Dec 20, 2023",
    category: "Support",
    priority: "medium" as const,
    readTime: "1 min read"
  },
  {
    id: 6,
    title: "Beta Program: New Mobile App Features",
    description: "Join our beta program to test exciting new mobile app features before they're released to everyone. Your feedback helps us build better products for our community.",
    date: "Dec 18, 2023",
    category: "Beta",
    priority: "medium" as const,
    readTime: "4 min read"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">

            <div className="mx-auto max-w-full px-5 py-5 sm:px-3">
              <SectionImageWithText
                pageTitle="Announcements"
                imageSrc="/bgimage7.jpg"
                imageAlt="Announcements"
                leftPrimary=""
                leftSecondary=""
                body={
                  <>
                    <p>
                      Find the latest announcements of Turkish Dunyasi.
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
              placeholder="Search announcements..." 
              className="pl-10 h-12 border-2 focus:border-primary"
            />
          </div>
          <Button variant="outline" className="h-12">
            <Filter className="w-4 h-4 mr-2" />
            Filter by Category
          </Button>
        </div>

        {/* Announcements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {announcements.map((announcement) => (
            <AnnouncementCard
              key={announcement.id}
              title={announcement.title}
              description={announcement.description}
              date={announcement.date}
              category={announcement.category}
              priority={announcement.priority}
              readTime={announcement.readTime}
            />
          ))}
        </div>

        {/* Load More Section */}
        <div className="text-center mt-16">
          <Button size="lg" className="bg-[#032e6a] text-white 
            transition duration-300 ease-in-out delay-150 
            hover:cursor-pointer hover:bg-white hover:border hover:border-[#032e6a] 
            hover:text-[#032e6a] hover:opacity-90">
            Load More Announcements
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;