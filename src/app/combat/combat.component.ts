import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.scss']
})
export class CombatComponent implements OnInit {

  constructor(private playerService: PlayerService,
    private storyService: StoryService) { }

  ngOnInit() {
  }

  attack() {
    if (Math.random() > 0.5) {
      this.storyService.setStage("School");
    }
    //if (!this.storyService.stage.Variables.Enemy) {
    //  console.warn("Enemy was not defined on stage");
    //}
    //this.playerService.Attack(this.storyService.stage.Variables.Enemy);
  }
}
