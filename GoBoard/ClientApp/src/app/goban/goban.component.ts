import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';

import { StoneModel } from '../models/stone.model';
import { GobanStoreService } from '../services/goban-store/goban-store.service';
import { Subscription, Observable } from 'rxjs';

@Component({
    selector: 'app-goban-component',
    templateUrl: './goban.component.html',
    styleUrls: ['./goban.component.css']
})
export class GobanComponent implements AfterViewInit, OnDestroy {
    @ViewChild('canvas', { static: false })
    public canvas: ElementRef;
    @ViewChild('goStoneBlackSource', { static: false })
    public blackStoneImage: ElementRef;

    private readonly boardSizeInPixels = 500;    // TODO: Derive this from the div size
    private readonly boardSize = 19;
    private readonly boardStepSize = this.boardSizeInPixels / this.boardSize;

    private stonesSubscription: Subscription;

    public get stones$(): Observable<StoneModel[]> {
        return this.gobanStore.stones$;
    }

    constructor(
       private gobanStore: GobanStoreService
    ) {
    }

    public ngAfterViewInit(): void {
      const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;

      canvasEl.width = this.boardSizeInPixels;
      canvasEl.height = this.boardSizeInPixels;

      this.drawStones(canvasEl.getContext('2d'));
    }

    public ngOnDestroy(): void {
        if (this.stonesSubscription) {
            this.stonesSubscription.unsubscribe();
        }
    }

    private drawStones(cx: CanvasRenderingContext2D): void {
        this.stonesSubscription = this.gobanStore.stones$.subscribe(stones => {
            stones.forEach(stone => {
                this.drawStone(cx, stone);
            });
        });
    }

    private drawStone(cx: CanvasRenderingContext2D, stone: StoneModel): void {
        if (!cx) { return; }

        const canvasX = this.findCanvasX(stone.x);
        const canvasY = this.findCanvasY(stone.y);

        const blackStone: HTMLImageElement = this.blackStoneImage.nativeElement;
        cx.drawImage(blackStone, canvasX, canvasY, this.boardStepSize, this.boardStepSize);
    }

    private findCanvasX(boardX: number): number {
        return boardX * this.boardStepSize;
    }

    private findCanvasY(boardY: number): number {
        return boardY * this.boardStepSize;
    }

    public onClick(event: MouseEvent): void {
        const x = this.findBoardX(event.offsetX);
        const y = this.findBoardY(event.offsetY);
        this.gobanStore.addStone(new StoneModel(x, y));
    }

    private findBoardX(canvasX: number): number {
        return Math.floor(canvasX / this.boardStepSize);
    }

    private findBoardY(canvasY: number): number {
        return Math.floor(canvasY / this.boardStepSize);
    }
}
