import { Component } from "@angular/core";

@Component({
    selector: "app-counter",
    template: `
        <div class="container">
            <h1>{{title}}</h1>
            <h3>The base is: <strong>{{base}}</strong></h3>
            <span>{{number}}</span>
            <div>
                <button (click)="operation(1)" >+{{base}}</button>
                <button (click)="operation(2)">Reset</button>
                <button (click)="operation(3)">-{{base}}</button>
            </div>
        </div>
    `
})

export class CounterComponent {
    public title: string = 'Counter App';
    number: number = 0;
    base: number = 5;

    operation(option: number): void {
        switch(option){
        case 1: this.number += this.base;
        break;
        case 2: this.number = 0;
        break;
        case 3: this.number -= this.base;
        }
    }
}