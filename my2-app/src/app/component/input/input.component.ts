import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input() type: string = '';
  @Input() value: string = '';
  @Input() placeholder: string = '';
  @Input() src: string = '';
}
