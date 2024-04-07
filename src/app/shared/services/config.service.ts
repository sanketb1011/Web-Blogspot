import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

baseurl:string='http://localhost:5057/';

  constructor() { }

  getbaseurl() :string
  {
    return this.baseurl;
  }
}
