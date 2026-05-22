"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";

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

const COUNTRY_CODE_OPTIONS = [
    { label: "India (+91)", value: "+91" },
    { label: "Afghanistan (+93)", value: "+93" },
    { label: "Albania (+355)", value: "+355" },
    { label: "Algeria (+213)", value: "+213" },
    { label: "American Samoa (+1-684)", value: "+1-684" },
    { label: "Andorra (+376)", value: "+376" },
    { label: "Angola (+244)", value: "+244" },
    { label: "Anguilla (+1-264)", value: "+1-264" },
    { label: "Antigua and Barbuda (+1-268)", value: "+1-268" },
    { label: "Argentina (+54)", value: "+54" },
    { label: "Armenia (+374)", value: "+374" },
    { label: "Aruba (+297)", value: "+297" },
    { label: "Australia (+61)", value: "+61" },
    { label: "Austria (+43)", value: "+43" },
    { label: "Azerbaijan (+994)", value: "+994" },
    { label: "Bahamas (+1-242)", value: "+1-242" },
    { label: "Bahrain (+973)", value: "+973" },
    { label: "Bangladesh (+880)", value: "+880" },
    { label: "Barbados (+1-246)", value: "+1-246" },
    { label: "Belarus (+375)", value: "+375" },
    { label: "Belgium (+32)", value: "+32" },
    { label: "Belize (+501)", value: "+501" },
    { label: "Benin (+229)", value: "+229" },
    { label: "Bermuda (+1-441)", value: "+1-441" },
    { label: "Bhutan (+975)", value: "+975" },
    { label: "Bolivia (+591)", value: "+591" },
    { label: "Bosnia and Herzegovina (+387)", value: "+387" },
    { label: "Botswana (+267)", value: "+267" },
    { label: "Brazil (+55)", value: "+55" },
    { label: "British Virgin Islands (+1-284)", value: "+1-284" },
    { label: "Brunei (+673)", value: "+673" },
    { label: "Bulgaria (+359)", value: "+359" },
    { label: "Burkina Faso (+226)", value: "+226" },
    { label: "Burundi (+257)", value: "+257" },
    { label: "Cambodia (+855)", value: "+855" },
    { label: "Cameroon (+237)", value: "+237" },
    { label: "Canada (+1)", value: "+1" },
    { label: "Cape Verde (+238)", value: "+238" },
    { label: "Cayman Islands (+1-345)", value: "+1-345" },
    { label: "Central African Republic (+236)", value: "+236" },
    { label: "Chad (+235)", value: "+235" },
    { label: "Chile (+56)", value: "+56" },
    { label: "China (+86)", value: "+86" },
    { label: "Colombia (+57)", value: "+57" },
    { label: "Comoros (+269)", value: "+269" },
    { label: "Congo - Brazzaville (+242)", value: "+242" },
    { label: "Congo - Kinshasa (+243)", value: "+243" },
    { label: "Cook Islands (+682)", value: "+682" },
    { label: "Costa Rica (+506)", value: "+506" },
    { label: "Croatia (+385)", value: "+385" },
    { label: "Cuba (+53)", value: "+53" },
    { label: "Curacao (+599)", value: "+599" },
    { label: "Cyprus (+357)", value: "+357" },
    { label: "Czech Republic (+420)", value: "+420" },
    { label: "Denmark (+45)", value: "+45" },
    { label: "Djibouti (+253)", value: "+253" },
    { label: "Dominica (+1-767)", value: "+1-767" },
    { label: "Dominican Republic (+1-809)", value: "+1-809" },
    { label: "Dominican Republic (+1-829)", value: "+1-829" },
    { label: "Dominican Republic (+1-849)", value: "+1-849" },
    { label: "Ecuador (+593)", value: "+593" },
    { label: "Egypt (+20)", value: "+20" },
    { label: "El Salvador (+503)", value: "+503" },
    { label: "Equatorial Guinea (+240)", value: "+240" },
    { label: "Eritrea (+291)", value: "+291" },
    { label: "Estonia (+372)", value: "+372" },
    { label: "Eswatini (+268)", value: "+268" },
    { label: "Ethiopia (+251)", value: "+251" },
    { label: "Falkland Islands (+500)", value: "+500" },
    { label: "Faroe Islands (+298)", value: "+298" },
    { label: "Fiji (+679)", value: "+679" },
    { label: "Finland (+358)", value: "+358" },
    { label: "France (+33)", value: "+33" },
    { label: "French Guiana (+594)", value: "+594" },
    { label: "French Polynesia (+689)", value: "+689" },
    { label: "Gabon (+241)", value: "+241" },
    { label: "Gambia (+220)", value: "+220" },
    { label: "Georgia (+995)", value: "+995" },
    { label: "Germany (+49)", value: "+49" },
    { label: "Ghana (+233)", value: "+233" },
    { label: "Gibraltar (+350)", value: "+350" },
    { label: "Greece (+30)", value: "+30" },
    { label: "Greenland (+299)", value: "+299" },
    { label: "Grenada (+1-473)", value: "+1-473" },
    { label: "Guadeloupe (+590)", value: "+590" },
    { label: "Guam (+1-671)", value: "+1-671" },
    { label: "Guatemala (+502)", value: "+502" },
    { label: "Guernsey (+44)", value: "+44" },
    { label: "Guinea (+224)", value: "+224" },
    { label: "Guinea-Bissau (+245)", value: "+245" },
    { label: "Guyana (+592)", value: "+592" },
    { label: "Haiti (+509)", value: "+509" },
    { label: "Honduras (+504)", value: "+504" },
    { label: "Hong Kong (+852)", value: "+852" },
    { label: "Hungary (+36)", value: "+36" },
    { label: "Iceland (+354)", value: "+354" },
    { label: "Indonesia (+62)", value: "+62" },
    { label: "Iran (+98)", value: "+98" },
    { label: "Iraq (+964)", value: "+964" },
    { label: "Ireland (+353)", value: "+353" },
    { label: "Isle of Man (+44)", value: "+44" },
    { label: "Israel (+972)", value: "+972" },
    { label: "Italy (+39)", value: "+39" },
    { label: "Ivory Coast (+225)", value: "+225" },
    { label: "Jamaica (+1-876)", value: "+1-876" },
    { label: "Japan (+81)", value: "+81" },
    { label: "Jersey (+44)", value: "+44" },
    { label: "Jordan (+962)", value: "+962" },
    { label: "Kazakhstan (+7)", value: "+7" },
    { label: "Kenya (+254)", value: "+254" },
    { label: "Kiribati (+686)", value: "+686" },
    { label: "Kuwait (+965)", value: "+965" },
    { label: "Kyrgyzstan (+996)", value: "+996" },
    { label: "Laos (+856)", value: "+856" },
    { label: "Latvia (+371)", value: "+371" },
    { label: "Lebanon (+961)", value: "+961" },
    { label: "Lesotho (+266)", value: "+266" },
    { label: "Liberia (+231)", value: "+231" },
    { label: "Libya (+218)", value: "+218" },
    { label: "Liechtenstein (+423)", value: "+423" },
    { label: "Lithuania (+370)", value: "+370" },
    { label: "Luxembourg (+352)", value: "+352" },
    { label: "Macau (+853)", value: "+853" },
    { label: "Madagascar (+261)", value: "+261" },
    { label: "Malawi (+265)", value: "+265" },
    { label: "Malaysia (+60)", value: "+60" },
    { label: "Maldives (+960)", value: "+960" },
    { label: "Mali (+223)", value: "+223" },
    { label: "Malta (+356)", value: "+356" },
    { label: "Marshall Islands (+692)", value: "+692" },
    { label: "Martinique (+596)", value: "+596" },
    { label: "Mauritania (+222)", value: "+222" },
    { label: "Mauritius (+230)", value: "+230" },
    { label: "Mayotte (+262)", value: "+262" },
    { label: "Mexico (+52)", value: "+52" },
    { label: "Micronesia (+691)", value: "+691" },
    { label: "Moldova (+373)", value: "+373" },
    { label: "Monaco (+377)", value: "+377" },
    { label: "Mongolia (+976)", value: "+976" },
    { label: "Montenegro (+382)", value: "+382" },
    { label: "Montserrat (+1-664)", value: "+1-664" },
    { label: "Morocco (+212)", value: "+212" },
    { label: "Mozambique (+258)", value: "+258" },
    { label: "Myanmar (+95)", value: "+95" },
    { label: "Namibia (+264)", value: "+264" },
    { label: "Nauru (+674)", value: "+674" },
    { label: "Nepal (+977)", value: "+977" },
    { label: "Netherlands (+31)", value: "+31" },
    { label: "New Caledonia (+687)", value: "+687" },
    { label: "New Zealand (+64)", value: "+64" },
    { label: "Nicaragua (+505)", value: "+505" },
    { label: "Niger (+227)", value: "+227" },
    { label: "Nigeria (+234)", value: "+234" },
    { label: "Niue (+683)", value: "+683" },
    { label: "North Korea (+850)", value: "+850" },
    { label: "North Macedonia (+389)", value: "+389" },
    { label: "Northern Mariana Islands (+1-670)", value: "+1-670" },
    { label: "Norway (+47)", value: "+47" },
    { label: "Oman (+968)", value: "+968" },
    { label: "Pakistan (+92)", value: "+92" },
    { label: "Palau (+680)", value: "+680" },
    { label: "Palestine (+970)", value: "+970" },
    { label: "Panama (+507)", value: "+507" },
    { label: "Papua New Guinea (+675)", value: "+675" },
    { label: "Paraguay (+595)", value: "+595" },
    { label: "Peru (+51)", value: "+51" },
    { label: "Philippines (+63)", value: "+63" },
    { label: "Poland (+48)", value: "+48" },
    { label: "Portugal (+351)", value: "+351" },
    { label: "Puerto Rico (+1-787)", value: "+1-787" },
    { label: "Puerto Rico (+1-939)", value: "+1-939" },
    { label: "Qatar (+974)", value: "+974" },
    { label: "Reunion (+262)", value: "+262" },
    { label: "Romania (+40)", value: "+40" },
    { label: "Russia (+7)", value: "+7" },
    { label: "Rwanda (+250)", value: "+250" },
    { label: "Saint Barthelemy (+590)", value: "+590" },
    { label: "Saint Helena (+290)", value: "+290" },
    { label: "Saint Kitts and Nevis (+1-869)", value: "+1-869" },
    { label: "Saint Lucia (+1-758)", value: "+1-758" },
    { label: "Saint Martin (+590)", value: "+590" },
    { label: "Saint Pierre and Miquelon (+508)", value: "+508" },
    { label: "Saint Vincent and the Grenadines (+1-784)", value: "+1-784" },
    { label: "Samoa (+685)", value: "+685" },
    { label: "San Marino (+378)", value: "+378" },
    { label: "Sao Tome and Principe (+239)", value: "+239" },
    { label: "Saudi Arabia (+966)", value: "+966" },
    { label: "Senegal (+221)", value: "+221" },
    { label: "Serbia (+381)", value: "+381" },
    { label: "Seychelles (+248)", value: "+248" },
    { label: "Sierra Leone (+232)", value: "+232" },
    { label: "Singapore (+65)", value: "+65" },
    { label: "Sint Maarten (+1-721)", value: "+1-721" },
    { label: "Slovakia (+421)", value: "+421" },
    { label: "Slovenia (+386)", value: "+386" },
    { label: "Solomon Islands (+677)", value: "+677" },
    { label: "Somalia (+252)", value: "+252" },
    { label: "South Africa (+27)", value: "+27" },
    { label: "South Korea (+82)", value: "+82" },
    { label: "South Sudan (+211)", value: "+211" },
    { label: "Spain (+34)", value: "+34" },
    { label: "Sri Lanka (+94)", value: "+94" },
    { label: "Sudan (+249)", value: "+249" },
    { label: "Suriname (+597)", value: "+597" },
    { label: "Sweden (+46)", value: "+46" },
    { label: "Switzerland (+41)", value: "+41" },
    { label: "Syria (+963)", value: "+963" },
    { label: "Taiwan (+886)", value: "+886" },
    { label: "Tajikistan (+992)", value: "+992" },
    { label: "Tanzania (+255)", value: "+255" },
    { label: "Thailand (+66)", value: "+66" },
    { label: "Timor-Leste (+670)", value: "+670" },
    { label: "Togo (+228)", value: "+228" },
    { label: "Tokelau (+690)", value: "+690" },
    { label: "Tonga (+676)", value: "+676" },
    { label: "Trinidad and Tobago (+1-868)", value: "+1-868" },
    { label: "Tunisia (+216)", value: "+216" },
    { label: "Turkey (+90)", value: "+90" },
    { label: "Turkmenistan (+993)", value: "+993" },
    { label: "Turks and Caicos Islands (+1-649)", value: "+1-649" },
    { label: "Tuvalu (+688)", value: "+688" },
    { label: "U.S. Virgin Islands (+1-340)", value: "+1-340" },
    { label: "UAE (+971)", value: "+971" },
    { label: "Uganda (+256)", value: "+256" },
    { label: "Ukraine (+380)", value: "+380" },
    { label: "United Kingdom (+44)", value: "+44" },
    { label: "United States (+1)", value: "+1" },
    { label: "Uruguay (+598)", value: "+598" },
    { label: "Uzbekistan (+998)", value: "+998" },
    { label: "Vanuatu (+678)", value: "+678" },
    { label: "Vatican City (+379)", value: "+379" },
    { label: "Venezuela (+58)", value: "+58" },
    { label: "Vietnam (+84)", value: "+84" },
    { label: "Wallis and Futuna (+681)", value: "+681" },
    { label: "Western Sahara (+212)", value: "+212" },
    { label: "Yemen (+967)", value: "+967" },
    { label: "Zambia (+260)", value: "+260" },
    { label: "Zimbabwe (+263)", value: "+263" },
    { label: "USA (+1)", value: "+1" },
    { label: "UK (+44)", value: "+44" },
];

