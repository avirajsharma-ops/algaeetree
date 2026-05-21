import Image from "next/image";
import type { ReactNode } from "react";

type StoryCard = {
    category: string;
    title: string;
    excerpt: string;
    date?: string;
    image?: string;
    video?: string;
    link?: string;
};

const featureStory: StoryCard = {
    category: "CLIMATE TECH",
    title: "Algae Tree: Absorbing in 1 Year What Trees Take 60 Years",
    excerpt:
        "Backed by research and innovation, this breakthrough device captures 1.5 tons of carbon annually while generating oxygen sustainably.",
    date: "APRIL 05, 2026",
    image: "/figma/news/news-3.webp",
};

const cityGreenerStory: StoryCard = {
    category: "URBAN CLEAN AIR",
    title: "Algae Tree: Turning Cities Greener with Advanced Carbon Capture",
    excerpt:
        "A single unit absorbs up to 1.5 tons of carbon annually while enhancing urban livability, positioning Bhopal as a pioneer in clean air innovation.",
    date: "APRIL 12, 2026",
    image: "/figma/news/news-1.webp",
};
const urbanCarbonCaptureStory: StoryCard = {
    category: "VIRAL GREEN TECH",
    title: "Bhopal’s Futuristic AlgaeTree Goes Viral as India Today Spotlights the Innovation",
    excerpt:
        "Featured by India Today, AlgaeTree gained nationwide attention as a futuristic microalgae-powered system designed to support carbon capture, oxygen release and urban pollution reduction.",
    date: "MAY 11, 2026",
    image: "/figma/news/India Today.png", link: "https://www.indiatoday.in/trending-news/story/bhopal-algae-tree-indias-first-carbon-capturing-unit-25-trees-2909744-2026-05-11",
};
const NewsVideoaajTak: StoryCard = {
    category: "GREEN ON AIR",
    title: "AlgaeTree Featured by Aaj Tak as a Futuristic Clean-Air Innovation",
    excerpt:
        "Aaj Tak spotlighted AlgaeTree as a microalgae-powered system designed to support carbon capture, oxygen release and cleaner urban spaces without replacing natural trees.",
    date: "MAY 11, 2026",
    video: "/figma/news/Aaj tak.mp4",
};

const validatedStory: StoryCard = {
    category: "VALIDATED TECH",
    title: "Globally Validated: Algae Tree Technology Earns EKI & DAVV Certification",
    excerpt:
        "Powered by microalgae through photosynthesis, the system converts CO2 into oxygen, offering a scalable proven solution for urban pollution.",
    date: "APRIL 08, 2026",
    image: "/figma/news/news-4.webp",
};

const provenStory: StoryCard = {
    category: "CARBON COLLECTION",
    title: "Made in India Carbon-Fighting Technology Now Proven Effective",
    excerpt:
        "After two years of research, Algae Tree emerges as a reliable solution for AQI control and carbon emission reduction in cities.",
    date: "MARCH 29, 2026",
    image: "/figma/news/news-5.webp",
};

const crossroadsStory: StoryCard = {
    category: "GREEN TECH",
    title: "India's First Oxygen Factory at Crossroads: The Rise of Algae Tree",
    excerpt:
        "One Algae Tree matches the carbon absorption power of 75 mature trees, delivering high-impact air purification in compact urban spaces.",
    date: "MARCH 25, 2026",
    image: "/figma/news/news-2.webp",
};

