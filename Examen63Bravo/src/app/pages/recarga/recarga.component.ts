import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-recarga',
  templateUrl: './recarga.component.html',
  styleUrls: ['./recarga.component.css']
})
export class RecargaComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private clienteService: ClienteService) { // Inyecta Router aquí
    this.loginForm = this.formBuilder.group({
      dni: ['', [Validators.required, Validators.minLength(10)]], 
      monto: [1, [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const dni = this.loginForm.value.dni;
      const monto = this.loginForm.value.monto;
      // Realizar la llamada al servicio y suscribirse para manejar la respuesta
      this.clienteService.gettransferenciaRecarga(dni, monto).subscribe(
        response => {
          console.log('Transferencia existosa', response);
          alert('Transferencia exitosa')
        },
        error => {
          console.error('Error en la transferencia', error);
          // Manejar aquí el error, por ejemplo, mostrando un mensaje al usuario
        }
      );
    }
  }

}
