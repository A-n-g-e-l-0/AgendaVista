import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiPersonaService } from '../../Services/api-persona.service';

@Component({
  selector: 'app-listar-personas',
  standalone: true,
  imports: [],
  templateUrl: './listar-personas.component.html',
  styleUrl: './listar-personas.component.css'
})
export class ListarPersonasComponent {

  constructor(private router: Router, private apiService: ApiPersonaService) {}
  data: any;


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
        this.data = response;
        console.log(this.data);
      }, error => {
        console.error('Error fetching data:', error);
      });
  }

}
