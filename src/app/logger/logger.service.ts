import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }
  logSuccess(data: string) {
    console.log(data)
  }
}