const featuredCoverageStories: StoryCard[] = [
    {
        category: "GREEN TECH LAUNCH",
        title: "AlgaeTree Launch Marks a New Green Chapter for Bhopal",
        excerpt:
            "The coverage highlighted AlgaeTree as a futuristic microalgae-powered system designed to support carbon capture, oxygen release, and cleaner city spaces.",
        image: "/figma/news-events/Instagram Slide 02.png",
    },
    {
        category: "INDIA'S FIRST GREEN REVOLUTION",
        title: "Dainik Sanpark Highlights India's First AlgaeTree Launch in Bhopal",
        excerpt:
            "Dainik Sanpark featured AlgaeTree as a microalgae-powered clean-air innovation that supports carbon capture, oxygen release, and urban pollution reduction, marking Bhopal as a pioneer in India's green technology movement.",
        image: "/figma/news-events/Instagram Slide 03.png",
    },
    {
        category: "GLOBAL GREEN REVOLUTION",
        title: "India's First AlgaeTree Launch Marks a New Era in Clean-Air Innovation",
        excerpt:
            "Pradesh Today featured AlgaeTree as a microalgae-powered technology launched in Bhopal to support smart environment goals, carbon absorption, oxygen release, and cleaner urban spaces.",
        image: "/figma/news-events/Instagram Slide 04.png",
    },
    {
        category: "FUTURE OF URBAN OXYGEN",
        title: "Haribhoomi Covers the Historic Launch of India's First AlgaeTree in Bhopal",
        excerpt:
            "Haribhoomi featured the inauguration of India's first AlgaeTree by Minister Shri Vishwas Kailash Sarang Ji, highlighting it as a microalgae-powered clean-air support system developed for carbon capture and urban pollution reduction.",
        image: "/figma/news-events/Instagram Slide 05.png",
    },
    {
        category: "BHOPAL TO BHARAT GREEN MISSION",
        title: "Deshbandhu Highlights India's First AlgaeTree as a New Step Toward Cleaner Cities",
        excerpt:
            "Deshbandhu covered AlgaeTree as a Made-in-India green innovation designed to support oxygen generation, carbon capture, and cleaner air in traffic-heavy urban spaces.",
        image: "/figma/news-events/Instagram Slide 06.png"
    },
    {
        category: "BIO TECH",
        title: "Dangal Story Covers the Launch of India's First AlgaeTree in Bhopal",
        excerpt:
            "Dangal Story highlighted AlgaeTree as a microalgae-powered clean-air support system inaugurated in Bhopal, designed to help reduce carbon, support oxygen release, and strengthen urban green innovation.",
        image: "/figma/news-events/Instagram Slide 07.png"
    },
    {
        category: "ALGAE CARBON CAPTURE",
        title: "People's Samachar Showcases AlgaeTree as Bhopal's First Carbon-Capturing Green Tech",
        excerpt:
            "The report highlights AlgaeTree as a microalgae-driven innovation that captures carbon through natural photosynthesis and brings compact clean-air support to high-pollution urban locations.",
        image: "/figma/news-events/Instagram Slide 08.png",
    },
    {
        category: "LIVING TECH",
        title: "AlgaeTree Launch Brings a New Clean-Air Technology to Bhopal",
        excerpt:
            "Express News highlighted AlgaeTree as a futuristic climate-tech solution designed for urban pollution hotspots and sustainable city development.",
        image: "/figma/news-events/Instagram Slide 14.png",
    },
    {
        category: "TREES PLUS TECHNOLOGY",
        title: "Sach Express Features AlgaeTree as a Smart Environment Technology from Bhopal",
        excerpt:
            "The coverage presents AlgaeTree as a first-of-its-kind carbon capturing green technology, built to support smart city environments through microalgae-based CO2 absorption and oxygen release.",
        image: "/figma/news-events/Instagram Slide 13.png",
    },
    {
        category: "BIO-POWERED AIR TECH",
        title: "BHEL Samachar Covers AlgaeTree as a Living Clean-Air Innovation",
        excerpt:
            "The coverage explains how AlgaeTree uses live microalgae to convert carbon dioxide into oxygen through photosynthesis, bringing nature-based technology into city pollution hotspots.",
        image: "/figma/news-events/Instagram Slide 12.png",
    },
    {
        category: "ALGAE-BASED AIR REVOLUTION",
        title: "Raj Express Highlights AlgaeTree Launch as a New Step to Cut Urban Carbon",
        excerpt:
            "Raj Express covered the launch of AlgaeTree as an innovative system that brings biological carbon capture into city spaces, helping urban areas respond to rising emissions with smarter green infrastructure.",
        image: "/figma/news-events/Instagram Slide 11.png",
    },
    {
        category: "LIVING CLIMATE TECH",
        title: "Headlines24 News Reports Bhopal's First AlgaeTree as a Major Carbon Capture Innovation",
        excerpt:
            "The coverage highlights AlgaeTree as a compact microalgae-powered unit with carbon absorption impact comparable to 25 trees, bringing clean-air technology into public urban spaces.",
        image: "/figma/news-events/Instagram Slide 10.png",
    },
    {
        category: "BIO-CLIMATE INNOVATION",
        title: "Lokdesh Features AlgaeTree as a New Green Technology for City Pollution",
        excerpt:
            "The coverage describes AlgaeTree as a nature-inspired system where microalgae help convert CO2 into oxygen, supporting cities in their clean-air journey.",
        image: "/figma/news-events/Instagram Slide 9.png",
    },
];

