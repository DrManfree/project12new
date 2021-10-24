import { Component, Input } from '@angular/core';
import { CardModel } from './shared/models/card_model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project12new';
  cardElements : CardModel[] = [];
  onCardAdded(cardData: {title: string, content: string, createdate: Date}) {
    let temp : CardModel = new CardModel;
    temp.title = cardData.title;
    temp.content = cardData.content;
    temp.id = this.cardElements.length + 1;
    temp.createdate = cardData.createdate;
    this.cardElements.push(temp);
  }
  onCardDeleted(card_index : { id: number })
  {
    this.cardElements.splice(card_index.id - 1, 1);
    let num = 1;
    this.cardElements.forEach(element => {
      element.id = num;
      num++;
    });
  }
  onCardEdited(info : {id: number, content: string, editdate: Date})
  {
    this.cardElements[info.id - 1].content = info.content;
    this.cardElements[info.id - 1].createdate = info.editdate;
  }
}
