import { Component, ViewEncapsulation } from '@angular/core';

/* Best way to utilize ViewEncapsulation.None is to import it in this module (root module),
and write global styles here. */

@Component({
  selector: 'saa-app',
  encapsulation: ViewEncapsulation.None,
  template: `
      <header>
          <h1>Styling Angular Applications</h1>
          <em>For Modern Angular Applications</em>
      </header>
      <div>
          <saa-app-nav></saa-app-nav>
      </div>
  `,
  styles: [`
    body {
        font-family: 'roboto'
    }
  `]
})

export class AppComponent {
}