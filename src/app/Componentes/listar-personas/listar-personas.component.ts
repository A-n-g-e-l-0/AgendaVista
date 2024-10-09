import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiPersonaService } from '../../Services/api-persona.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-personas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-personas.component.html',
  styleUrl: './listar-personas.component.css'
})
export class ListarPersonasComponent {

  constructor(private router: Router, private apiService: ApiPersonaService) {}
  dataPersonas: any;


  ngOnInit(): void {
    this.fetchData();
  }

  
  goToPersonas() {
    this.router.navigate(['/listar']);
  }

  goToRegistro() {
    this.router.navigate(['/registrar']);
  }


  fetchData(): void {
    this.apiService.getData('listar') 
      .subscribe(response => {
        this.dataPersonas = response;
        console.log(this.dataPersonas);
      }, error => {
        console.error('Error fetching data:', error);
      });
  }


  editPersona(persona: any) {
    // Your logic to handle the editing of the selected persona
    console.log('Editing persona:', persona);
    // For example, you might open a modal or navigate to an edit form
  }

}
