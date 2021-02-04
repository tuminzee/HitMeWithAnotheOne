import { Component } from '@angular/core';
import { JokeApiService } from './joke-api.service';
import { LoaderService } from './loader/loader.service';
import { Howl } from 'howler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChuckNorrisJokes';
  setup:string = '';
  punchline:string = '';
  sound:any;


  constructor(private jokeApiService: JokeApiService, public loaderService: LoaderService){

  }

  ngOnInit(): void {
    this.sound = new Howl({
      src: ['../assets/one.mp3']
    });
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
    this.sound.play();
  }

  OnFav(){
    window.open("https://github.com/tuminzee/HitMeWithAnotheOne")
  }

}
