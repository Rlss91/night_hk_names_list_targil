import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn: boolean;
  loggedInSubject: Subject<boolean>;
  constructor() {
    this.loggedIn = false;
    this.loggedInSubject = new Subject<boolean>();
  }

  isAuthenticated(): boolean {
    this.loggedInSubject.next(this.loggedIn);
    return this.loggedIn;
  }

  login(): void {
    this.loggedIn = true;
    this.isAuthenticated();
  }

  logout(): void {
    this.loggedIn = false;
    this.isAuthenticated();
  }
}
