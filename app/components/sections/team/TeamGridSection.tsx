"use client";

import TeamMemberCard from "./TeamMemberCard";

const TEAM_MEMBERS = [
    {
        src: "/figma/team/member-1.jpg",
        alt: "AlgaeTree team member portrait 1",
    },
    {
        src: "/figma/team/member-2.jpg",
        alt: "AlgaeTree team member portrait 2",
    },
    {
        src: "/figma/team/member-3.jpg",
        alt: "AlgaeTree team member portrait 3",
    },
    {
        src: "/figma/team/member-4.jpg",
        alt: "AlgaeTree team member portrait 4",
    },
    {
        src: "/figma/team/member-5.jpg",
        alt: "AlgaeTree team member portrait 5",
    },
    {
        src: "/figma/team/member-6.jpg",
        alt: "AlgaeTree team member portrait 6",
    },
];

export default function TeamGridSection() {
    return (
        <section className="w-full px-4 pt-4 pb-12 sm:px-6 sm:pb-16 xl:px-[120px] xl:py-[60px]">
            <div
                className="mx-auto grid w-full max-w-[408px] grid-cols-2 gap-4 md:max-w-none xl:max-w-[1488px] xl:grid-cols-3"
                aria-label="AlgaeTree team portraits"
            >
                {TEAM_MEMBERS.map((member) => (
                    <TeamMemberCard key={member.src} src={member.src} alt={member.alt} />
                ))}
            </div>
        </section>
    );
}