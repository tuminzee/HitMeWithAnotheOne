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
  audioObj = new Audio();


  constructor(private jokeApiService: JokeApiService, public loaderService: LoaderService){

  }

  ngOnInit(): void {
    this.audioObj.src = '../assets/one.mp3'
    this.audioObj.load();
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
    this.audioObj.play();
  }

  OnFav(){
    window.open("https://github.com/tuminzee/HitMeWithAnotheOne")
  }

}
