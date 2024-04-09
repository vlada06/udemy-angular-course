import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  data = {
    title: '<h1>Udemy Angular Course</h1><script>alert("simulated JS attack")</script>'
  }

  inIconClick() {
    alert("klikchy, orle");
  }

  onKeyUp(newTitle: string){
    alert("ene, strelica, sokole");
  }
  protected readonly onkeyup = onkeyup;
}
