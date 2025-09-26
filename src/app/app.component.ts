// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs';
// import { CounterState } from './store/counter/counter.reducer';

// import { increment, decrement, reset } from './store/counter/counter.action';
// import { CommonModule } from '@angular/common';

// import { MatInputModule } from '@angular/material/input';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatButtonModule } from '@angular/material/button';
// import { FormsModule } from '@angular/forms';
// import { TodoState } from './store/todo/todo.reducer';
// import { addTodo } from './store/todo/todo.action';

// @Component({
//   selector: 'app-root',
//   imports: [
//     RouterOutlet,
//     CommonModule,
//     MatFormFieldModule,
//     MatInputModule,
//     MatButtonModule,
//     FormsModule,
//   ],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css',
// })
// export class AppComponent {
//   title = 'angular-cli';
//   count: Observable<number>;
//   todo: string = '';
//   todos: string[] = [];

//   constructor(
//     private store: Store<{ counter: CounterState; todo: TodoState }>
//   ) {
//     this.count = this.store.select((state) => state.counter.count);
//     this.todos = this.store.select(
//       (state) => state.todo.todos
//     ) as unknown as string[];

//   }

//   onIncrement() {
//     this.store.dispatch(increment());
//   }

//   onAddTodo = () => {
//     console.log('thiscount: ', this.count);
//     this.store.dispatch(addTodo({ todo: this.todo }));
//   };
// }

// app.component.ts
import { Component, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs'; 
import { CounterState } from './store/counter/counter.reducer';
import { increment, decrement, reset } from './store/counter/counter.action';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { TodoState } from './store/todo/todo.reducer';
import { addTodo } from './store/todo/todo.action';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [
    RouterOutlet,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    DashboardComponent,
    LeftMenuComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnDestroy {
  title = 'angular-cli';
  count: Observable<number>;
  currentCountValue: number = 0; 
  private countSubscription: Subscription; 
  private todoSubscription: Subscription;
  todo: string = '';
  count$: Observable<number>;
  todos$: Observable<string[]>;
  todos: string[] = [];
  constructor(
    private store: Store<{ counter: CounterState; todo: TodoState }>
  ) {
    this.count$ = this.store.select((state) => state.counter.count);
    this.count = this.store.select((state) => state.counter.count);
    this.todos$ = this.store.select((state) => state.todo.todos);
    this.countSubscription = this.count.subscribe(
      (value: number) => (this.currentCountValue = value)
    );
    this.todoSubscription = this.todos$.subscribe(
      (value: any) => (this.todos = value)
    );
  }

  ngOnInit(): void {
    this.count.subscribe((currentCount) => {
      console.log('Current Count: ', currentCount);
    });
    this.todos$.subscribe((currentTodos) => {
      console.log('Current Count: ', currentTodos);
    });
  }

  ngOnDestroy() {
    this.countSubscription.unsubscribe();
    this.todoSubscription.unsubscribe();
  }

  onIncrement() {
    this.store.dispatch(increment());
  }

  onAddTodo = () => {
    this.store.dispatch(addTodo({ todo: this.todo }));
  };
}
