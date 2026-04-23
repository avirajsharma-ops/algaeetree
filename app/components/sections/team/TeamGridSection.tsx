"use client";

import TeamMemberCard from "./TeamMemberCard";

const TEAM_MEMBERS = [
    {
        src: "/figma/team/member-1.jpg",
        alt: "AlgaeTree team member portrait 1",
        name: "Sameer Sagar",
        role: "Head Researcher",
    },
    {
        src: "/figma/team/member-2.jpg",
        alt: "AlgaeTree team member portrait 2",
        name: "Shakti Sagar",
        role: "Chief Scientist",
    },
    {
        src: "/figma/team/member-3.jpg",
        alt: "AlgaeTree team member portrait 3",
        name: "Prateek Maheshwari",
        role: "Engineering Lead",
    },
    {
        src: "/figma/team/member-4.jpg",
        alt: "AlgaeTree team member portrait 4",
        name: "Vaibhav Shrivastava",
        role: "Operations Director",
    },
    {
        src: "/figma/team/member-5.jpg",
        alt: "AlgaeTree team member portrait 5",
        name: "Tanupriya Patel",
        role: "Strategy Advisor",
    },
    {
        src: "/figma/team/member-6.jpg",
        alt: "AlgaeTree team member portrait 6",
        name: "Naresh Babu Mallampati",
        role: "Research Associate",
    },
];

export default function TeamGridSection() {
    return (
        <section className="w-full px-4 pt-4 pb-12 sm:px-6 sm:pb-16 xl:px-30 xl:py-15">
            <div
                className="mx-auto grid w-full max-w-300 grid-cols-2 gap-4 md:gap-6 lg:grid-cols-3"
                aria-label="AlgaeTree team portraits"
            >
                {TEAM_MEMBERS.map((member) => (
                    <TeamMemberCard
                        key={member.src}
                        src={member.src}
                        alt={member.alt}
                        name={member.name}
                        role={member.role}
                    />
                ))}
            </div>
        </section>
    );
}