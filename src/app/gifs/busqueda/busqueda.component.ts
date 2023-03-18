import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
})
export class BusquedaComponent {
  constructor(private gifsService: GifsService) {}

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
  buscar() {
    const { value } = this.txtBuscar.nativeElement;
    if (value.trim() === '') return;

    this.gifsService.buscarGifs(value);
    this.txtBuscar.nativeElement.value = '';
  }
}
