import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  nameToFind: string;
  constructor(private router: Router) {
    this.nameToFind = '';
  }

  ngOnInit(): void {}

  handleClick(): void {
    this.router.navigate(['/nameslist'], {
      queryParams: { name: this.nameToFind },
    });
  }
}
