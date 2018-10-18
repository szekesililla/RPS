import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ROCK PAPER SCISSOR ULTIMATE';

  arrayInRange(n: number): any[] {
    return Array(n);
  }

  weapons = {
    0: 'scissors',
    1: 'paper',
    2: 'rock',
    3: 'spock',
    4: 'lizard',
    5: 'wizard',
    6: 'catman',
    7: 'spider-man',
    8: 'cigar'
  }

  weaponIcons = {
    0: "fas fa-hand-scissors",
    1: "fas fa-hand-paper",
    2: "fas fa-hand-rock",
    3: "fas fa-hand-spock",
    4: "fas fa-hand-lizard",
    5: "fas fa-hat-wizard",
    6: "fas fa-cat",
    7: "fas fa-spider",
    8: "fas fa-joint"
  }

  playerSelected = -1;
  enemySelected = -1;
  loading = false;
  isResultShow = false;
  theResult = -1; // 0-win, 1-lose, 2-tie
  scores = [0, 0];

  elements: number;
  position = 200;
  radius = 250;
  circX = [];
  circY = [];
  setElements(elements: number): void {
    this.elements = elements;
    this.circX = [];
    this.circY = [];
    for (var i = 0; i < elements; i++) {
      this.circX.push(this.radius * Math.cos(Math.PI * 2 * i / elements - Math.PI / 2) + this.position);
      this.circY.push(this.radius * Math.sin(Math.PI * 2 * i / elements - Math.PI / 2) + this.position);
    }
  }

  pick(weapon: number): void {
    if (this.loading) return;
    this.loading = true;
    this.playerSelected = weapon;

    setTimeout(() => {
      this.loading = false;
      // generate a number from 0 to number of elements 
      const randomNum = Math.floor(Math.random() * this.elements);
      this.enemySelected = randomNum;
      this.checkResult();
      this.isResultShow = true;
    }, Math.floor(Math.random() * 500) + 200);
  }

  checkResult(): void {
    const playerPick = this.playerSelected;
    const enemyPick = this.enemySelected;

    if (playerPick == enemyPick) {
      this.theResult = 2;
    }
    else if (((playerPick - enemyPick + this.elements) % this.elements) % 2 == 0) {
      // YOU WIN
      this.theResult = 0;
      this.scores[0] = this.scores[0] + 1;
    }
    else {
      // YOU LOSE
      this.theResult = 1;
      this.scores[1] = this.scores[1] + 1;
    }
  }

  constructor() {
    this.setElements(9);
  }


}
