import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent  {

 heros: string[] = ["Ironman", "Spiderman", "Hulk", 'Thor'];
 heroDeleted: string = "";

 deleteHero(): void {
  this.heroDeleted = this.heros.pop();
    
 }
}
