import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoffeeBeanListComponent } from './components/coffee-bean-list/coffee-bean-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CoffeeBeanListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Coffee Bean Manager';
}
