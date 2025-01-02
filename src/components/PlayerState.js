import React, { useEffect, useState } from 'react';
import '../Styles/playerState.css';

const PlayerState = () => {
    const [daysLeft, setDaysLeft] = useState(0);
    const [xpPercentage, setXpPercentage] = useState(0);

    useEffect(() => {
        const calculateDaysLeft = () => {
            const today = new Date();
            const birthday = new Date(today.getFullYear(), 2, 30); // Month is 0-based, so 2 = March
            
            // If birthday has passed this year, get next year's birthday
            if (today > birthday) {
                birthday.setFullYear(birthday.getFullYear() + 1);
            }
            
            const diffTime = Math.abs(birthday - today);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            const totalDaysInYear = 365;
            const percentage = ((totalDaysInYear - diffDays) / totalDaysInYear) * 100;
            
            setDaysLeft(diffDays);
            setXpPercentage(percentage);
        };

        calculateDaysLeft();
    }, []);

    return (
        <div id="playerStats">
            <h1>Shashish Soni Level 21</h1>
            <div id="playerStats__lines">
                <div id="playerStats__lines__thick" style={{"--xp-percentage": `${xpPercentage}%`}}></div>
                <div className='playerStats__daysLeft'>• {daysLeft} days to level up</div>
            </div>
            <h2>Full Stack Developer</h2>
        </div>
    );
}

export default PlayerState;
