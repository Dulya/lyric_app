export class Lyric {
    songid:number;
    author:string;
    title:string;
    description:string;
    lyric:string = "The most popular industrial group ever, and largely<br>responsible for bringing the music to a mass audience.";
    thumburl:string;
    mp3link:string;
    downloads:number;
    favorite:number = 0;
    constructor(songid:number,author:string,title:string,description:string,thumburl){
      this.songid = songid;
      this.author = author;
      this.title = title;
      this.description = description;
      this.thumburl = thumburl;
    }

    public static getLocalLyrics(){
      //get lyrics from phone storage
      let i = 1;
      let lyrics=[];
      let testData = [
        {artist:"Ranindu", title:"Ahankara Nagare", description:"Song written by abc"},
        {artist:"Kasun Kalhara", title:"Mal Mitak Thiyanna", description:"Song written by abc"},
        {artist:"H R Jothipala", title:"Adara Mal Pawane", description:"Song written by abc"},
        {artist:"Bathiya Jayakodi", title:"Mihithale", description:"Song written by abc"},
        {artist:"Dushyanth Weeraman", title:"Pata mal lowak", description:"Song written by abc"},
        {artist:"Iraj", title:"Gemak Deela", description:"Song written by abc"}
      ];
      for(i=0;i<6;i++){
        let templ = new Lyric(i,testData[i].artist,testData[i].title,testData[i].description,"assets/img/thumb-"+(i+1)+".jpg");
        //dummy favoriting
        if(i==0 || i==3 || i==4){
          templ.favorite=1;
        }
        lyrics.push(templ);
      }
      return lyrics;
    }
}
