import { Routes } from '@angular/router';
import { TechnologyComponent } from './technology/technology.component';
import { BooksComponent } from './books/books.component';


export const routes: Routes = [
    { path: "Technology", component: TechnologyComponent },
    { path: "Books", component: BooksComponent },
];
