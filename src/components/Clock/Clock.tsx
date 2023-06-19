import { useEffect, useRef, useState } from "react";
import "./Clock.scss";

const Clock = () => {
    const [timeClock, setTime] = useState(23);
    const buttonRef = useRef(null);
    console.log(buttonRef.current);

    const handleClick = (element: any) => {
        element.style.backgroundColor = 'red';
    }

    return (
        <div className="clock">
            <div className="clock-current">Current Time: {timeClock}</div>
            <button onClick={() => handleClick(buttonRef.current)} className="btn btn-dark" ref={buttonRef}>
                click
            </button>
        </div>
    );
};

export default Clock;
