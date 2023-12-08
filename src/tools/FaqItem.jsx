import { useState } from 'react';
import { LuExpand } from 'react-icons/lu';

export const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleAnswer = () => {
        setIsOpen(!isOpen);
    }
    return <>
        <div className="faq-item">
            <div>
            <LuExpand/>
            </div>
            <h3 onClick={toggleAnswer}>{question}</h3>
            {isOpen && <p className={isOpen ? "in" : "out"}>{answer}</p>}
        </div>
    </>
}