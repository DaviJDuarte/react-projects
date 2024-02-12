import {useState} from "react";

interface TextExpanderProps {
    children: string;
    className?: string;
    collapsedWordsCount?: number;
    expandButtonText?: string;
    collapseButtonText?: string;
    buttonColor?: string;
    expanded?: boolean
}

export default function TextExpander({
                                         children,
                                         className = "",
                                         collapsedWordsCount = 20,
                                         expanded = false,
                                         expandButtonText = "Show more",
                                         collapseButtonText = "Show less",
                                         buttonColor = "blue"
                                     }: TextExpanderProps) {
    const [isCollapsed, setIsCollapsed] = useState(expanded);

    function handleToggle() {
        setIsCollapsed(isCollapsed => !isCollapsed);
    }

    const text = isCollapsed ? children : children.split(" ").slice(0, collapsedWordsCount).join(" ") + "...";

    const buttonStyles = {
        background: "none",
        border: "none",
        font: "inherit",
        color: buttonColor,
        cursor: "pointer"
    };

    return (
        <div className={className}>
            <span>
                {text}
            </span>
            <button onClick={handleToggle}
                    style={buttonStyles}>
                {isCollapsed ? collapseButtonText : expandButtonText}
            </button>
        </div>
    );
}