import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EditUserDTO} from '../model/editUserDTO';
import {UpdateEmailRequestCommandDTO} from '../model/updateEmailRequestCommandDTO';

@Injectable({
  providedIn: 'root'
})
export class EditUserService {

  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {
  }

  public getLoggedUserData(): Observable<EditUserDTO> {
    return this.httpClient.get<EditUserDTO>(`${this.apiUrl}edit-user`);
  }

  public updateUserInsensitiveData(editUserDTO: EditUserDTO): Observable<any> {
    return this.httpClient
      .post<EditUserDTO>(`${this.apiUrl}edit-user/update-insensitive-data`,
        editUserDTO);
  }

  public updateUserEmail(command: UpdateEmailRequestCommandDTO): Observable<any> {
    return this.httpClient
      .post<any>(`${this.apiUrl}edit-user/update-email-request`, command);
  }
}
