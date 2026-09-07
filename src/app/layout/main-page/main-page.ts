import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { RouterOutlet } from "../../../../node_modules/@angular/router/types/_router_module-chunk";

@Component({
  imports: [Navbar],
  selector: 'app-main-page',
  styleUrl: './main-page.scss',
  templateUrl: './main-page.html',
})
export class MainPage {}
