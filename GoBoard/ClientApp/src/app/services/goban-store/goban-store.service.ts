import { StoneModel } from 'src/app/models/stone.model';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class GobanStoreService {
    private $stones = new BehaviorSubject<StoneModel[]>([]);
    public stones$ = this.$stones.asObservable();
    
    public addStone(stone: StoneModel) {
        console.log(`Adding stone at ${stone.x}, ${stone.y}`);
        this.$stones.next(
            [...this.$stones.getValue(), stone]
        );
    }
}
