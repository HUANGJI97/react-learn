import { useState } from "react";
export default function Clock() {
  let runTimesFlag = 0;
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [runTimes, setRuntimes] = useState(0);

  setInterval(() => {
    runTimesFlag++;
    setTime(new Date().toLocaleTimeString());
  }, 1000);
  return (
    <div>
      当前时间：{time} <br />
      时钟运行次数: {runTimes} <br />
    </div>
  );
}
