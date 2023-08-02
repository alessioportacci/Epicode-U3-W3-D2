import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  user =
  {
    name: "",
    surname: "",
    email: ""
  }


  ngOnInit(): void
  {
    throw new Error('Method not implemented.');
  }

  onSubmit(form:NgForm)
  {
    console.log(form.value)
    console.log(this.user)
  }

}
