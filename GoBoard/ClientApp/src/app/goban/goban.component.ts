import { Component } from '@angular/core';
import { StoneModel } from '../models/stone.model';
import { GobanStoreService } from '../services/goban-store/goban-store.service';

@Component({
    selector: 'app-goban-component',
    templateUrl: './goban.component.html',
    styleUrls: ['./goban.component.css']
})
export class GobanComponent {
    constructor(
       private gobanStore: GobanStoreService
    ) {
    }
    
    public onClick(event: MouseEvent) {
        const x = this.findBoardX(event.offsetX);
        const y = this.findBoardY(event.offsetY);
        this.gobanStore.addStone(new StoneModel(x, y));
    }
    
    private findBoardX(screenX: number): number {
        // TODO
        return screenX;
    }
    
    private findBoardY(screenY: number): number {
        // TODO
        return screenY;
    }
}