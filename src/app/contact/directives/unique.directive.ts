import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appUnique]',
  providers: [ { provide: NG_VALIDATORS, useExisting: UniqueDirective, multi: true } ]
})
export class UniqueDirective implements Validator {
  @Input('appUnique') unique: string[];

  public validate(control: AbstractControl): { [key: string]: any } | null {
    if (!this.unique) {
      return null;
    }

    const value: string = control.value;

    if (this.unique.indexOf(value) === -1) {
      return null;
    }

    return {
      appUnique: { value }
    };
  }
}
