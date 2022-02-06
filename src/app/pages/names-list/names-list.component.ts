import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-names-list',
  templateUrl: './names-list.component.html',
  styleUrls: ['./names-list.component.css'],
})
export class NamesListComponent implements OnInit {
  namesArr: string[];
  constructor(private route: ActivatedRoute) {
    this.namesArr = ['kenny', 'benny', 'lenny'];
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((data: Params) => {
      console.log(data);
      this.namesArr = this.namesArr.filter((item) => item == data['name']);
    });
  }
}
