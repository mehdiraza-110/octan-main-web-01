import Header from "@/components/Header";
import TenderCard from "@/components/TenderCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionImageWithText from "@/components/SectionImageWithText";
import { Search, Filter, Grid, List, SlidersHorizontal, Building, Calendar, DollarSign, Globe } from "lucide-react";
import { useState, useEffect } from "react";

export default function Tenders() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [countryFilter, setCountryFilter] = useState("all"); // NEW
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Sample tender data (added `country`)
  const tenders = [
    {
      id: 1,
      title: "Digital Infrastructure Development",
      organization: "Ministry of Technology",
      category: "Technology & Innovation",
      status: "open" as const,
      deadline: "March 15, 2024",
      value: "$2.5M - $5.0M",
      description: "Comprehensive digital infrastructure development project focusing on modernizing government systems and improving citizen services.",
      featured: true,
      country: "Azerbaijan",
    },
    {
      id: 2,
      title: "Cross-Border Trade Facilitation System",
      organization: "Trade & Investment Commission",
      category: "Trade & Investment",
      status: "closing" as const,
      deadline: "February 28, 2024",
      value: "$1.2M - $3.0M",
      description: "Development of integrated trade facilitation platform to streamline cross-border transactions and reduce processing times.",
      country: "Turkey",
    },
    {
      id: 3,
      title: "Youth Skills Development Program",
      organization: "Youth & Education Commission",
      category: "Youth & Education",
      status: "open" as const,
      deadline: "April 10, 2024",
      value: "$800K - $1.5M",
      description: "Comprehensive skills development initiative targeting youth employment and entrepreneurship opportunities.",
      country: "Pakistan",
    },
    {
      id: 4,
      title: "Manufacturing Excellence Initiative",
      organization: "Industry & Manufacturing Board",
      category: "Industry & Manufacturing",
      status: "closed" as const,
      deadline: "January 20, 2024",
      value: "$3.0M - $6.0M",
      description: "Strategic manufacturing enhancement program aimed at boosting industrial capacity and technological advancement.",
      country: "United States",
    },
    {
      id: 5,
      title: "Green Energy Transition Project",
      organization: "Environmental Commission",
      category: "Technology & Innovation",
      status: "open" as const,
      deadline: "May 5, 2024",
      value: "$4.0M - $8.0M",
      description: "Large-scale renewable energy implementation project focusing on sustainable development and carbon footprint reduction.",
      country: "United Arab Emirates",
    },
    {
      id: 6,
      title: "SME Investment Fund Management",
      organization: "Trade & Investment Commission",
      category: "Trade & Investment",
      status: "closing" as const,
      deadline: "March 1, 2024",
      value: "$500K - $1.2M",
      description: "Management and distribution of small and medium enterprise investment funds to support local business growth.",
      country: "Azerbaijan",
    },
  ];

  const categories = [
    "Technology & Innovation",
    "Trade & Investment",
    "Youth & Education",
    "Industry & Manufacturing",
  ];

  // Build country list from data
  const countries = Array.from(new Set(tenders.map((t) => t.country))).sort();

  const filteredTenders = tenders.filter((tender) => {
    const matchesSearch =
      tender.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tender.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tender.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = categoryFilter === "all" || tender.category === categoryFilter;
    const matchesStatus = statusFilter === "all" || tender.status === statusFilter;
    const matchesCountry = countryFilter === "all" || tender.country === countryFilter; // NEW

    return matchesSearch && matchesCategory && matchesStatus && matchesCountry;
  });

  // Animation delay for staggered card appearance
  useEffect(() => {
    const cards = document.querySelectorAll(".fade-in");
    cards.forEach((card, index) => {
      (card as HTMLElement).style.animationDelay = `${index * 0.1}s`;
    });
  }, [filteredTenders]);

  return (
    <div className="min-h-screen bg-background">
      {/* <Header /> */}

      <div className="mx-auto max-w-full px-5 py-5 sm:px-3">
        <SectionImageWithText
          pageTitle="Tendars"
          imageSrc="/bgimage6.jpg"
          imageAlt="About"
          leftPrimary="Current"
          leftSecondary="Tenders & Opportunities"
          body={
            <>
              <p>
                Explore available tenders and business opportunities across various sectors. Find the perfect match for your expertise and contribute to national development.
              </p>
            </>
          }
        />
      </div>

      {/* Filters Section */}
      <section className=" py-8 border-b bg-background/50 backdrop-blur-sm">
        <div className="mx-auto max-w-[1400px] px-4">
          <Card className="bg-background/80 backdrop-blur-sm border-border/50 shadow-sm">
            <CardHeader className="pb-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <CardTitle className="text-lg">Find Tenders</CardTitle>
                  <CardDescription>Search and filter available opportunities</CardDescription>
                </div>

                {/* View Mode Toggle */}
                <Tabs value={viewMode} onValueChange={(value: string) => setViewMode(value as "grid" | "list")} className="w-auto">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="grid" className="flex items-center gap-2">
                      <Grid className="w-4 h-4" />
                      Grid
                    </TabsTrigger>
                    <TabsTrigger value="list" className="flex items-center gap-2">
                      <List className="w-4 h-4" />
                      List
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Search Bar */}
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search tenders, organizations, or keywords..."
                  className="pl-10 bg-background"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Filters Row */}
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Filters:</span>
                </div>

                <div className="flex flex-wrap gap-3">
                  {/* Category */}
                  <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                    <SelectTrigger className="w-[200px] bg-background">
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border-border shadow-lg z-50">
                      <SelectItem value="all">All Categories</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  {/* Status */}
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-[160px] bg-background">
                      <SelectValue placeholder="All Status" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border-border shadow-lg z-50">
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="open">Open</SelectItem>
                      <SelectItem value="closing">Closing Soon</SelectItem>
                      <SelectItem value="closed">Closed</SelectItem>
                    </SelectContent>
                  </Select>

                  {/* Country (NEW) */}
                  <Select value={countryFilter} onValueChange={setCountryFilter}>
                    <SelectTrigger className="w-[200px] bg-background">
                      <SelectValue placeholder="All Countries" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border-border shadow-lg z-50">
                      <SelectItem value="all">All Countries</SelectItem>
                      {countries.map((c) => (
                        <SelectItem key={c} value={c}>
                          {c}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  {/* Results Count */}
                  <Badge variant="secondary" className="ml-auto">
                    {filteredTenders.length} {filteredTenders.length === 1 ? "result" : "results"}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tenders Display */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-4">
          {filteredTenders.length > 0 ? (
            <Tabs value={viewMode} className="w-full">
              <TabsContent value="grid" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredTenders.map((tender) => (
                    <TenderCard
                      key={tender.id}
                      title={tender.title}
                      organization={tender.organization}
                      category={tender.category}
                      status={tender.status}
                      deadline={tender.deadline}
                      value={tender.value}
                      description={tender.description}
                      featured={tender.featured}
                      className="fade-in"
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="list" className="mt-0">
                <div className="space-y-4">
                  {filteredTenders.map((tender) => (
                    <Card key={tender.id} className="fade-in transition-all duration-300 hover:shadow-md">
                      <CardContent className="p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="flex-1 space-y-2">
                            <div className="flex items-center justify-start">
                              <h3 className="font-semibold text-lg text-foreground">{tender.title}</h3>
                              <Badge
                                className={`status-badge ml-12 ${
                                  tender.status === "open"
                                    ? "status-open"
                                    : tender.status === "closing"
                                    ? "status-closing"
                                    : "status-closed"
                                }`}
                              >
                                {tender.status === "open" ? "Open" : tender.status === "closing" ? "Closing Soon" : "Closed"}
                              </Badge>
                            </div>

                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center">
                                <Building className="w-4 h-4 mr-1" />
                                {tender.organization}
                              </span>
                              <span className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                {tender.deadline}
                              </span>
                              <span className="flex items-center font-medium text-foreground">
                                <DollarSign className="w-4 h-4 mr-1" />
                                {tender.value}
                              </span>
                              {/* Country chip */}
                              <span className="flex items-center">
                                <Globe className="w-4 h-4 mr-1" />
                                {tender.country}
                              </span>
                            </div>

                            <p className="text-sm text-muted-foreground line-clamp-2">{tender.description}</p>

                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="text-xs w-fit bg-[#2254a1] text-white ">
                                {tender.category}
                              </Badge>
                            </div>
                          </div>

                          <Button variant="outline" className="w-full sm:w-auto">
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          ) : (
            <Card className="text-center py-16">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-muted flex items-center justify-center">
                  <Filter className="w-8 h-8 text-muted-foreground" />
                </div>
                <CardTitle className="text-lg">No tenders found</CardTitle>
                <CardDescription>Try adjusting your search criteria or filters to find more opportunities.</CardDescription>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setCategoryFilter("all");
                    setStatusFilter("all");
                    setCountryFilter("all"); // reset country
                  }}
                >
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary-blue/5 to-accent/5">
        <div className="max-w-[1400px] mx-auto px-4">
          <Card className="bg-gradient-to-r from-[#032e69] to-[#346cc5] text-white border-0 shadow-xl">
            <CardContent className="p-8 text-center">
              <CardTitle className="text-3xl font-bold mb-4 text-white">Want to Stay Updated?</CardTitle>
              <CardDescription className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and get notified about new tender opportunities that match your business profile.
              </CardDescription>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Input placeholder="Enter your email" className="bg-white/10 border-white/20 text-white placeholder:text-white/70" />
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
