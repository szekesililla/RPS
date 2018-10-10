import { Component, OnInit, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
  //styleUrls: [getPath()]
})
export class MenubarComponent implements OnInit {

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }

  @HostBinding('style.--elements') elements = 3;
  //elements = 3;

  title = 'R-P-S-L-S';

  scores = [0 , 0]; // store the scores. index 0 is you. index 1 is player 2.

  arrayOne(n: number): any[] {
    return Array(n);
  }
  Object = Object;
  weapons2 = {
    0: 'scissors',
    1:'paper',
    2:'rock'
  }
  weapons = {
    'scissors': 0,
    'paper': 1,
    'rock': 2,
    'Spock': 3,
    'lizard': 4,
    'wizard': 5,
    'Batman': 6,
    'Spider-man': 7,
    'glock': 8
  }

  playerSelected = -1;
  enemySelected  = -1;
  loading= false; // we're going to show a loading spinner when waiting for the enemy pick.
  isResultShow = false;
  // theResult -  0 winner
  //              1 lose
  //              2 tie
  theResult = 0 

  setElements(elements: number): void {
    this.elements = elements;
    document.documentElement.style.setProperty(`var(--elements)`, this.elements + '');
    this.renderer.setStyle(this.elRef.nativeElement.querySelector('--elements'), ' item-coun', this.elements + "");
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


  ngOnInit() {
  }

}
