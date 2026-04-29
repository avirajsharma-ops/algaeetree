import Image from "next/image";
import type { ReactNode } from "react";

type StoryCard = {
    category: string;
    title: string;
    excerpt: string;
    date: string;
    image: string;
};

const featureStory: StoryCard = {
    category: "CLIMATE TECH",
    title: "Algae Tree: Absorbing in 1 Year What Trees Take 60 Years",
    excerpt:
        "Backed by research and innovation, this breakthrough device captures 1.5 tons of carbon annually while generating oxygen sustainably.",
    date: "APRIL 30, 2026",
    image: "/figma/about/frame-30.png",
};

const cityGreenerStory: StoryCard = {
    category: "URBAN CLEAN AIR",
    title: "Algae Tree: Turning Cities Greener with Advanced Carbon Capture",
    excerpt:
        "A single unit absorbs up to 1.5 tons of carbon annually while enhancing urban livability, positioning Bhopal as a pioneer in clean air innovation.",
    date: "APRIL 19, 2026",
    image: "/figma/about/frame-31.png",
};

const validatedStory: StoryCard = {
    category: "VALIDATED TECH",
    title: "Globally Validated: Algae Tree Technology Earns EKI & DAVV Certification",
    excerpt:
        "Powered by microalgae through photosynthesis, the system converts CO2 into oxygen, offering a scalable proven solution for urban pollution.",
    date: "APRIL 14, 2026",
    image: "/figma/about/frame-35.png",
};

const provenStory: StoryCard = {
    category: "CARBON COLLECTION",
    title: "Made in India Carbon-Fighting Technology Now Proven Effective",
    excerpt:
        "After two years of research, Algae Tree emerges as a reliable solution for AQI control and carbon emission reduction in cities.",
    date: "MARCH 29, 2026",
    image: "/figma/about/frame-34.png",
};

const crossroadsStory: StoryCard = {
    category: "GREEN TECH",
    title: "India's First Oxygen Factory at Crossroads: The Rise of Algae Tree",
    excerpt:
        "One Algae Tree matches the carbon absorption power of 75 mature trees, delivering high-impact air purification in compact urban spaces.",
    date: "MARCH 13, 2026",
    image: "/figma/about/frame-37.jpg",
};

function StoryText({ story, compact = false }: { story: StoryCard; compact?: boolean }) {
    return (
        <div className="relative z-10 flex h-full flex-col justify-end">
            <p className="font-nimbus text-[10px] uppercase tracking-[1.2px] text-[#9fb40d] sm:text-[11px]">
                {story.category}
            </p>
            <h3
                className={`mt-2 font-nevera text-white ${compact
                        ? "text-[18px] leading-[22px] sm:text-[22px] sm:leading-[28px]"
                        : "text-[24px] leading-[30px] sm:text-[28px] sm:leading-[34px] xl:text-[38px] xl:leading-[44px]"
                    }`}
            >
                {story.title}
            </h3>
            <p
                className={`mt-2 max-w-[420px] font-nimbus text-[#bcc8d4] ${compact
                        ? "text-[12px] leading-[18px] sm:text-[13px] sm:leading-[19px]"
                        : "text-[13px] leading-[19px] sm:text-[14px] sm:leading-[20px] xl:text-[15px] xl:leading-[22px]"
                    }`}
            >
                {story.excerpt}
            </p>
            <p className="mt-5 font-nimbus text-[10px] uppercase tracking-[1px] text-[#7d8b97] sm:text-[11px]">
                {story.date}
            </p>
        </div>
    );
}

function CardShell({ children, className = "" }: { children: ReactNode; className?: string }) {
    return (
        <article
            className={`relative overflow-hidden rounded-[10px] border border-[#27333f] bg-[#111a23] shadow-[0_10px_30px_rgba(6,15,26,0.16)] ${className}`}
        >
            <div className="absolute inset-0 bg-linear-to-br from-[#1b2430]/95 via-[#111821]/98 to-[#10161d]" />
            <div className="absolute inset-0 opacity-[0.09]">
                <Image
                    src="/hero section slider resized.png"
                    alt=""
                    fill
                    sizes="100vw"
                    className="object-cover object-center"
                />
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(126,163,214,0.08),transparent_32%),radial-gradient(circle_at_12%_90%,rgba(255,255,255,0.05),transparent_24%)]" />
            {children}
        </article>
    );
}

function NewspaperFrame({
    src,
    alt,
    className = "",
    imageClassName = "object-cover",
    sizes = "(max-width: 1023px) 100vw, 40vw",
}: {
    src: string;
    alt: string;
    className?: string;
    imageClassName?: string;
    sizes?: string;
}) {
    return (
        <div
            className={`relative overflow-hidden rounded-[8px] border-[5px] border-[#3d4650] bg-white shadow-[0_6px_14px_rgba(0,0,0,0.26)] ${className}`}
        >
            <div className="absolute inset-0 rounded-[4px] border border-[#c7ced7]" />
            <Image src={src} alt={alt} fill sizes={sizes} className={imageClassName} />
        </div>
    );
}

