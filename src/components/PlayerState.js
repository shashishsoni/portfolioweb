import React, { useEffect, useState } from 'react';
import '../Styles/playerState.css';

const PlayerState = () => {
    const [daysLeft, setDaysLeft] = useState(0);
    const [xpPercentage, setXpPercentage] = useState(0);
    const [age, setAge] = useState(21);

    useEffect(() => {
        const calculateDaysLeft = () => {
            const today = new Date();
            const birthday = new Date(today.getFullYear(), 2, 30); // March 30th
            const birthYear = 2003; 
            
            let currentAge = today.getFullYear() - birthYear;
            if (today < birthday) {
                currentAge--; 
            }
            
            if (today > birthday) {
                birthday.setFullYear(birthday.getFullYear() + 1);
            }
            
            const diffTime = Math.abs(birthday - today);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            const daysInYear = 365;
            const percentage = ((daysInYear - diffDays) / daysInYear) * 100;
            
            setDaysLeft(diffDays);
            setXpPercentage(percentage);
            setAge(currentAge);
        };

        calculateDaysLeft();
        const timer = setInterval(calculateDaysLeft, 86400000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div id="playerStats">
            <h1>Shashish Soni Level {age}</h1>
            <div id="playerStats__lines">
                <div id="playerStats__lines__thick" style={{"--xp-percentage": `${xpPercentage}%`}}></div>
                <div className='playerStats__daysLeft'>• {daysLeft} days to level up</div>
            </div>
            <h2>Full Stack Developer</h2>
        </div>
    );
}

export default PlayerState;
