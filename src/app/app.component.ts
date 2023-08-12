import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reactive form';
  frm: FormGroup;
  
  constructor(private formbuilder: FormBuilder) {
    this.frm = formbuilder.group({
      name: [""],
      surname: [""],
      eposta: [""],
      telefon: [""],
      DTarihi: [""]
    });
  }
  FormData:string;
  Sand(data: {
    name: string,
    surname: string,
    eposta: string,
    telefon: string,
    DTarihi: string
  }) {
    var datas=document.querySelector("#p");
    for (const key in data) {
     datas.innerHTML +=`
     <p class="mb-1"> ${data[key]} </p>
     `;
    }
   
  }
}
