import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-medal',
  standalone: true,
  imports: [],
  templateUrl: './medal.component.html',
  styleUrl: './medal.component.css'
})
export class MedalComponent 
{  
  @Input({required:true}) imageMURL = "";
  @Output() clickMedal = new EventEmitter<number>();
  anteriorMedal()
  {
    this.clickMedal.emit(-1);
  }

  siguienteMedal()
  {
    this.clickMedal.emit(1);
  }

}
