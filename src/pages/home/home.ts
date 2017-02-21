import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {Lyric} from '../../app/models/lyric';
import {ShowlyricPage} from '../showlyric/showlyric';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage {
  //lyricpage = ShowlyricPage;
  lyrics: Lyric[];
  constructor(public navCtrl: NavController) {
    this.initializeLyrics();
  }

  initializeLyrics() {
    this.lyrics = Lyric.getLocalLyrics();
  }
  //when searching for lyrics
  searchLyrics(ev: any){
    this.initializeLyrics();//gell all lyrics
    let val = ev.target.value;// set val to the value of the searchbar
    if (val && val.trim() != '') {
      this.lyrics = this.lyrics.filter(lyric => {
        return lyric.title.toLowerCase().indexOf(val.toLowerCase()) > -1
        || lyric.author.toLowerCase().indexOf(val.toLowerCase()) > -1
        || lyric.description.toLowerCase().indexOf(val.toLowerCase()) > -1
      });
    }
  }

  //when selecting a lyric
  openPage(lyric:Lyric){
    //alert(lyric.title);
    this.navCtrl.push(ShowlyricPage,{lyric:lyric});
  }
  //favoriting a lyric
  favorite(lyric:Lyric){
    if(lyric.favorite==1){
      lyric.favorite=0;
    }else{
      lyric.favorite=1;
    }
  }

}
