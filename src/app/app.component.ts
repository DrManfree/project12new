import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project12new';
  cardElements: any = [];

  onCardAdded(cardData: {title: string, content: string, id: number, createdate: Date}) {
    this.cardElements.push({
      title: cardData.title,
      content: cardData.content,
      id: cardData.id,
      createdate: cardData.createdate
    });
  }
}
