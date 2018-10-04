import { Injectable } from '@angular/core';
import { MyService } from '../my/my.service';

@Injectable({
  providedIn: 'root'
})
export class DependentService {
  constructor(private myService: MyService) {}

  getValue() {
    return this.myService.getValue();
  }
}
