import { Component } from '@angular/core';

@Component({
  selector: 'card-list',
  template: `

  <h1> Card List</h1>

      <card>
        <header #header><h1>Angular Event</h1></header>
        <main #main>
        <h3>Location:Pune</h3>
        <h3>Time:10am to 5pm</h3>
        </main>
        <footer #footer>Visit us at:www.events.com</footer>
    </card>

      <card>
      <header #header><h1>Corporate security Event</h1></header>
        <main #main>
        <h3>Location:Mumbai</h3>
        <h3>Time:10am to 5pm</h3>
        </main>
        <footer #footer>Visit us at:www.events.com</footer>
      </card>

     

  `,
})
export class CardListComponent {

}