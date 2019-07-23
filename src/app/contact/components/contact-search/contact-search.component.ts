import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-search',
  templateUrl: './contact-search.component.html',
  styleUrls: [ './contact-search.component.scss' ]
})
export class ContactSearchComponent implements OnInit {
  @Output() public change: EventEmitter<string> = new EventEmitter();

  public queryFormControl: FormControl = new FormControl('');

  public ngOnInit() {
    this.queryFormControl.valueChanges.subscribe((value) => {
      this.change.emit(value);
    });
  }
}
