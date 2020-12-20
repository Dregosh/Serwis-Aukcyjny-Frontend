import {AbstractControl} from '@angular/forms';

export function identEmailsValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const newEmail = control.get('newEmail');
  const confirmNewEmail = control.get('confirmNewEmail');
  if (newEmail.pristine || confirmNewEmail.pristine) {
    return null;
  }
  return newEmail && confirmNewEmail && newEmail.value !== confirmNewEmail.value ?
    {misMatch: true} : null;
}
