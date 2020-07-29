import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  private intervalId = 0;
  message = '';
  remainingTime: number;
  @Input() seconds = 11;

  constructor() { }

  ngOnInit(): void {
    this.remainingTime = this.seconds;
  }
  ngOnDestroy(): void {
  }


  start() {
    if (this.remainingTime <= 0) {
      this.remainingTime = this.seconds;
    }
    this.countDown();
    this.message = '';
  }

  stop() {
    clearInterval(this.intervalId);
    this.message = 'Tạm dừng ở ' + this.remainingTime + ' giây';
  }

  reset() {
    clearInterval(this.intervalId);
    this.message = '';
    this.remainingTime = this.seconds;
  }

  private countDown() {
    this.intervalId = setInterval(() => {
      this.remainingTime--;
      if (this.remainingTime === 0) {
        this.message = 'Hết giờ!!!';
        clearInterval(this.intervalId);
      }
    }, 1000);
  }
}
