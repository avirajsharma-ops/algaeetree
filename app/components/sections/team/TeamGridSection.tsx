"use client";

import TeamMemberCard from "./TeamMemberCard";

const TEAM_MEMBERS = [
    {
        src: "/figma/team/member-1.jpg",
        alt: "AlgaeTree team member portrait 1",
        name: "Sameer Sagar",
        designation: "Managing Director",
        bio: "Visionary entrepreneur and strategic leader driving the AlgaeTree mission, focused on scaling climate-tech innovation and building impactful, sustainable infrastructure solutions.",
    },
    {
        src: "/figma/team/member-2.jpg",
        alt: "AlgaeTree team member portrait 2",
        name: "Shakti Sagar",
        designation: "Managing Director",
        bio: "Financial strategist and co-leader ensuring strong governance, efficient capital deployment, and long-term sustainability of the AlgaeTree initiative.",
    },
    {
        src: "/figma/team/member-3.jpg",
        alt: "AlgaeTree team member portrait 3",
        name: "Prateek Maheshwari",
        designation: "Chief Technical Officer",
        bio: "Technology and innovation lead overseeing product development, system optimization, and integration of advanced engineering in AlgaeTree.",
    },
    {
        src: "/figma/team/member-4.jpg",
        alt: "AlgaeTree team member portrait 4",
        name: "Vaibhav Shrivastava",
        designation: "Chief Operation Officer",
        bio: "Operations expert managing execution, deployment, and scalability of AlgaeTree across diverse environments with efficiency and precision.",
    },
    {
        src: "/figma/team/member-5.jpg",
        alt: "AlgaeTree team member portrait 5",
        name: "Tanupriya Patel",
        designation: "Research Scientist",
        bio: "Driving experimental research, data analysis, and process optimization to enhance the biological efficiency and real-world impact of AlgaeTree.",
    },
    {
        src: "/figma/team/member-6.jpg",
        alt: "AlgaeTree team member portrait 6",
        name: "Naresh Babu Mallampati",
        designation: "Principal Research Scientist",
        bio: "Leading scientific research and innovation in microalgae systems, ensuring performance, efficiency, and continuous advancement of the core technology.",
    },
];

export default function TeamGridSection() {
    return (
        <section className="page-px w-full pt-4 pb-12 sm:pb-16 xl:py-15">
            <div
                className="mx-auto grid w-full max-w-372 grid-cols-2 gap-4 md:gap-6 lg:grid-cols-3"
                aria-label="AlgaeTree team portraits"
            >
                {TEAM_MEMBERS.map((member) => (
                    <TeamMemberCard
                        key={member.src}
                        src={member.src}
                        alt={member.alt}
                        name={member.name}
                        designation={member.designation}
                        bio={member.bio}
                    />
                ))}
            </div>
        </section>
    );
}