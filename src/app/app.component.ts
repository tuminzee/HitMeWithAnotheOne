import { Component } from '@angular/core';
import { JokeApiService } from './joke-api.service';
import { LoaderService } from './loader/loader.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChuckNorrisJokes';
  setup:string = '';
  punchline:string = '';


  constructor(private jokeApiService: JokeApiService, public loaderService: LoaderService){

  }

  ngOnInit(): void {
    this.jokeApiService.getJoke().subscribe((data) => {
      this.setup = data['setup'];
      this.punchline = data['punchline'];
    })
  }

  OnNext(){
    this.jokeApiService.getJoke().subscribe((data) => {
      this.setup = data['setup'];
      this.punchline = data['punchline'];
    })
  }

  OnFav(){
    window.open("https://github.com/tuminzee/HitMeWithAnotheOne")
  }

}
