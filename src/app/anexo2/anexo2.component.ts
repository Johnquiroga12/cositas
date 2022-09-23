import { Component, OnInit } from '@angular/core';
import { CheckboxRequiredValidator, FormBuilder, Validators } from '@angular/forms';
import { Empresa } from './empresa';
import { EmpresaService } from './empresa.service';





@Component({
  selector: 'app-anexo2',
  templateUrl: './anexo2.component.html',
  styleUrls: ['./anexo2.component.css']
})
export class Anexo2Component implements OnInit {

  empre: Empresa[] = [];

  estado:boolean = false;
  

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  public autoevaluacion:boolean=true;


  constructor(private _formBuilder: FormBuilder, private empresaservice: EmpresaService) {
    let btn = document.getElementsByName('btnsp');

    for(let i =0; i < this.empre.length; i++){
      console.log(this.empre[i]);
    }

    
   }

   buttonDisabled: boolean=false;
  ngOnInit(): void {
    this.buttonDisabled = true;
    
    this.buttonDisabled = true;
    console.log('john')
    this.empresaservice.getempre().subscribe(
      Empresa => this.empre = Empresa
    );
  }

  checkCheckBoxvalue(event:any){

    this.estado = event.target.checked;
    //alert(event.target.checked)
    console.log(event.target.checked)
    this.paso()
 }

 paso(){
  if(this.estado === true){
   // alert('Algo pasa '+this.estado)
    this.buttonDisabled = false;
  }else{
    this.buttonDisabled = true;
  }
  // if(this.estado === false){
  //   alert('Error usted no puede pasar de esta parte..')
  // }else{
    
  //   alert('Paso bien ')
  // }
}

  // open(){
  //   alert( " awsssddfddfddcfdcvbv  "+ this.autoevaluacion) 
  //   if(this.autoevaluacion == true){
  //   alert( " jojn  ") 


  //   }

  // }


}
