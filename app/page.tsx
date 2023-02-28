"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [time, setTime] = useState(new Date());
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main
      className={`${
        isRunning ? "bg-red-400" : "bg-red-100"
      } flex items-center justify-center h-screen text-white transition-all duration-200`}
    >
      <div className="flex flex-col justify-center">
        <button className="h-32 mb-12" onClick={() => setIsRunning(!isRunning)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="128"
            height="128"
            viewBox="0 0 36 36"
          >
            <g fill="none" fillRule="evenodd">
              <rect
                width="36"
                height="36"
                fill={isRunning ? "#fee2e2" : "#ef4444"}
                rx="18"
              ></rect>
              <path
                fill="#FEFEFF"
                d="M13 11.994c0-1.101.773-1.553 1.745-.997l10.51 6.005c.964.55.972 1.439 0 1.994l-10.51 6.007c-.964.55-1.745.102-1.745-.997V11.994z"
              ></path>
            </g>
          </svg>
        </button>
        <div className="h-8">
          {isRunning ? (
            <p className="text-3xl text-bolder">{time.toLocaleTimeString()}</p>
          ) : null}
        </div>
      </div>
    </main>
  );
}
