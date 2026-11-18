import { Component, signal } from '@angular/core';
import { PocNav } from './poc-nav/poc-nav';

@Component({
  imports: [PocNav],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('all-poc-implemented');
}
