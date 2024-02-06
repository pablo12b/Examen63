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
    /*if (this.loginForm.valid) {
      const usuario = this.loginForm.value.usuario;
      const contras = this.loginForm.value.contras;
      // Realizar la llamada al servicio y suscribirse para manejar la respuesta
      this.clienteService.getVerificarClientes(usuario, contras).subscribe(
        response => {
          console.log('Inicio de sesión exitoso', response);
          this.router.navigate(['/paginas/inicio']); // Redirige al usuario a la página de inicio
        },
        error => {
          console.error('Error al iniciar sesión', error);
          // Manejar aquí el error, por ejemplo, mostrando un mensaje al usuario
        }
      );
    }*/
  }

}
