import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  position = 200;
  elements : number;
  title = 'R-P-S-L-S';
  scores = [0 , 0]; // store the scores. index 0 is you. index 1 is player 2.

  arrayInRange(n: number): any[] {
    return Array(n);
  }

  weapons = {
    0: 'scissors',
    1:'paper',
    2:'rock',
    3:'spock',
    4:'lizard',
    5:'wizard',
    6:'batman',
    7:'spider-man',
    8:'glock'
  }

  playerSelected = -1;
  enemySelected  = -1;
  loading= false; // we're going to show a loading spinner when waiting for the enemy pick.
  isResultShow = false;
  // theResult -  0 winner
  //              1 lose
  //              2 tie
  theResult = 0 

  radius = 250;
  circX = [];
  circY = [];
  setElements(elements: number): void {
    this.elements = elements;
    this.circX = [];
    this.circY = [];
    for (var i = 0; i<elements; i++) {
      this.circX.push(this.radius * Math.cos(Math.PI * 2 * i / elements - Math.PI / 2));
      this.circY.push(this.radius * Math.sin(Math.PI * 2 * i / elements - Math.PI / 2));
    }
    this.circX.push(1);
    this.circY.push(1);
  }

  pick( weapon: number): void {
    // return immediately when still loading. You don't want
    // the user to spam the button.
    if(this.loading) return;
    this.loading = true;
    this.playerSelected = weapon;
   
   //create a delay to simulate enemy's turn.
    setTimeout( () => {
      this.loading = false;
      // generate a number from 0 - number of elements 
      const randomNum =  Math.floor(Math.random() * this.elements ) ;
      this.enemySelected = randomNum;
      this.checkResult();
      this.isResultShow = true;
    },  Math.floor(Math.random()  * 500 ) +200);
  }
 
  reset(): void {
   this.scores = [0,0];
  }

  checkResult(): void {
    const playerPick = this.playerSelected;
    const enemyPick = this.enemySelected;

    console.log('player: ' + playerPick + " enemy: " + enemyPick);

    if( playerPick ==  enemyPick)
     {
     this.theResult = 2;
   }
     else if ( ( (playerPick - enemyPick + this.elements)% this.elements)% 2 == 0)    {
       // YOU WIN
       this.theResult = 0;
       this.scores[0] = this.scores[0]+1;
     }
     else{
       // YOU LOSE
       this.theResult = 1;
         this.scores[1] = this.scores[1]+1;
     }
  }


  constructor() {
    this.setElements(7);
  }


}
