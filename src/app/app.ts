import { Component, inject, signal } from '@angular/core';
import { PocNav } from './poc-nav/poc-nav';
import { CommonService } from './services/common.service';

@Component({
  imports: [PocNav],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('all-poc-implemented');
  private commonService = inject(CommonService);
  constructor(){
    console.log(this.commonService.theme())
  }
  changeTheme(theme:string){
    this.commonService.setTheme(theme === 'light' ? 'dark' : 'light')
  }
}
