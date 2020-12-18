import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../shared/services/category.service';
import {Observable} from 'rxjs';
import {Category} from '../../shared/model/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories$: Observable<Category[]>;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categories$ = this.categoryService.getCategories();
  }

}
