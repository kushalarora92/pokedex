import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'util-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent implements OnInit {
  @Input() isVisible: boolean;
  @Input() title: String = 'Modal Header';
  @Output() onModalCloseClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onModalCloseButtonClick() {
    this.onModalCloseClick.emit();
  }
}
