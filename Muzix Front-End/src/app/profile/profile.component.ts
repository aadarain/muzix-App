import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { updateuser } from '../updateUser';
import { SongService } from '../services/song.service';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  UpdateUser: updateuser = new updateuser();

  constructor( private songservice:SongService,private sharedservice:SharedService) { }

  ngOnInit(): void {
    
  }
  updateform=new FormGroup({
    
    name:new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    pass:new FormControl('',[Validators.required,Validators.minLength(8)]),
    
    
  })

  get name(){
    return this.updateform.get('name');
  }


  get email(){
    return this.updateform.get('email');
  }

  get pass(){
    return this.updateform.get('pass');
  }
  
  update()
  {
    
      this.UpdateUser.email=this.email.value;
     
      
      console.log(this.UpdateUser.name);
      this.UpdateUser.password=this.pass.value;
      console.log(this.UpdateUser);

      this.songservice.updateUser(this.UpdateUser).subscribe(data => {
       
        console.log(data);
        // console.log(this.musics);
        // console.log(this.musics[0].artistName);
        // console.log(this.musics[0].albumName);
        this.sharedservice.setdialogtitle("Updated");
    this.sharedservice.setdialogcontent("Updated User Information");
  
    this.ngOnInit();
      })
      
    }


}
