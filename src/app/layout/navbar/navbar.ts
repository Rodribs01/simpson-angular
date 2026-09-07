import { Component, signal } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  imports: [RouterLink],
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
})
export class Navbar {
  routes = signal([
    {
      path: '/characters',
      label: 'Characters',
    },
    {
      path: '/episodes',
      label: 'Episodes',
    },
    {
      path: '/locations',
      label: 'Locations',
    },
  ]);
}
