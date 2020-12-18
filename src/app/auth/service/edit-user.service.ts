import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EditUserDTO} from '../model/editUserDTO';

@Injectable({
  providedIn: 'root'
})
export class EditUserService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public getLoggedUserData(): Observable<EditUserDTO> {
    return this.http.get<EditUserDTO>(`${this.apiUrl}edit-user`);
  }
}
