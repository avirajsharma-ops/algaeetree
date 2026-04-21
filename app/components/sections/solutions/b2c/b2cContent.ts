export type CoreTechnologyItem = {
    number: string;
    title: string;
    description: string;
    mobileDescriptionLines: string[];
    mobileHeight: string;
    icon: string;
};

export type WhyChooseItem = {
    number: string;
    title: string;
    description: string;
    mobileDescriptionLines: string[];
    mobileTextWidth: number;
};

export type DeploymentItem = {
    title: string;
    description: string;
    image: string;
};

export const CORE_TECHNOLOGY_ITEMS: CoreTechnologyItem[] = [
    {
        number: "01",
        title: "Biological CO₂ Capture",
        description: "Microalgae absorb carbon and release oxygen through photosynthesis.",
        mobileDescriptionLines: [
            "Microalgae absorb carbon and release oxygen",
            "through photosynthesis.",
        ],
        mobileHeight: "189.525px",
        icon: "/figma/solutions/b2c/icon-biological.svg",
    },
    {
        number: "02",
        title: "Advanced Air Purification",
        description: "Multi stage filtration reduces PM2.5 and PM10 pollutants.",
        mobileDescriptionLines: [
            "Multi stage filtration reduces PM2.5 and PM10",
            "pollutants.",
        ],
        mobileHeight: "189.525px",
        icon: "/figma/solutions/b2c/icon-purification.svg",
    },
    {
        number: "03",
        title: "AI Performance Optimization",
        description: "Smart systems maintain ideal conditions for carbon capture.",
        mobileDescriptionLines: [
            "Smart systems maintain ideal conditions for",
            "carbon capture.",
        ],
        mobileHeight: "189.525px",
        icon: "/figma/solutions/b2c/icon-ai.svg",
    },
    {
        number: "04",
        title: "IoT Environmental Monitoring",
        description: "Real time air quality and system performance tracking.",
        mobileDescriptionLines: [
            "Real time air quality and system performance",
            "tracking.",
        ],
        mobileHeight: "189.525px",
        icon: "/figma/solutions/b2c/icon-monitoring.svg",
    },
    {
        number: "05",
        title: "Scalable Deployment",
        description: "From single installations to large campuses.",
        mobileDescriptionLines: ["From single installations to large campuses."],
        mobileHeight: "166.75px",
        icon: "/figma/solutions/b2c/icon-scalable.svg",
    },
    {
        number: "06",
        title: "Human Centered Design",
        description: "Clean technology designed to integrate into modern spaces.",
        mobileDescriptionLines: [
            "Clean technology designed to integrate into",
            "modern spaces.",
        ],
        mobileHeight: "189.525px",
        icon: "/figma/solutions/b2c/icon-design.svg",
    },
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
    {
        number: "01",
        title: "Healthier Air",
        description: "Lower CO₂ levels and improved air quality.",
        mobileDescriptionLines: ["Lower CO₂ levels and improved air", "quality."],
        mobileTextWidth: 247,
    },
    {
        number: "02",
        title: "Visible Sustainability",
        description: "A clear symbol of environmental commitment.",
        mobileDescriptionLines: ["A clear symbol of environmental", "commitment."],
        mobileTextWidth: 234,
    },
    {
        number: "03",
        title: "Support ESG Goals",
        description: "Trackable environmental impact and carbon reduction.",
        mobileDescriptionLines: ["Trackable environmental impact and", "carbon reduction."],
        mobileTextWidth: 266,
    },
    {
        number: "04",
        title: "Better Work Environments",
        description: "Cleaner air improves comfort and productivity.",
        mobileDescriptionLines: ["Cleaner air improves comfort and", "productivity."],
        mobileTextWidth: 252,
    },
    {
        number: "05",
        title: "Scalable Deployment",
        description: "Deploy across buildings, campuses, and public spaces.",
        mobileDescriptionLines: ["Deploy across buildings, campuses,", "and public spaces."],
        mobileTextWidth: 262,
    },
];

export const DEPLOYMENT_ITEMS: DeploymentItem[] = [
    {
        title: "Corporate Campuses",
        description: "Transform offices into living sustainability hubs.",
        image: "/figma/solutions/b2c/environment-corporate.png",
    },
    {
        title: "Transportation Hubs",
        description: "Improve air quality in airports and transit stations.",
        image: "/figma/solutions/b2c/environment-transportation.png",
    },
    {
        title: "Healthcare Facilities",
        description: "Create cleaner environments for patients and staff.",
        image: "/figma/solutions/b2c/environment-healthcare.png",
    },
    {
        title: "Technology Parks",
        description: "Climate infrastructure for innovation campuses.",
        image: "/figma/solutions/b2c/environment-technology-parks.png",
    },
    {
        title: "Retail and Hospitality",
        description: "Enhance customer experience with cleaner air.",
        image: "/figma/solutions/b2c/environment-retail.png",
    },
    {
        title: "Smart Cities",
        description: "Integrate carbon capture into urban development.",
        image: "/figma/solutions/b2c/environment-smart-cities.png",
    },
];