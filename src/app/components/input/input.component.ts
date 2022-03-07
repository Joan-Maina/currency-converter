import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }
  money: any = {
    amount: 0
  };
  ngOnInit(): void {
  }
  // foods = [
  //   { value: 'kenyan shillings' },
  //   { value: 'dollars' },
  //   // { value: 'euros' },
  //   // { value: 'pounds' },
  //   // { value: 'japanese yen' },
  //   // { value: 'jamaican dollar' }
  // ]



}
