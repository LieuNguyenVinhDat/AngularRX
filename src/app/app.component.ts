import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { enterNumber, enterOperator } from './actions/caculator.action';
import { decrement, increment, reset } from './actions/counter.actions';
import * as CalculatorActions from '../app/actions/caculator.action';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularRX';
  count$!: Observable<number>;
  calcultor$!: Observable<string>;
  res='0'
  constructor(private store: Store<{ count: number, calcultor: string}>, ) {
    this.count$ = store.select('count');
    this.calcultor$ = store.select('calcultor');
    this.calcultor$.subscribe((e:any)=>{
      this.res = e.currentNum

    })
  }
  inputNumber(number:string){
    this.store.dispatch(CalculatorActions.enterNumber({number:number}))
  }
  inputOperator(operator:string){
    this.store.dispatch(CalculatorActions.enterOperator({operator:operator}))
  }
  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }


}
