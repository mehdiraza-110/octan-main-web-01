export type Guest = {
  id: string;
  name: string;
  role: string;
  avatar: string;
  href: string;       // profile link
  email: string;  // Email field added for contact
  socialLinks: { twitter?: string; linkedin?: string }; 
  featured?: boolean;
  country: string | string[];
  city: string | string[];
  sector: string | string[];
  companyDescription: string;  // Company description
  founded: number;  // Founded year
  headquarters: string;  // Headquarters location
  longDescription: string;
  companyName: string;
};

// Define guests without href first
const baseGuests: Omit<Guest, "href">[] = [
  { 
    id: "john",
    name: "John Smith",
    role: "VICE PRESIDENT",
    avatar: "/guestcard1.png",
    featured: false,
    country: "USA",
    city: "New York",
    sector: "Finance",
    email: "john.smith@example.com",  
    socialLinks: { twitter: "https://twitter.com/johnsmith", linkedin: "https://linkedin.com/in/johnsmith" },
    companyDescription: "The company offers clients services in business automation, mobile application development, and cybersecurity. Since 2015, TechnoFuture has expanded into international markets, establishing branches in Turkey, Georgia, and the United Arab Emirates. Today, the company employs over 200 professionals who work on applying innovative technologies in the fields of banking, healthcare, and education. In addition to leading the company, Kamran Aliyev actively supports social projects, mentors young startups, and makes significant contributions to the development of technology in Azerbaijan.",
    founded: 2005,
    companyName: "Lorem ipsum LLC",
    headquarters: "New York, USA",
    longDescription: "John Smith is a highly skilled and seasoned Vice President with over 15 years of experience in financial management, strategic planning, and leadership in large-scale projects. His expertise has transformed numerous companies by streamlining financial operations and leading high-performing teams." 
  },
  { 
    id: "klara",
    name: "Klara Berger",
    role: "SENIOR ADVISOR / ASSOCIATE",
    avatar: "/guestcard2.png",
    featured: true,
    country: "Germany",
    city: "Berlin",
    sector: ["Healthcare", "Finance"],
    email: "john.smith@example.com",  
    socialLinks: { twitter: "https://twitter.com/johnsmith", linkedin: "https://linkedin.com/in/johnsmith" },
    companyDescription: "The company offers clients services in business automation, mobile application development, and cybersecurity. Since 2015, TechnoFuture has expanded into international markets, establishing branches in Turkey, Georgia, and the United Arab Emirates. Today, the company employs over 200 professionals who work on applying innovative technologies in the fields of banking, healthcare, and education. In addition to leading the company, Kamran Aliyev actively supports social projects, mentors young startups, and makes significant contributions to the development of technology in Azerbaijan.",
    founded: 2005,
    companyName: "Lorem ipsum LLC",
    headquarters: "New York, USA",
    longDescription: "John Smith is a highly skilled and seasoned Vice President with over 15 years of experience in financial management, strategic planning, and leadership in large-scale projects. His expertise has transformed numerous companies by streamlining financial operations and leading high-performing teams." 
  },
  { 
    id: "reb",
    name: "Rebbeka Hof",
    role: "VICE PRESIDENT",
    avatar: "/guestcard3.png",
    country: "Canada",
    city: "Toronto",
    sector: "Technology",
    email: "john.smith@example.com",  
    socialLinks: { twitter: "https://twitter.com/johnsmith", linkedin: "https://linkedin.com/in/johnsmith" },
    companyDescription: "The company offers clients services in business automation, mobile application development, and cybersecurity. Since 2015, TechnoFuture has expanded into international markets, establishing branches in Turkey, Georgia, and the United Arab Emirates. Today, the company employs over 200 professionals who work on applying innovative technologies in the fields of banking, healthcare, and education. In addition to leading the company, Kamran Aliyev actively supports social projects, mentors young startups, and makes significant contributions to the development of technology in Azerbaijan.",
    founded: 2005,
    companyName: "Lorem ipsum LLC",
    headquarters: "New York, USA",
    longDescription: "John Smith is a highly skilled and seasoned Vice President with over 15 years of experience in financial management, strategic planning, and leadership in large-scale projects. His expertise has transformed numerous companies by streamlining financial operations and leading high-performing teams." 
  },
  { 
    id: "don",
    name: "Donald Ferreira",
    role: "MANAGING DIRECTOR",
    avatar: "/guestcard4.png",
    country: "UK",
    city: "London",
    sector: "Education",
    email: "john.smith@example.com",  
    socialLinks: { twitter: "https://twitter.com/johnsmith", linkedin: "https://linkedin.com/in/johnsmith" },
    companyDescription: "The company offers clients services in business automation, mobile application development, and cybersecurity. Since 2015, TechnoFuture has expanded into international markets, establishing branches in Turkey, Georgia, and the United Arab Emirates. Today, the company employs over 200 professionals who work on applying innovative technologies in the fields of banking, healthcare, and education. In addition to leading the company, Kamran Aliyev actively supports social projects, mentors young startups, and makes significant contributions to the development of technology in Azerbaijan.",
    founded: 2005,
    companyName: "Lorem ipsum LLC",
    headquarters: "New York, USA",
    longDescription: "John Smith is a highly skilled and seasoned Vice President with over 15 years of experience in financial management, strategic planning, and leadership in large-scale projects. His expertise has transformed numerous companies by streamlining financial operations and leading high-performing teams." 
  },
  { 
    id: "megan",
    name: "Megan Fox",
    role: "PARTNER / ADVISOR",
    avatar: "/guestcard5.png",
    country: "Australia",
    city: "Sydney",
    sector: "Healthcare",
    email: "john.smith@example.com",  
    socialLinks: { twitter: "https://twitter.com/johnsmith", linkedin: "https://linkedin.com/in/johnsmith" },
    companyDescription: "The company offers clients services in business automation, mobile application development, and cybersecurity. Since 2015, TechnoFuture has expanded into international markets, establishing branches in Turkey, Georgia, and the United Arab Emirates. Today, the company employs over 200 professionals who work on applying innovative technologies in the fields of banking, healthcare, and education. In addition to leading the company, Kamran Aliyev actively supports social projects, mentors young startups, and makes significant contributions to the development of technology in Azerbaijan.",
    founded: 2005,
    companyName: "Lorem ipsum LLC",
    headquarters: "New York, USA",
    longDescription: "John Smith is a highly skilled and seasoned Vice President with over 15 years of experience in financial management, strategic planning, and leadership in large-scale projects. His expertise has transformed numerous companies by streamlining financial operations and leading high-performing teams." 
  },
  { 
    id: "dan",
    name: "Daniel William",
    role: "PARTNER / ADVISOR",
    avatar: "/guestcard6.png",
    country: "India",
    city: "Mumbai",
    sector: "Finance",
    email: "john.smith@example.com",  
    socialLinks: { twitter: "https://twitter.com/johnsmith", linkedin: "https://linkedin.com/in/johnsmith" },
    companyDescription: "The company offers clients services in business automation, mobile application development, and cybersecurity. Since 2015, TechnoFuture has expanded into international markets, establishing branches in Turkey, Georgia, and the United Arab Emirates. Today, the company employs over 200 professionals who work on applying innovative technologies in the fields of banking, healthcare, and education. In addition to leading the company, Kamran Aliyev actively supports social projects, mentors young startups, and makes significant contributions to the development of technology in Azerbaijan.",
    founded: 2005,
    companyName: "Lorem ipsum LLC",
    headquarters: "New York, USA",
    longDescription: "John Smith is a highly skilled and seasoned Vice President with over 15 years of experience in financial management, strategic planning, and leadership in large-scale projects. His expertise has transformed numerous companies by streamlining financial operations and leading high-performing teams." 
  },
  { 
    id: "maria",
    name: "Maria Alvaro",
    role: "PARTNER / ADVISOR",
    avatar: "/guestcard7.png",
    country: ["Spain", "Mexico"],
    city: "Madrid",
    sector: "Real Estate",
    email: "john.smith@example.com",  
    socialLinks: { twitter: "https://twitter.com/johnsmith", linkedin: "https://linkedin.com/in/johnsmith" },
    companyDescription: "The company offers clients services in business automation, mobile application development, and cybersecurity. Since 2015, TechnoFuture has expanded into international markets, establishing branches in Turkey, Georgia, and the United Arab Emirates. Today, the company employs over 200 professionals who work on applying innovative technologies in the fields of banking, healthcare, and education. In addition to leading the company, Kamran Aliyev actively supports social projects, mentors young startups, and makes significant contributions to the development of technology in Azerbaijan.",
    founded: 2005,
    companyName: "Lorem ipsum LLC",
    headquarters: "New York, USA",
    longDescription: "John Smith is a highly skilled and seasoned Vice President with over 15 years of experience in financial management, strategic planning, and leadership in large-scale projects. His expertise has transformed numerous companies by streamlining financial operations and leading high-performing teams." 
  },
  { 
    id: "kevin",
    name: "Kevin Wolf",
    role: "PARTNER / ADVISOR",
    avatar: "/guestcard8.png",
    country: "USA",
    city: "Chicago",
    sector: "Retail",
    email: "john.smith@example.com",  
    socialLinks: { twitter: "https://twitter.com/johnsmith", linkedin: "https://linkedin.com/in/johnsmith" },
    companyDescription: "The company offers clients services in business automation, mobile application development, and cybersecurity. Since 2015, TechnoFuture has expanded into international markets, establishing branches in Turkey, Georgia, and the United Arab Emirates. Today, the company employs over 200 professionals who work on applying innovative technologies in the fields of banking, healthcare, and education. In addition to leading the company, Kamran Aliyev actively supports social projects, mentors young startups, and makes significant contributions to the development of technology in Azerbaijan.",
    founded: 2005,
    companyName: "Lorem ipsum LLC",
    headquarters: "New York, USA",
    longDescription: "John Smith is a highly skilled and seasoned Vice President with over 15 years of experience in financial management, strategic planning, and leadership in large-scale projects. His expertise has transformed numerous companies by streamlining financial operations and leading high-performing teams." 
  },
];

// Build full guests array with href auto-added
export const GUESTS: Guest[] = baseGuests.map((g) => ({
  ...g,
  href: `/pages/member-about/${g.id}`,
}));
