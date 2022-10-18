import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input () photoCover: string = ''
  @Input () cardTitle: string = ''
  @Input () dateCard: string = 'April 10, 2022'
  
  constructor() { }

  ngOnInit(): void {
  }

}
