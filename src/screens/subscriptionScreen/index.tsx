import SubscriptionCard from "@/components/SubscriptionCard/SubscriptionCard";
import { GUESTS } from "@/components/GuestCard/guests";

const Subscription = () => {
  return (
    <>
        <div className="mx-auto max-w-full px-4 py-10 sm:px-6">
              {/* Large card (use first item) */}
                <SubscriptionCard
                  guests={GUESTS}
                  headerTag="OUR GUESTS"
                  title="Leaders Who Inspire Us"
                  subtitle="Meet the advisors and partners behind our mission."
                  ctaHref="/guests"
                  ctaText=""
                  limit={4}
                  offset={0}
                  initialActive={1}
                />
            </div>
    </>
  )
}


export default Subscription;
