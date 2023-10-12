import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {


  @Input() id: number;
  @Input() name: string;
  @Input() description: string;
  @Input() image: string;
  @Input() author: string;


  constructor() { }

  ngOnInit(): void {

  }

}
