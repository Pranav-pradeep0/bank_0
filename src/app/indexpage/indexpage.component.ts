import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indexpage',
  templateUrl: './indexpage.component.html',
  styleUrls: ['./indexpage.component.css']
})

export class IndexpageComponent implements OnInit {

  strintereg = "Your Perfect Banking Partner"

  placeholderData = "Enter User ID"

  uname:any
  pwd:any

  constructor () {}

  ngOnInit(): void{
  }

  login(a:any,b:any){
    this.uname=a.value
    this.pwd=b.value

    console.log(this.uname,this.pwd);
    

    // alert("Login Clicked")
  }

  // unameChange(event:any){
  //   console.log(event.target.value); //! target.value is the path where value lies
  // }

}
