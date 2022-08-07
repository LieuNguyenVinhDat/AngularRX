import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { enterNumber } from 'src/app/actions/caculator.action';

@Component({
  selector: 'app-button',
  templateUrl: './buton.component.html',
  styleUrls: ['./buton.component.scss']
})
export class ButonComponent implements OnInit {
  @Input() name = ''
  calcultor$!: Observable<string>;

  constructor(private store: Store<{ count: number, calcultor: string}>, ) {
    this.calcultor$ = store.select('calcultor');
  }

  ngOnInit(): void {
  }

  set(){
    // this.store.dispatch(enterNumber({number:this.name}))
   }

}
