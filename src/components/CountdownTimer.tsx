import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-08-30T00:00:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center py-12">
      <h2 className="text-2xl font-bold text-white mb-8">Event Countdown</h2>
      <div className="flex justify-center gap-8 flex-wrap">
        <div className="bg-gradient-to-b from-blue-600 to-blue-800 rounded-lg p-6 min-w-[100px]">
          <div className="text-3xl font-bold text-white">{timeLeft.days}</div>
          <div className="text-sm text-blue-200">DAYS</div>
        </div>
        <div className="bg-gradient-to-b from-blue-600 to-blue-800 rounded-lg p-6 min-w-[100px]">
          <div className="text-3xl font-bold text-white">{timeLeft.hours}</div>
          <div className="text-sm text-blue-200">HOURS</div>
        </div>
        <div className="bg-gradient-to-b from-blue-600 to-blue-800 rounded-lg p-6 min-w-[100px]">
          <div className="text-3xl font-bold text-white">{timeLeft.minutes}</div>
          <div className="text-sm text-blue-200">MINUTES</div>
        </div>
        <div className="bg-gradient-to-b from-blue-600 to-blue-800 rounded-lg p-6 min-w-[100px]">
          <div className="text-3xl font-bold text-white">{timeLeft.seconds}</div>
          <div className="text-sm text-blue-200">SECONDS</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;