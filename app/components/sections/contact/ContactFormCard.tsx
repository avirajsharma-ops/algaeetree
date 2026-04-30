"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ChangeEvent, FormEvent, useState } from "react";

const TOPIC_OPTIONS = [
    { label: "Select a topic", value: "" },
    { label: "Pilot Project", value: "pilot-project" },
    { label: "Partnership Inquiry", value: "partnership-inquiry" },
    { label: "Press Request", value: "press-request" },
    { label: "General Inquiry", value: "general-inquiry" },
];

const URGENCY_OPTIONS = [
    { label: "Normal", value: "normal" },
    { label: "Priority", value: "priority" },
    { label: "Urgent", value: "urgent" },
];

type ContactFormState = {
    company: string;
    consent: boolean;
    fullName: string;
    message: string;
    phone: string;
    topic: string;
    urgency: string;
    workEmail: string;
};

const initialFormState: ContactFormState = {
    company: "",
    consent: false,
    fullName: "",
    message: "",
    phone: "",
    topic: "",
    urgency: "normal",
    workEmail: "",
};

const fieldClassName =
    "h-[40px] w-full rounded-[6px] border border-[#cfcfcf] bg-white px-3 font-nimbus text-[15px] leading-5 text-[#6d6d6d] outline-none transition-colors placeholder:text-[#9b9b9b] focus:border-[#2d5a27] focus:ring-1 focus:ring-[#2d5a27]/15";

const labelClassName = "flex flex-col gap-2 font-nimbus text-[13px] leading-4 text-[#7f7f7f]";

export default function ContactFormCard() {
    const [formState, setFormState] = useState(initialFormState);

    const handleChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => {
        const { name, value } = event.target;
        setFormState((current) => ({ ...current, [name]: value }));
    };

    const handleConsentChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormState((current) => ({ ...current, consent: event.target.checked }));
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    const canSubmit =
        formState.consent &&
        formState.fullName.trim() !== "" &&
        formState.workEmail.trim() !== "" &&
        formState.company.trim() !== "" &&
        formState.phone.trim() !== "" &&
        formState.topic !== "" &&
        formState.message.trim() !== "";

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full rounded-[24px] bg-white px-4 py-5 shadow-[0_24px_56px_rgba(0,0,0,0.14)] sm:px-7 sm:py-7 lg:w-[480px] xl:w-[576px]"
        >
            <div className="flex flex-col gap-3.5">
                <label className={labelClassName}>
                    <span>Full Name</span>
                    <input
                        type="text"
                        name="fullName"
                        value={formState.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={fieldClassName}
                        autoComplete="name"
                        required
                    />
                </label>

                <label className={labelClassName}>
                    <span>Work Email</span>
                    <input
                        type="email"
                        name="workEmail"
                        value={formState.workEmail}
                        onChange={handleChange}
                        placeholder="Example@abc.com"
                        className={fieldClassName}
                        autoComplete="email"
                        required
                    />
                </label>

                <label className={labelClassName}>
                    <span>Company / Organization</span>
                    <input
                        type="text"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        placeholder="Example@abc.com"
                        className={fieldClassName}
                        autoComplete="organization"
                        required
                    />
                </label>

                <div className="flex flex-col gap-2 font-nimbus text-[13px] leading-4 text-[#7f7f7f]">
                    <span>Phone</span>
                    <div className="flex items-stretch">
                        <div className="flex h-[40px] w-[40px] items-center justify-center gap-1 rounded-l-[6px] border border-[#cfcfcf] bg-white">
                            <Image src="/figma/contact/flag-india.svg" alt="India" width={20} height={20} />
                            <Image src="/figma/contact/dropdown-mini.svg" alt="" aria-hidden width={5} height={5} />
                        </div>

                        <div className="flex h-[40px] w-[50px] items-center justify-center border-y border-[#cfcfcf] bg-white font-nimbus text-[15px] leading-5 text-[#6d6d6d]">
                            +91
                        </div>

                        <input
                            type="tel"
                            name="phone"
                            value={formState.phone}
                            onChange={handleChange}
                            placeholder="12345 67890"
                            className="min-w-0 flex-1 rounded-r-[6px] border border-[#cfcfcf] bg-white px-3 font-nimbus text-[15px] leading-5 text-[#6d6d6d] outline-none transition-colors placeholder:text-[#9b9b9b] focus:border-[#2d5a27] focus:ring-1 focus:ring-[#2d5a27]/15"
                            autoComplete="tel"
                            required
                        />
                    </div>
                </div>

                <label className={labelClassName}>
                    <span>Topic</span>
                    <div className="relative">
                        <select
                            name="topic"
                            value={formState.topic}
                            onChange={handleChange}
                            className={`${fieldClassName} appearance-none pr-10`}
                            required
                        >
                            {TOPIC_OPTIONS.map((option) => (
                                <option key={option.label} value={option.value} disabled={option.value === ""}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <Image
                            src="/figma/contact/dropdown.svg"
                            alt=""
                            aria-hidden
                            width={24}
                            height={24}
                            className="pointer-events-none absolute right-[10px] top-1/2 -translate-y-1/2"
                        />
                    </div>
                </label>

                <label className={labelClassName}>
                    <span>Urgency</span>
                    <div className="relative">
                        <select
                            name="urgency"
                            value={formState.urgency}
                            onChange={handleChange}
                            className={`${fieldClassName} appearance-none pr-10`}
                        >
                            {URGENCY_OPTIONS.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <Image
                            src="/figma/contact/dropdown.svg"
                            alt=""
                            aria-hidden
                            width={24}
                            height={24}
                            className="pointer-events-none absolute right-[10px] top-1/2 -translate-y-1/2"
                        />
                    </div>
                </label>

                <label className={labelClassName}>
                    <span>Message</span>
                    <textarea
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Describe Your Project"
                        className="h-[68px] w-full resize-none rounded-[6px] border border-[#cfcfcf] bg-white px-3 py-2.5 font-nimbus text-[15px] leading-5 text-[#6d6d6d] outline-none transition-colors placeholder:text-[#9b9b9b] focus:border-[#2d5a27] focus:ring-1 focus:ring-[#2d5a27]/15"
                        required
                    />
                </label>
            </div>

            <div className="pt-5" />

            <label className="flex items-start gap-[10px] font-nimbus text-[12px] leading-[18px] text-[#7f7f7f]">
                <input
                    type="checkbox"
                    checked={formState.consent}
                    onChange={handleConsentChange}
                    className="mt-0.5 size-[18px] rounded-[4px] border border-[#cfcfcf] text-[#2d5a27] focus:ring-[#2d5a27]"
                />
                <span>
                    I agree to the Privacy Policy and Terms &amp; Conditions, and consent to the collection
                    and use of my information as described.
                </span>
            </label>

            <div className="pt-6" />

            <div className="flex justify-center">
                <motion.button
                    type="submit"
                    disabled={!canSubmit}
                    whileHover={canSubmit ? { y: -2 } : undefined}
                    whileTap={canSubmit ? { scale: 0.98 } : undefined}
                    className={`h-12 min-w-[172px] rounded-[10px] px-6 font-space-grotesk text-[14px] font-medium uppercase tracking-[0.04em] transition-colors ${canSubmit
                        ? "bg-[#2d5a27] text-white hover:bg-[#234820]"
                        : "bg-[#d9d9d9] text-[#7a7a7a]"
                        }`}
                >
                    Let&apos;s Connect
                </motion.button>
            </div>
        </form>
    );
}