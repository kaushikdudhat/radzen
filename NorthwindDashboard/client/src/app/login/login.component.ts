import { Component, Injector } from '@angular/core';
import { LoginGenerated } from './login-generated.component';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent extends LoginGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
