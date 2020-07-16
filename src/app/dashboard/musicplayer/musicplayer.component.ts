import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-musicplayer',
  templateUrl: './musicplayer.component.html',
  styleUrls: ['./musicplayer.component.scss']
})
export class MusicplayerComponent implements OnInit {

  constructor() { }

  files: Array<any> = [
    { name: "First Song", artist: "Inder" },
    { name: "Second Song", artist: "You" }
  ];
  state;
  currentFile: any = {};

  ngOnInit() {
  }

  isFirstPlaying() {
    return false;
  }
  isLastPlaying() {
    return true;
  }

}
 