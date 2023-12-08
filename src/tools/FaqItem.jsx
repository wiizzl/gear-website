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
                <h3 onClick={toggleAnswer}>{question}</h3>
                <LuExpand/>
            </div>
            {isOpen && <p className={isOpen ? "in" : "out"}>{answer}</p>}
        </div>
    </>
}