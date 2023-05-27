import { useEffect, useState } from "react";

interface TimeDigitProp {
  string: string;
}

const TimeDigit = ({ string }: TimeDigitProp) => (
  <div className="px-2 py-[10px] bg-primary mr-[2px] text-white font-semibold text-xl rounded w-8 inline-block text-center">
    {string}
  </div>
);

const Timer = () => {
  const [minutes, setMinutes] = useState<string>("01");
  const [seconds, setSeconds] = useState<string>("59");

  useEffect(() => {
    if (Number(minutes) + Number(seconds) !== 0)
      setTimeout(() => {
        setSeconds(String(Number(seconds) - 1).padStart(2, "0"));
      }, 1000);
    if (seconds === "00" && minutes !== "00")
      setMinutes(String(Number(minutes) - 1).padStart(2, "0"));
    if (seconds === "00" && minutes !== "00") setSeconds("59");
  }, [minutes, seconds]);

  return (
    <div>
      <span className="text-primary text-xl font-semibold mr-[2px] ml-[2px]">
        <TimeDigit string={minutes[0]} />
        <TimeDigit string={minutes[1]} />:
      </span>
      <TimeDigit string={seconds[0]} />
      <TimeDigit string={seconds[1]} />
    </div>
  );
};

export default Timer;
