import { Button } from "@/components/ui/button";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
        {/* hairline with centered chip */}
      <div className="relative mx-auto mb-6 max-w-[1400px] mt-8">
        <div className="h-px w-full bg-slate-200" />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-semibold tracking-wide text-slate-600">
          {"ABOUT US"}
        </span>
      </div>
        <section className="py-14 bg-section-bg">
        <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Company information */}
            <div className="space-y-6">
                <div className="space-y-4">
                <h2 className="text-4xl font-bold text-text-primary leading-tight">
                    Building Bridges for
                    <span className="text-brand-blue"> Global Success</span>
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed">
                    We are a leading Turkish business consortium dedicated to fostering international 
                    trade relationships, driving innovation, and creating shared prosperity across 
                    global markets.
                </p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <div className="text-3xl font-bold text-brand-blue">500+</div>
                    <p className="text-text-secondary">Global Partners</p>
                </div>
                <div className="space-y-2">
                    <div className="text-3xl font-bold text-brand-blue">25+</div>
                    <p className="text-text-secondary">Countries Served</p>
                </div>
                <div className="space-y-2">
                    <div className="text-3xl font-bold text-brand-blue">$2.5B+</div>
                    <p className="text-text-secondary">Trade Volume</p>
                </div>
                <div className="space-y-2">
                    <div className="text-3xl font-bold text-brand-blue">15+</div>
                    <p className="text-text-secondary">Years Experience</p>
                </div>
                </div>
    {/*             
                <div className="space-y-4">
                <p className="text-text-secondary">
                    Our mission is to bridge cultures and economies, creating opportunities for 
                    businesses to thrive in an interconnected world. Through strategic partnerships 
                    and innovative solutions, we facilitate trade that benefits communities globally.
                </p>
        
                </div> */}
            </div>
            
            {/* Right side - Image */}
            <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-large">
                <Image 
                    src={"/about-us-team.jpg"} 
                    width={500}
                    height={500}
                    alt="Our professional team collaborating in modern office environment"
                    className="!w-full !h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-hero-bg/20 to-transparent"></div>
                </div>
                
                {/* Floating achievement card */}
                {/* <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-medium p-6 max-w-xs">
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand-blue-light rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    </div>
                    <div>
                    <div className="font-semibold text-text-primary">ISO 9001 Certified</div>
                    <p className="text-sm text-text-secondary">Quality Management</p>
                    </div>
                </div>
                </div> */}
            </div>
            </div>
        </div>
        </section>
    </>
  );
};

export default AboutUs;