import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

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

  constructor (private rout:Router) {}


  ngOnInit(): void{
  }

  login(){

    console.log(this.uname,this.psw);

    this.rout.navigateByUrl("home")

  }
}
