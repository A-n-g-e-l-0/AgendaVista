import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './Componentes/app-component/app.component';
import { ListarPersonasComponent } from './Componentes/listar-personas/listar-personas.component';
import { CrearPersonaComponent } from './Componentes/crear-persona/crear-persona.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [

    
    {path:'listar', component:ListarPersonasComponent},
    {path:'registrar', component:CrearPersonaComponent}


];

