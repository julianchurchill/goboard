import { Component } from '@angular/core';

@Component({
  selector: 'app-goban-component',
  templateUrl: './goban.component.html',
  styleUrls: ['./goban.component.css']
})
export class GobanComponent {
  onClick(event: MouseEvent) {
    const x = event.offsetX;
    const y = event.offsetY;
    console.log(`Clicked at ${x}, ${y}`);
  }
}
