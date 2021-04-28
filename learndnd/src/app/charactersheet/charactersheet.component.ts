import { Component, OnInit } from '@angular/core';
import { AbilityScores } from './abilityscores';
import { CharacterDescription } from './characterdescription';

@Component({
  selector: 'app-charactersheet',
  templateUrl: './charactersheet.component.html',
  styleUrls: ['./charactersheet.component.scss'],
})
export class CharactersheetComponent implements OnInit {
  name = 'Love Silvergren';
  race = 'human';
  class = 'fighter';
  level = 1;
  characterdescription: CharacterDescription = {
    age: 28,
    eyecolor: 'blue',
    haircolor: 'black',
    hairstyle: 'short',
    height: 174,
    skincolor: 'skincolor',
    weight: 81,
    other: [],
  };

  abilityscores: AbilityScores = {
    strength: 15,
    dexterity: 10,
    constitution: 15,
    intelligence: 10,
    wisdom: 12,
    charisma: 9,
  };

  hitpoints = 8;

  constructor() {}

  ngOnInit(): void {}

  /**
   * return the modifier corresponding to the abilityscore, returns -6 on fail
   * @param abilityscore
   */
  modifier(abilityscore: number): number {
    switch (abilityscore) {
      case 0:
      case 1:
        return -5;
      case 2:
      case 3:
        return -4;
      case 4:
      case 5:
        return -3;
      case 6:
      case 7:
        return -2;
      case 8:
      case 9:
        return -1;
      case 10:
      case 11:
        return 0;
      case 12:
      case 13:
        return 1;
      case 14:
      case 15:
        return 2;
      case 16:
      case 17:
        return 3;
      case 18:
      case 19:
        return 4;
      case 20:
      case 21:
        return 5;
      default:
        return -6;
    }
  }
}
