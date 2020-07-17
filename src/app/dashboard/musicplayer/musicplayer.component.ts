import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-musicplayer',
  templateUrl: './musicplayer.component.html',
  styleUrls: ['./musicplayer.component.scss']
})
export class MusicplayerComponent implements OnInit {

  statusPlay: boolean = true;
  audio = new Audio();


  ngOnInit() {
    this.audio.src = "https://firebasestorage.googleapis.com/v0/b/music-band-8f1d7.appspot.com/o/music.mp3?alt=media&token=d293fb61-8fef-44ec-a51e-0ec6b84581eb";
    this.audio.load();
  }

  play(){
    this.statusPlay = false;
    this.audio.play();
  }

  pause(){
    this.statusPlay = true;
    console.log("pausa");
  }

}
 