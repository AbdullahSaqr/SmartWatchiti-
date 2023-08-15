class Stopwatch {
    constructor() {
      this.startTime = null;
      this.endTime = null;
      this.running = false;
      this.duration = 0;
    }
  
    start() {
      if (this.running) {
        console.log("Stopwatch already started");
        return;
      }
  
      this.startTime = new Date();
      this.running = true;
      console.log("Stopwatch started");
    }
  
    stop() {
      if (!this.running) {
        console.log("Stopwatch hasn't started yet");
        return;
      }
  
      this.endTime = new Date();
      this.running = false;
      this.calculateDuration();
      console.log("Stopwatch stopped");
    }
  
    reset() {
      this.startTime = null;
      this.endTime = null;
      this.running = false;
      this.duration = 0;
      console.log("Stopwatch reset");
    }
  
    calculateDuration() {
      this.duration = this.endTime - this.startTime;
    }
  
    updateDurationDisplay() {
      const durationSpan = document.getElementById('durationSpan');
      durationSpan.textContent = this.duration + ' ';
    }
  }
  
  const stopwatch = new Stopwatch();
  
  document.getElementById('startButton').addEventListener('click', () => {
    stopwatch.start();
  });
  
  document.getElementById('stopButton').addEventListener('click', () => {
    stopwatch.stop();
    stopwatch.updateDurationDisplay();
  });
  
  document.getElementById('resetButton').addEventListener('click', () => {
    stopwatch.reset();
    stopwatch.updateDurationDisplay();
  });