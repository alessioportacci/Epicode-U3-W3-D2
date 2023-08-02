import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  formApp!: FormGroup;

  constructor(){}
  ngOnInit(): void {
    this.formApp = new FormGroup
    ({
      nome: new FormControl("", [Validators.required, Validators.minLength(3)]),
      cognome: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      cPassword: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      genere: new FormControl(),
      img: new FormControl(),
      bio: new FormControl(),
      username: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    })  }

  onSubmit()
  {
    console.log(this.formApp)
  }

}
