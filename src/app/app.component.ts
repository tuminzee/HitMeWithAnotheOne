import { Component } from '@angular/core';
import { JokeApiService } from './joke-api.service';
import { Howl } from 'howler';
import { Joke } from './joke';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HitMeWithAnotherOne';
  sound:any;
  joke!: Joke;


  constructor(private jokeApiService: JokeApiService){

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
    window.open("https://github.com/tuminzee/HitMeWithAnotheOne");
  }

  onToggleTheme(e: any){
    if(e.checked){
      document.body.setAttribute('color-theme', 'dark');
    }
    else{
      document.body.removeAttribute('color-theme');
    }

  }

}