function StoryText({
    story,
    compact = false,
    className = "",
}: {
    story: StoryCard;
    compact?: boolean;
    className?: string;
}) {
    return (
        <div className={`relative z-10 flex h-full flex-col justify-end ${className}`}>
            <p className="font-nimbus text-[10px] uppercase tracking-[1.2px] text-[#9fb40d] sm:text-[11px]">
                {story.category}
            </p>
            <h3
                className={`mt-2 font-space-grotesk font-bold text-[#e8fff0] ${compact
                    ? "text-[24px] leading-[30px] sm:text-[26px] sm:leading-[32px] lg:text-[30px] lg:leading-[36px]"
                    : "text-[26px] leading-[32px] sm:text-[30px] sm:leading-[36px] lg:text-[36px] lg:leading-[42px] xl:text-[40px] xl:leading-[46px]"
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
            {story.date && (
                <p className="mt-5 font-nimbus text-[10px] uppercase tracking-[1px] text-[#7d8b97] sm:text-[11px]">
                    {story.date}
                </p>
            )}
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
                    src="/hero section slider resized.webp"
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
    imageClassName = "object-cover object-center",
    sizes = "(max-width: 1023px) 100vw, 40vw",
}: {
    src: string;
    alt: string;
    className?: string;
    imageClassName?: string;
    sizes?: string;
}) {
    return (
        <div className={`relative overflow-hidden rounded-[8px] min-h-[270px] sm:min-h-0 ${className}`}>
            <Image src={src} alt={alt} fill sizes={sizes} quality={100} className={`${imageClassName} absolute inset-0`} />
        </div>
    );
}

function HeroCard() {
    return (
        <article className="relative aspect-[816/1704] w-full overflow-hidden rounded-[16px] border border-[#d7dee7] bg-[#d9d9d9] sm:aspect-[4/3] sm:rounded-[20px] lg:aspect-[2976/1616] lg:rounded-[40px]">
            <Image
                src="/figma/news/news-hero-mobile.webp"
                alt="Latest updates mobile"
                fill
                priority
                sizes="(max-width: 639px) calc(100vw - 32px), 0px"
                className="object-cover object-center sm:hidden"
            />
            <Image
                src="/figma/news/news-hero-desktop.webp"
                alt="Latest updates"
                fill
                priority
                sizes="(min-width: 1728px) 1488px, (min-width: 1280px) calc(100vw - 240px), (min-width: 640px) calc(100vw - 48px), 0px"
                className="hidden object-cover object-center sm:block"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#07111bea] via-[#09131ea6] to-transparent sm:bg-linear-to-r sm:from-[#09131ee8] sm:via-[#09131e91] sm:to-transparent" />
            <div className="absolute inset-y-0 left-0 flex max-w-[420px] items-end px-4 pb-6 sm:inset-0 sm:max-w-[540px] sm:items-center sm:px-12 sm:pb-0 lg:left-[clamp(24px,5vw,106px)] lg:max-w-[min(68vw,564px)] lg:px-0">
                <div className="flex items-start gap-4 lg:gap-5">
                    <span className="mt-1 block h-14 w-[3px] rounded-full bg-white/90 sm:h-16 lg:h-[130px]" />
                    <div>
                        <h2 className="font-nimbus text-[24px] font-medium leading-[28px] uppercase text-white sm:text-[36px] sm:leading-[40px] lg:text-[40px] lg:leading-[44px]">
                            Latest Updates
                        </h2>
                        <p className="mt-2 font-nimbus text-[12px] leading-[18px] text-white/82 sm:mt-3 sm:text-[14px] sm:leading-[22px] lg:text-[16px] lg:leading-[24px]">
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
            <div className="relative flex min-h-[440px] flex-col gap-4 p-3 sm:min-h-[380px]
             sm:grid sm:grid-cols-[0.98fr_1.02fr] sm:items-center
             sm:gap-6 sm:p-7 lg:min-h-[420px] lg:grid-cols-[1fr_1fr] lg:p-7">
                <div className="relative z-10 order-1 flex justify-center sm:order-2 sm:justify-end">
                    <NewspaperFrame
                        src={featureStory.image!}
                        alt={featureStory.title}
                        className="h-[420px] w-full sm:h-[420px] sm:w-full sm:max-w-none lg:h-[480px] lg:w-[520px]"
                        imageClassName="object-contain object-center"
                        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 56vw, 48vw"
                    />
                </div>
                <StoryText story={featureStory} className="order-2 sm:order-1" />
            </div>
        </CardShell>
    );
}

function WideStoryCard({ story }: { story: StoryCard }) {
    const isValidatedStory = story.image === validatedStory.image;

    return (
        <CardShell>
            <div className="relative grid min-h-[430px] grid-cols-1 gap-4 p-3 sm:grid-cols-[1.6fr_0.65fr] 
            sm:items-center sm:gap-4 sm:p-6 lg:min-h-[400px] lg:grid-cols-[1.58fr_0.7fr]
             lg:p-5 xl:min-h-[400px]">
                <div className="relative z-10 order-1 flex justify-center sm:order-2 sm:justify-end">
                    <NewspaperFrame
                        src={story.image!}
                        alt={story.title}
                        className={isValidatedStory
                            ? "h-[380px] w-full sm:h-[400px] sm:w-[250px] lg:h-[440px] lg:w-[280px] xl:h-[480px] xl:w-[340px]"
                            : "h-[500px] w-full sm:h-[400px] sm:w-[250px] lg:h-[440px] lg:w-[280px] xl:h-[480px] xl:w-[340px]"}
                        imageClassName="object-contain object-center"
                        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 240px, 280px"
                    />

                </div>
                <div className="order-2 sm:order-1">
                    <StoryText story={story} compact />
                    {story.link && (
                        <a
                            href={story.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center gap-1 font-nimbus text-[12px] uppercase tracking-[1px] text-[#9fb40d] transition-opacity hover:opacity-70 sm:text-[13px]"
                        >
                            Read more
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-px">
                                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="#9fb40d" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    )}
                </div>
            </div>
        </CardShell>
    );
}

function TallStoryCard() {
    return (
        <div className="flex flex-col gap-3 sm:gap-4">
            <CardShell>
                <div className="relative flex flex-col gap-3 p-3 sm:gap-4 sm:p-5 lg:gap-4 lg:p-4 xl:p-5">
                    <div className="relative z-10 overflow-hidden rounded-[8px] border-2 border-[#3d4650] shadow-[0_6px_14px_rgba(0,0,0,0.26)]">
                        <video
                            className="w-full h-auto max-h-[720px] bg-black"
                            controls
                            loop
                            playsInline
                            preload="metadata"
                        >
                            <source src={NewsVideoaajTak.video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div>
                        <StoryText story={NewsVideoaajTak} compact />
                        <a
                            href="https://www.aajtak.in/madhya-pradesh/story/bhopal-india-first-algae-tree-carbon-capturing-technology-purify-air-as-25-trees-know-its-features-lcly-strc-2549134-2026-05-11"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center gap-1 font-nimbus text-[12px] uppercase tracking-[1px] text-[#9fb40d] transition-opacity hover:opacity-70 sm:text-[13px]"
                        >
                            Read more
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-px">
                                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="#9fb40d" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
            </CardShell>
            <CardShell>
                <div className="relative flex flex-col gap-3 p-3 sm:gap-4 sm:p-5 lg:gap-4 lg:p-4 xl:p-5">
                    <div className="relative z-10 flex justify-center">
                        <NewspaperFrame
                            src={validatedStory.image!}
                            alt={validatedStory.title}
                            className="h-[360px] w-full sm:h-[340px] sm:max-w-[300px] lg:h-[400px] lg:w-full lg:max-w-none xl:h-[460px]"
                            imageClassName="object-contain object-center"
                            sizes="(max-width: 1023px) 300px, 32vw"
                        />

                    </div>

                    <div>
                        <StoryText story={validatedStory} compact />
                    </div>
                </div>

            </CardShell>
        </div>
    );
}

function FeaturedCoverageCard({ story }: { story: StoryCard }) {
    return (
        <CardShell>
            <div className="relative flex min-h-[260px] flex-col gap-2 p-3 sm:min-h-[280px] sm:p-4 lg:min-h-[300px] lg:p-5">
                {story.image && (
                    <div className="relative z-10 flex-1">
                        <NewspaperFrame
                            src={story.image}
                            alt={story.title}
                            className="h-full w-full sm:h-[500px] lg:h-[440px]"
                            imageClassName="object-contain object-center"
                            sizes="(max-width: 1023px) 100vw, 35vw"
                        />
                    </div>
                )}
                <div className="relative z-10">
                    <StoryText story={story} compact className="pt-1" />
                </div>
            </div>
        </CardShell>
    );
}

export default function NewsEventsSection() {
    return (
        <section className="page-px font-nimbus w-full bg-[#07131d] py-4 sm:bg-white lg:py-10 xl:py-14">
            <div className="mx-auto w-full max-w-[1488px]">
                <HeroCard />

                <div className="mt-3 space-y-3 pb-6 sm:mt-12 sm:space-y-4 sm:pb-0 lg:mt-16">
                    <div className="pt-3 sm:pt-6 lg:pt-8">


                        <div className="mt-3 sm:mt-4">
                            <CardShell>
                                <div className="relative flex flex-col gap-3 p-3 sm:gap-4 sm:p-5 lg:gap-4 lg:p-6">
                                    <div className="relative z-10 overflow-hidden rounded-[8px] border-2 border-[#3d4650] shadow-[0_6px_14px_rgba(0,0,0,0.26)]">
                                        <video
                                            className="h-auto max-h-[720px] w-full bg-black"
                                            controls
                                            loop
                                            playsInline
                                            preload="metadata"
                                        >
                                            <source src={NewsVideoaajTak.video} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                    <div>
                                        <StoryText story={NewsVideoaajTak} compact />
                                        <a
                                            href="https://www.aajtak.in/madhya-pradesh/story/bhopal-india-first-algae-tree-carbon-capturing-technology-purify-air-as-25-trees-know-its-features-lcly-strc-2549134-2026-05-11"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-4 inline-flex items-center gap-1 font-nimbus text-[12px] uppercase tracking-[1px] text-[#9fb40d] transition-opacity hover:opacity-70 sm:text-[13px]"
                                        >
                                            Read more
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-px">
                                                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="#9fb40d" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </CardShell>
                        </div>

                        <div className="mt-3 grid grid-cols-1 gap-3 sm:mt-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
                            {featuredCoverageStories.map((story) => (
                                <FeaturedCoverageCard key={`${story.category}-${story.title}`} story={story} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}