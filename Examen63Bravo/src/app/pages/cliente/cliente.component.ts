import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/domain/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  signUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private clienteService: ClienteService) {
    this.signUpForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(4)]], // Corregido
      dni: ['', [Validators.required, Validators.minLength(10)]], 
      saldo: [0, [Validators.required, Validators.min(0)]],
    });
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      const cliente: Cliente = this.signUpForm.value;
      this.clienteService.saveClientes(cliente).subscribe(
        response => {
          console.log('Registro exitoso', response);
          alert('Registro exitoso')
        },
        error => {
          console.error('Error al registrar el cliente', error);
          // Aquí puedes manejar errores, como mostrar un mensaje al usuario
        }
      );
    }
  }
}
