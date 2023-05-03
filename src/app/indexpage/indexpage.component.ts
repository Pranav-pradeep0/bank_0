import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indexpage',
  templateUrl: './indexpage.component.html',
  styleUrls: ['./indexpage.component.css']
})

export class IndexpageComponent implements OnInit {

  strintereg = "Your Perfect Banking Partner"

  placeholderData = "Enter User ID"

  constructor () {}

  ngOnInit(): void{
  }

  login(){
    alert("Login Clicked")
  }

  unameChange(event:any){
    console.log(event.target.value); //! target.value is the pathnwhere value lies
  }
}
