import { useEffect, useState } from "react";

const AnimatedTitles = () => {
    const roles = ['Software Engineer', 'Web Developer', 'Tech Enthusiast'];

    const [currentRoleIndex, setCurrIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const fullText = roles[currentRoleIndex];
            if (isDeleting) {
                setCurrentText(fullText.substring(0, currentText.length - 1));
                setTypingSpeed(75);
            } else {
                setCurrentText(fullText.substring(0, currentText.length + 1));
                setTypingSpeed(150);
            }

            if (!isDeleting && currentText === fullText) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && currentText === '') {
                setIsDeleting(false);
                setCurrIndex((prev) => (prev + 1) % roles.length);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, roles, currentRoleIndex, typingSpeed]);

    return (
        <div className="text-center md:text-start">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                <span className="text-outline pb-1">
                    {currentText}
                </span>
                <span className="inline-block h-7 md:h-14 w-0.5 bg-cyan-300 ml-1 animate-pulse"></span>
            </h1>
        </div>
    );
}

export default AnimatedTitles;