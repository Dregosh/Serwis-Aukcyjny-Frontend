import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EditUserDTO} from '../model/editUserDTO';

@Injectable({
  providedIn: 'root'
})
export class EditUserService {

  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {
  }

  public getLoggedUserData(): Observable<EditUserDTO> {
    return this.httpClient.get<EditUserDTO>(`${this.apiUrl}auth/edit-user`);
  }

  public updateUserInsensitiveData(editUserDTO: EditUserDTO): Observable<any> {
    return this.httpClient
      .post<EditUserDTO>(`${this.apiUrl}auth/edit-user/update-insensitive-data`, editUserDTO);
  }

  public updateUserEmail(command: any): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}auth/edit-user/update-email-request`, command);
  }

  public changePasswordRequest(): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}auth/edit-user/change-password-request`, null);
  }

  public executePasswordChange(command: { newPassword: string; token: string }): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}auth/change-password-confirmation`, command);
  }
}
