class Timer {
  timerId?: ReturnType<typeof setTimeout>;
  start: number;
  remaining: number;
  pause: () => void;
  resume: () => void;
  clear: () => void;

  constructor(callback: () => void, delay: number) {
    this.start = 0;

    this.remaining = delay;

    this.pause = () => {
      clearTimeout(this.timerId);
      this.remaining -= Date.now() - this.start;
    };

    this.resume = () => {
      this.start = Date.now();
      clearTimeout(this.timerId);
      this.timerId = setTimeout(callback, this.remaining);
    };

    this.clear = () => {
      clearTimeout(this.timerId);
    };

    this.resume();
  }
}

export default Timer;
