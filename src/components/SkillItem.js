import { useEffect, useState } from "react"

export const SkillItem = ({ limitPercentage, skill }) => {
    const [shownPercentage, setShownPercentage] = useState(0)

    useEffect(() => {
        if (shownPercentage < limitPercentage) {
            setTimeout(() => {
                setShownPercentage((olderShownPercentage) => olderShownPercentage + 1)
            }, 20)
        }
    }, [shownPercentage])

    return (
        <div className="item">
            <div className="outer">
                <div className="inner">
                    <h5>{shownPercentage}%</h5>
                    <h4>{skill}</h4>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                <defs>
                    <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#e91e63" />
                        <stop offset="100%" stop-color="#673ab7" />
                    </linearGradient>
                </defs>
                <circle cx="80" cy="80" r="70" stroke-linecap="round" id={skill} />
            </svg>
        </div>
    )
}