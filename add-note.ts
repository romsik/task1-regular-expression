import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from 'ionic-native';
 //sdasd






//////////////////////////////////---


import {NotesData} from "../../providers/notes-data";

/*
  Generated class for the AddNote page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-note',
  templateUrl: 'add-note.html'
})
export class AddNote {
  public data:any;
  public colors:any=null;
  public notePicture: any;



  constructor(public navCtrl: NavController,public notesData:NotesData) {}

  ionViewDidLoad() {
    this.data={};
    this.data.title="";
    this.data.desc="";
    this.data.color="#FDFFFC";
    this.colors = ['#011627', '#F71735', '#41EAD4', '#FF9F1C'];
  }
  addNote() {
    this.notesData.createNote(this.data.title, this.data.desc,this.data.color,this.notePicture);
    //this.notesData.addPhoto(this.notePicture);

    this.navCtrl.pop();
  }
  itemTapped(event, item) {
   this.data.color=item;
    console.log(item);
  }
  takePicture(){
    Camera.getPicture({
      quality : 95,
      destinationType : Camera.DestinationType.DATA_URL,
      sourceType : Camera.PictureSourceType.CAMERA,
      allowEdit : true,
      encodingType: Camera.EncodingType.PNG,
      targetWidth: 500,
      targetHeight: 500,
      saveToPhotoAlbum: true
    }).then(imageData => {
      this.notePicture = imageData;
    }, error => {
      console.log("ERROR -> " + JSON.stringify(error));
    });
  }


}
