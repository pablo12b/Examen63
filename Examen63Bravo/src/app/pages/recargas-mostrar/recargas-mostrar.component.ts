import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Recarga } from 'src/app/domain/recarga';
import { RecargaService } from 'src/app/services/recarga.service';

@Component({
  selector: 'app-recargas-mostrar',
  templateUrl: './recargas-mostrar.component.html',
  styleUrls: ['./recargas-mostrar.component.css']
})
export class RecargasMostrarComponent implements OnInit{
  recargas$!: Observable<Recarga[]>;

constructor(private recargaService: RecargaService) { }

ngOnInit(): void {
  this.recargas$ = this.recargaService.getRecargas();
}

}