function HeroCard() {
    return (
        <article className="relative overflow-hidden rounded-[18px] border border-[#d7dee7] bg-[#091118] shadow-[0_8px_22px_rgba(0,0,0,0.06)] sm:rounded-[20px] xl:rounded-[22px]">
            <Image
                src="/hero section slider resized.png"
                alt="Latest updates"
                width={1488}
                height={798}
                priority
                className="h-[250px] w-full object-cover sm:h-[340px] lg:h-[430px]"
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#09131ee8] via-[#09131e91] to-transparent" />
            <div className="absolute inset-y-0 left-0 flex max-w-[420px] items-end px-6 pb-8 sm:max-w-[500px] sm:px-8 sm:pb-10 lg:max-w-[560px] lg:px-12 lg:pb-14">
                <div className="flex items-start gap-4 lg:gap-5">
                    <span className="mt-1 block h-14 w-[3px] rounded-full bg-white/90 sm:h-16 lg:h-[74px]" />
                    <div>
                        <h2 className="font-nevera text-[30px] leading-[34px] text-white sm:text-[36px] sm:leading-[40px] lg:text-[40px] lg:leading-[44px]">
                            Latest Updates
                        </h2>
                        <p className="mt-3 font-nimbus text-[13px] leading-[20px] text-white/82 sm:text-[14px] sm:leading-[22px] lg:text-[16px] lg:leading-[24px]">
                            Stay updated with the latest breakthroughs in microalgae-powered carbon capture, clean air innovation, and real-world deployments transforming urban environments.
                        </p>
                    </div>
                </div>
            </div>
        </article>
    );
}

function LeadStoryCard() {
    return (
        <CardShell>
            <div className="relative grid min-h-[280px] gap-4 p-6 sm:min-h-[320px] sm:grid-cols-[1.05fr_0.95fr] sm:items-center sm:gap-6 sm:p-7 lg:min-h-[345px] lg:grid-cols-[1.08fr_0.92fr] lg:p-7">
                <StoryText story={featureStory} />
                <div className="relative z-10 flex justify-center sm:justify-end">
                    <NewspaperFrame
                        src={featureStory.image}
                        alt={featureStory.title}
                        className="h-[220px] w-full max-w-[340px] sm:h-[250px] sm:max-w-none lg:h-[290px] lg:w-[97%]"
                        imageClassName="object-cover"
                        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 44vw, 36vw"
                    />
                </div>
            </div>
        </CardShell>
    );
}

function WideStoryCard({ story }: { story: StoryCard }) {
    return (
        <CardShell>
            <div className="relative grid min-h-[220px] grid-cols-1 gap-4 p-5 sm:grid-cols-[1.6fr_0.65fr] sm:items-center sm:gap-4 sm:p-6 lg:min-h-[190px] lg:grid-cols-[1.58fr_0.7fr] lg:p-5 xl:min-h-[196px]">
                <StoryText story={story} compact />
                <div className="relative z-10 flex justify-center sm:justify-end">
                    <NewspaperFrame
                        src={story.image}
                        alt={story.title}
                        className="h-[180px] w-[135px] sm:h-[170px] sm:w-[128px] lg:h-[164px] lg:w-[122px] xl:h-[174px] xl:w-[130px]"
                        imageClassName="object-cover"
                        sizes="160px"
                    />
                </div>
            </div>
        </CardShell>
    );
}

function TallStoryCard() {
    return (
        <CardShell className="h-full">
            <div className="relative flex h-full min-h-[380px] flex-col p-5 sm:min-h-[520px] lg:min-h-[404px] lg:p-4 xl:p-5">
                <div className="relative z-10 flex justify-center">
                    <NewspaperFrame
                        src={validatedStory.image}
                        alt={validatedStory.title}
                        className="h-[230px] w-full max-w-[220px] lg:h-[205px] lg:max-w-none xl:h-[224px]"
                        imageClassName="object-cover"
                        sizes="(max-width: 1023px) 220px, 21vw"
                    />
                </div>
                <div className="mt-auto pt-5">
                    <StoryText story={validatedStory} compact />
                </div>
            </div>
        </CardShell>
    );
}

export default function NewsEventsSection() {
    return (
        <section className="page-px w-full bg-white py-10 sm:py-12 xl:py-14">
            <div className="mx-auto w-full max-w-[1488px]">
                <HeroCard />

                <div className="mt-14 space-y-3 sm:mt-12 sm:space-y-4 lg:mt-16">
                    <LeadStoryCard />

                    <div className="space-y-3 sm:space-y-4 lg:grid lg:grid-cols-[1.95fr_0.95fr] lg:gap-3 lg:space-y-0 xl:gap-4">
                        <div className="space-y-3 sm:space-y-4">
                            <WideStoryCard story={cityGreenerStory} />
                            <WideStoryCard story={provenStory} />
                            <WideStoryCard story={crossroadsStory} />
                        </div>

                        <div className="lg:row-span-2">
                            <TallStoryCard />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}