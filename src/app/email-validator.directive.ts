import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS } from "@angular/forms";

const VALID_EMAIL = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
function validateEmail(c:FormControl) {
  const valid = VALID_EMAIL.test(c.value);
  return valid ? null : { validateEmail: { valid: false } };
}


@Directive({
  selector: '[trmValidateEmail][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useValue: validateEmail,
      multi: true
    }
  ]
})
export class EmailValidatorDirective {}
