import { StoneModel } from 'src/app/models/stone.model';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { PointModel } from 'src/app/models/point.model';

@Injectable()
export class GobanStoreService {
    private $stones = new BehaviorSubject<StoneModel[]>([]);
    public stones$ = this.$stones.asObservable();

    public addStone(stone: StoneModel) {
        console.log(`Adding '${StoneModel.colourToString(stone.colour)}' stone at ${stone.x}, ${stone.y}`);
        this.$stones.next(
            [...this.$stones.getValue(), stone]
        );
    }

    public removeStone(point: PointModel) {
        console.log(`Clearing stone from point at ${point.x}, ${point.y}`);
        this.$stones.next(
            [...this.$stones.getValue().filter(stone => {
                return stone.x !== point.x || stone.y !== point.y;
            })]
        );
    }

    public hasStoneAtPoint(point: PointModel): boolean {
        const findResult = this.$stones.getValue().find(stone => {
            return stone.x === point.x && stone.y === point.y;
        });
        return findResult !== undefined;
    }
}
