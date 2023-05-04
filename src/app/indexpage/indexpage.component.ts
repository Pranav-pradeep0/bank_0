import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-indexpage',
  templateUrl: './indexpage.component.html',
  styleUrls: ['./indexpage.component.css']
})

export class IndexpageComponent implements OnInit {

  strintereg = "Your Perfect Banking Partner"

  placeholderData = "Enter User ID"

  uname:any
  psw:any

  constructor (private ds:DataService) {}


  ngOnInit(): void{
  }

  login(){

    alert(this.ds.sdata) //!       calling variable
    alert(this.ds.checkData()) //!    calling method
    //calling both //* alert(`${this.ds.checkData()} ${this.ds.sdata}`)


    console.log(this.uname,this.psw);
  }

}







  // unameChange(event:any){
  //   console.log(event.target.value); //! target.value is the path where value lies
  //   login(a:any,b:any){
  //   this.uname=a.value
  //   this.pwd=b.value

  //   console.log(this.uname,this.pwd);
    

  // alert("Login Clicked")
  // }


