import { Component } from '@angular/core';
import { MoviesService } from './movie.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ MoviesService ]
})
export class AppComponent {
  title = 'Hello!';
}
