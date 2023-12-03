import {Component, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Output() addItemEvent = new EventEmitter<string>();

  addItem() {
    this.addItemEvent.emit('🐢');
  }

}
