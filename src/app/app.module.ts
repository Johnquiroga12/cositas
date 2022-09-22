import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HeaderComponent } from "./header/header.component";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MenuComponent } from './menu/menu.component';
import { AsigcoorComponent } from './asigcoor/asigcoor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import { MatSliderModule } from "@angular/material/slider";
import { MatButtonModule } from "@angular/material/button";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDialogModule } from "@angular/material/dialog";
import {MatTabsModule} from '@angular/material/tabs';
import { RouterModule, Routes } from '@angular/router';
import { CrudempresaComponent } from './crudempresa/crudempresa.component';
import { ListaempresaComponent } from './crudempresa/listaempresa.component';
import { Anexo2Component } from './anexo2/anexo2.component';
import { HttpClientModule } from "@angular/common/http";
import { EmpresaService } from "./anexo2/empresa.service";
const routes: Routes=[
    {path:'asignarcoor', component: AsigcoorComponent},
    {path:'crudempresa', component: CrudempresaComponent},
    {path:'listaempresa', component: ListaempresaComponent},
    {path:'anexo2', component: Anexo2Component}

];

@NgModule({
    declarations:[
        HeaderComponent,
        AppComponent,
        MenuComponent,
        AsigcoorComponent,
        CrudempresaComponent,
        ListaempresaComponent,
        Anexo2Component
    ],
    imports:[
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatStepperModule,
        MatSelectModule,
        
        MatSliderModule,
        MatButtonModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonToggleModule,
        MatTooltipModule,
        MatSidenavModule,
        MatCheckboxModule,
        MatIconModule,
        MatDialogModule,
        MatTabsModule,
        HttpClientModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        MatSliderModule,
        MatButtonModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonToggleModule,
        MatTooltipModule,
        MatSidenavModule,
        MatCheckboxModule,
        MatIconModule,
        MatDialogModule,
        MatStepperModule,
        MatTabsModule
      ],
      providers:[EmpresaService],
    bootstrap:[AppComponent]

})

export class AppModule { }