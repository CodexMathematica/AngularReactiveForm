import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ranks =[
    {key: 'colonel', value: 'Colonel'},
    {key: 'capitain', value: 'Capitain'}
  ];
  
  characterForm: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.characterForm = this.formBuilder.group({
      name: formBuilder.control('', [
        Validators.required, // ? doc : https://angular.io/guide/form-validation
        Validators.minLength(3),
        Validators.maxLength(10),
        Validators.pattern('^[a-zA-Z]*$')
      ]),
      birthday: formBuilder.control(''), // Ajouter des validations
      rank: formBuilder.control(''),
      xp: formBuilder.control('0') // 0 sert de valeur pas défaut
    })
  }

  public onSubmit(){ 
    console.log(this.characterForm.value); // Utile pour débugger
   }

   public control(name:string){
     return this.characterForm.get(name);
   }

}
