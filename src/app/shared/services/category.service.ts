import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Category} from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {}

  public getCategories(): Observable<Category[]> {
    return of([{
      id: 1,
      name: 'Elektronika',
      iconName: 'computer'
    }]);
  }
}
