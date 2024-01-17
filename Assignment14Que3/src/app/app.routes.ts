import { Routes } from '@angular/router';

import { TechnologyComponent } from './technology/technology.component';
import { BooksComponent } from './books/books.component';
import { WrongchoiceComponent } from './wrongchoice/wrongchoice.component';

export const routes: Routes = [

    { path: "Books", component: BooksComponent },
    { path: "", component: TechnologyComponent },
    { path: "**", component: WrongchoiceComponent }
];
