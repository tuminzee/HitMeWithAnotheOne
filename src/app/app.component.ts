import { Component } from '@angular/core';
import { JokeApiService } from './joke-api.service';
import { LoaderService } from './loader/loader.service';
import { Howl } from 'howler';
// import { VanillaTiltSettings } from 'angular-tilt';
import { Joke } from './joke';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isChecked = true;
  title = 'HitMeWithAnotherOne';
  // setup:string = '';
  // punchline:string = '';
  sound:any;
  joke: Joke;

  // tiltSettings: VanillaTiltSettings = {
  //   axis: 'Y'
  // }


  constructor(private jokeApiService: JokeApiService, public loaderService: LoaderService){
    this.joke = {
      id:0,
      setup:'',
      type: '',
      punchline: ''
    };

  }

  ngOnInit(): void {
    this.sound = new Howl({
      src: ['../assets/one.mp3']
    });
    this.OnNext();
  }

  OnNext(){
    this.jokeApiService.getJoke().subscribe((data) => {
      this.joke = data;
    })
    this.sound.play();
  }

  OnFav(){
    window.open("https://github.com/tuminzee/HitMeWithAnotheOne")
  }

}
