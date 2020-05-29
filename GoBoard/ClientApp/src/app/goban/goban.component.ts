import { Component } from '@angular/core';
import { Subject } from 'rxjs';

class Stone {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

@Component({
  selector: 'app-goban-component',
  templateUrl: './goban.component.html',
  styleUrls: ['./goban.component.css']
})
export class GobanComponent {
  private stones: Stone[] = [];
  private $stones = new Subject<Stone[]>();
  public stones$ = this.$stones.asObservable();

  public onClick(event: MouseEvent) {
    const x = event.offsetX;
    const y = event.offsetY;
    console.log(`Clicked at ${x}, ${y}`);
    this.stones = [...this.stones, new Stone(x, y)];
    this.$stones.next(this.stones);
  }
}