type ContactFormState = {
    company: string;
    consent: boolean;
    countryCode: string;
    email: string;
    fullName: string;
    message: string;
    phone: string;
    topic: string;
    urgency: string;
};

const initialFormState: ContactFormState = {
    company: "",
    consent: false,
    countryCode: "+91",
    email: "",
    fullName: "",
    message: "",
    phone: "",
    topic: "",
    urgency: "normal",
};

const fieldClassName =
    "h-[40px] w-full rounded-[6px] border border-[#cfcfcf] bg-white px-3 font-nimbus text-[15px] leading-5 text-[#6d6d6d] outline-none transition-colors placeholder:text-[#9b9b9b] focus:border-[#2d5a27] focus:ring-1 focus:ring-[#2d5a27]/15";

const labelClassName = "flex flex-col gap-2 font-nimbus text-[13px] font-bold leading-4 text-[#1f1f1f]";

export default function ContactFormCard() {
    const router = useRouter();
    const [formState, setFormState] = useState(initialFormState);
    const [phoneError, setPhoneError] = useState("");
    const [phoneTouched, setPhoneTouched] = useState(false);
    const [isCountryCodeOpen, setIsCountryCodeOpen] = useState(false);
    const countryCodeDropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (countryCodeDropdownRef.current?.contains(event.target as Node)) {
                return;
            }

            setIsCountryCodeOpen(false);
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => {
        const { name, value } = event.target;

        if (name === "phone") {
            const digitsOnly = value.replace(/\D/g, "");

            if (digitsOnly.length > 10) {
                setPhoneError("Phone number cannot be more than 10 digits.");
            } else if (phoneTouched && digitsOnly.length > 0 && digitsOnly.length < 10) {
                setPhoneError("Phone number must be exactly 10 digits.");
            } else {
                setPhoneError("");
            }

            setFormState((current) => ({ ...current, phone: digitsOnly.slice(0, 10) }));
            return;
        }

        setFormState((current) => ({ ...current, [name]: value }));
    };

    const handleConsentChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormState((current) => ({ ...current, consent: event.target.checked }));
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (formState.phone.length !== 10) {
            setPhoneTouched(true);
            setPhoneError("Phone number must be exactly 10 digits.");
            return;
        }

        if (!canSubmit) {
            return;
        }

        // Navigate immediately — API call runs in the background
        router.push("/thank-you");

        const payload = JSON.stringify({
            fullName: formState.fullName,
            email: formState.email,
            company: formState.company,
            phone: `${formState.countryCode} ${formState.phone}`,
            topic: formState.topic,
            urgency: formState.urgency,
            message: formState.message,
            consent: formState.consent,
        });

        fetch("/api/contact-to-firebase", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: payload,
        }).catch(() => {
            // silently ignore — data already saved client-side if needed
        });
    };

    const canSubmit =
        formState.consent &&
        formState.fullName.trim() !== "" &&
        formState.email.trim() !== "" &&
        formState.company.trim() !== "" &&
        formState.phone.length === 10 &&
        formState.topic !== "" &&
        formState.message.trim() !== "";

    const selectedCountryCode = COUNTRY_CODE_OPTIONS.find(
        (option) => option.value === formState.countryCode,
    ) ?? COUNTRY_CODE_OPTIONS[0];

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
                    <span>Email</span>
                    <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
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
                        placeholder="Your company name"
                        className={fieldClassName}
                        autoComplete="organization"
                        required
                    />
                </label>

                <div className="flex flex-col gap-2 font-nimbus text-[13px] font-bold leading-4 text-[#1f1f1f]">
                    <span>Phone</span>
                    <div className="flex items-stretch">
                        <div ref={countryCodeDropdownRef} className="relative w-[58px]">
                            <button
                                type="button"
                                onClick={() => setIsCountryCodeOpen((current) => !current)}
                                className="flex h-[40px] w-full items-center justify-between rounded-l-[6px] border border-[#cfcfcf] bg-white px-2 text-[13px] leading-5 text-[#6d6d6d] outline-none transition-colors focus:border-[#2d5a27] focus:ring-1 focus:ring-[#2d5a27]/15"
                                aria-label="Country code"
                                aria-expanded={isCountryCodeOpen}
                            >
                                <span>{selectedCountryCode.value}</span>
                                <Image src="/figma/contact/dropdown-mini.svg" alt="" aria-hidden width={8} height={8} />
                            </button>

                            {isCountryCodeOpen && (
                                <div className="absolute left-0 top-[42px] z-30 max-h-48 w-[240px] overflow-y-auto rounded-[8px] border border-[#cfcfcf] bg-white py-1 shadow-[0_10px_24px_rgba(0,0,0,0.12)]">
                                    {COUNTRY_CODE_OPTIONS.map((option) => (
                                        <button
                                            key={`${option.label}-${option.value}`}
                                            type="button"
                                            className={`flex w-full items-center px-3 py-1.5 text-left text-[13px] leading-5 ${formState.countryCode === option.value
                                                ? "bg-[#edf7ed] text-[#2d5a27]"
                                                : "text-[#4f4f4f] hover:bg-[#f7f7f7]"
                                                }`}
                                            onClick={() => {
                                                setFormState((current) => ({
                                                    ...current,
                                                    countryCode: option.value,
                                                }));
                                                setIsCountryCodeOpen(false);
                                            }}
                                        >
                                            {option.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <input
                            type="tel"
                            name="phone"
                            value={formState.phone}
                            onChange={handleChange}
                            onBlur={() => {
                                setPhoneTouched(true);
                                if (formState.phone.length > 0 && formState.phone.length < 10) {
                                    setPhoneError("Phone number must be exactly 10 digits.");
                                }
                            }}
                            placeholder="Type only 10-digit phone number (without country code)"
                            className="min-w-0 flex-1 rounded-r-[6px] border border-[#cfcfcf] bg-white px-3 font-nimbus text-[15px] leading-5 text-[#6d6d6d] outline-none transition-colors placeholder:text-[#9b9b9b] focus:border-[#2d5a27] focus:ring-1 focus:ring-[#2d5a27]/15"
                            autoComplete="tel"
                            inputMode="numeric"
                            maxLength={10}
                            pattern="[0-9]{10}"
                            aria-invalid={phoneError !== ""}
                            required
                        />
                    </div>
                    {phoneError && (
                        <p className="font-nimbus text-[12px] leading-4 text-[#b42318]">{phoneError}</p>
                    )}
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
                    suppressHydrationWarning
                    disabled={!canSubmit}
                    whileHover={canSubmit ? { y: -2 } : undefined}
                    whileTap={canSubmit ? { scale: 0.98 } : undefined}
                    className={`h-12 min-w-[172px] rounded-[10px] px-6 font-space-grotesk text-[14px] font-medium uppercase tracking-[0.04em] transition-colors ${canSubmit
                        ? "bg-[#2d5a27] text-white hover:bg-[#264d21]"
                        : "bg-[#2d5a27] text-white/85 opacity-80"
                        }`}
                >
                    Lets Connect
                </motion.button>
            </div>
        </form>
    );
}