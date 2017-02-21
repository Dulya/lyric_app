import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Lyric} from '../../app/models/lyric';
import {FileChooser, MediaPlugin} from 'ionic-native';

/*
  Generated class for the Showlyric page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-showlyric',
  templateUrl: 'showlyric.html'
})
export class ShowlyricPage {
  lyric:Lyric;
  nativepath: string;
  file;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lyric = navParams.get('lyric');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowlyricPage');
  }
  filechooser() {
    FileChooser.open()
  .then(uri => {
    (<any>window).FilePath.resolveNativePath(uri, (result) => {
      this.nativepath = result;
      this.audioplay();
    }, (err) => {
      alert(err);
    })

  })
  .catch(e => console.log(e));
  }

  audioplay() {
    var pathalone = this.nativepath.substring(8);
    this.file = new MediaPlugin(pathalone, (status) => {

    });

    this.file.play();
  }

}
