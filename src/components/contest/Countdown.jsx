import { useEffect, useState } from "react";

import "./Countdown.css";

const Countdown = ({
    startTime,
    endTime,
}) => {

    const [timeLeft, setTimeLeft] = useState("");

    useEffect(() => {

        const updateCountdown = () => {

            const now = new Date();

            const start = new Date(startTime);

            const end = new Date(endTime);

            let target;
            let prefix;

            if (now < start) {

                target = start;
                prefix = "Starts in";

            } else if (now < end) {

                target = end;
                prefix = "Ends in";

            } else {

                setTimeLeft("Contest Ended");
                return;

            }

            const diff = target - now;

            const days = Math.floor(
                diff / (1000 * 60 * 60 * 24)
            );

            const hours = Math.floor(
                (diff / (1000 * 60 * 60)) % 24
            );

            const minutes = Math.floor(
                (diff / (1000 * 60)) % 60
            );

            const seconds = Math.floor(
                (diff / 1000) % 60
            );

            let text = prefix + ": ";

            if (days > 0) {

                text += `${days}d `;

            }

            text += `${hours}h ${minutes}m ${seconds}s`;

            setTimeLeft(text);

        };

        updateCountdown();

        const interval = setInterval(
            updateCountdown,
            1000
        );

        return () => clearInterval(interval);

    }, [startTime, endTime]);

    return (

        <div className="countdown">

            {timeLeft}

        </div>

    );

};

export default Countdown;