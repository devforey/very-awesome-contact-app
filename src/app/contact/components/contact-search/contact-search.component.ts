import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-contact-search',
  templateUrl: './contact-search.component.html',
  styleUrls: [ './contact-search.component.scss' ]
})
export class ContactSearchComponent {
  @Input() public query: string = '';
  @Output() public queryChange: EventEmitter<string> = new EventEmitter();

  public handleChange(query: string) {
    this.queryChange.emit(query);
  }
}
