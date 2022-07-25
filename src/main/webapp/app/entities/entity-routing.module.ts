import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'publisher',
        data: { pageTitle: 'Publishers' },
        loadChildren: () => import('./publisher/publisher.module').then(m => m.PublisherModule),
      },
      {
        path: 'author',
        data: { pageTitle: 'Authors' },
        loadChildren: () => import('./author/author.module').then(m => m.AuthorModule),
      },
      {
        path: 'client',
        data: { pageTitle: 'Clients' },
        loadChildren: () => import('./client/client.module').then(m => m.ClientModule),
      },
      {
        path: 'book',
        data: { pageTitle: 'Books' },
        loadChildren: () => import('./book/book.module').then(m => m.BookModule),
      },
      {
        path: 'borrowed-book',
        data: { pageTitle: 'BorrowedBooks' },
        loadChildren: () => import('./borrowed-book/borrowed-book.module').then(m => m.BorrowedBookModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
