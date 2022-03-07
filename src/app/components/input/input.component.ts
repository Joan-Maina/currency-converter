import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }

  constant: number = 1;

  money: any = {
    amount: 0
  };

  selectedCurrency: string = '';

  ngOnInit(): void {
  }
  foods = [
    { value: 'kenyan shillings' },
    { value: 'dollars' },
    { value: 'euros' },
    { value: 'pounds' },
    { value: 'japanese yen' },
    { value: 'jamaican dollar' }
  ]

  onChange(data: string) {
    if (data == 'kenyan shillings') {
      this.constant = 1;
    } else if (data == 'euros') {
      this.constant = 0.0081;
    } else if (data == 'pounds') {
      this.constant = 0.0067;
    } else if (data == 'japanese yen') {
      this.constant = 1.01;
    } else if (data == 'jamaican dollar') {
      this.constant = 1.37;
    }
    else {
      this.constant = 0.009
    }
  }

}
