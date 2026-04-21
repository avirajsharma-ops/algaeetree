type Variant = "tl-br" | "tr-bl";

/** Decorative notched-corner placeholder shape (Figma "Subtract"). */
export default function NotchedShape({
    variant,
    className,
}: {
    variant: Variant;
    className?: string;
}) {
    // Path translated from the Figma "Subtract" SVGs (viewBox 736 800).
    // Both shapes carve two 109x109 rounded notches out of opposite corners.
    const d =
        variant === "tl-br"
            ? "M736 675C736 683.837 728.837 691 720 691H643C634.163 691 627 698.163 627 707V784C627 792.837 619.837 800 611 800H16C7.16345 800 0 792.837 0 784V125C0 116.163 7.16344 109 16 109H93C101.837 109 109 101.837 109 93V16C109 7.16345 116.163 0 125 0H720C728.837 0 736 7.16344 736 16V675Z"
            : "M611 0C619.837 0 627 7.16344 627 16V93C627 101.837 634.163 109 643 109H720C728.837 109 736 116.163 736 125V784C736 792.837 728.837 800 720 800H125C116.163 800 109 792.837 109 784V707C109 698.163 101.837 691 93 691H16C7.16345 691 0 683.837 0 675V16C0 7.16345 7.16344 0 16 0H611Z";

    return (
        <svg
            viewBox="0 0 736 800"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-hidden="true"
        >
            <path d={d} fill="#d9d9d9" />
        </svg>
    );
}
