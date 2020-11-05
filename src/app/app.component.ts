import { Component } from '@angular/core';

import isPrimeNumber from 'prime-number';
import primeNumberList from 'prime-number/list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webWorkers';

  constructor() {
    this.runWorker();
  }

  // Launch the worker
  runWorker() {
    if (typeof Worker !== 'undefined') {
      const worker = new Worker('./app.worker', {
        type: 'module'
      });
      worker.onmessage = ({ data }) => {
        console.log('Web Worker:', data);
      };
      worker.postMessage({});
    }
    else {

    }
  }

  // Launch on the main thread
  launchMainThread() {
    const arePrimeList = primeNumberList.map((prime) => {
      return isPrimeNumber(prime);
    });
  }
}