import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DemoSerivce {
  hello(): string {
    return 'hello world';
  }
  hi(fullName: string): string {
    return 'hi ' + fullName;
  }
}
