import { Component } from '@angular/core';
import { pocList } from '../../common/poc-list';
import { PocList } from '../../types/poc-list.type';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterLink,RouterOutlet],
  selector: 'app-poc-nav',
  styleUrl: './poc-nav.css',
  templateUrl: './poc-nav.html',
})
export class PocNav {
  private list:PocList[] = pocList;
}
