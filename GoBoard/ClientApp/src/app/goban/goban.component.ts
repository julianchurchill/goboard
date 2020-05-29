import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

import { StoneModel } from '../models/stone.model';
import { GobanStoreService } from '../services/goban-store/goban-store.service';

@Component({
    selector: 'app-goban-component',
    templateUrl: './goban.component.html',
    styleUrls: ['./goban.component.css']
})
export class GobanComponent implements AfterViewInit {
    @ViewChild('canvas', { static: false })
    public canvas: ElementRef;

    private cx: CanvasRenderingContext2D;
    private width = 500;    // TODO: Derive this from the div size
    private height = 500;   // TODO: Derive this from the div size

    constructor(
       private gobanStore: GobanStoreService
    ) {
    }

    public ngAfterViewInit(): void {
      const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
      this.cx = canvasEl.getContext('2d');
  
      canvasEl.width = this.width;
      canvasEl.height = this.height;
  
      this.cx.lineWidth = 3;
      this.cx.lineCap = 'round';
      this.cx.strokeStyle = '#000';
  
      this.drawStones(canvasEl);
    }

    private drawStones(canvasEl: HTMLCanvasElement): void {
        this.gobanStore.stones$.subscribe(stones => {
            stones.forEach(stone => {
                this.drawStone(stone);
            });
        });
    }

    private drawStone(stone: StoneModel): void {
        if (!this.cx) { return; }

        this.cx.beginPath();
    
        const canvasX = this.findCanvasX(stone.x);
        const canvasY = this.findCanvasY(stone.y);
        this.cx.moveTo(canvasX, canvasY);
        this.cx.lineTo(canvasX + 3, canvasY + 3);
        this.cx.stroke();
    }
    
    private findCanvasX(boardX: number): number {
        // TODO
        return boardX;
    }
    
    private findCanvasY(boardY: number): number {
        // TODO
        return boardY;
    }

    public onClick(event: MouseEvent): void {
        const x = this.findBoardX(event.offsetX);
        const y = this.findBoardY(event.offsetY);
        this.gobanStore.addStone(new StoneModel(x, y));
    }

    private findBoardX(canvasX: number): number {
        // TODO
        return canvasX;
    }
    
    private findBoardY(canvasY: number): number {
        // TODO
        return canvasY;
    }
}