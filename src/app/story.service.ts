import { Injectable, OnInit } from '@angular/core';
import { StoryStage, StoryStageType, Story } from './StoryStage';
import { Observable, of, Subject } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StoryService implements OnInit {
  Story: Story = {
    Stages: {
      "Start": {
        ImageUrl: null,
        Title: "Welcome to RAID AREA 51",
        Type: StoryStageType.Start,
        Variables: {
          Dialogue: "The man, the myth, the meme:  Area 51 is truly legendary.  Home to untold aliens, the government has been hiding our green, big-headed friends for years.  Now, however, you're faced with an opportunity:  to RAID AREA 51"
        },
        Options: [{
          text: "Go to School",
          id: "School"
        },
        {
          text: "Raid Area 51!",
          id: "Travel"
        },
        {
          text: "Sleep In",
          id: "SleepIn"
        }
        ]
      },
      "School": {
        ImageUrl: null,
        Title: "You go to school",
        Type: StoryStageType.Decision,
        Variables: {
          Dialogue: "Wow, you're smart.  Yet Boring.  Game Over (for now...)"
        }
      },
      "Travel": {
        ImageUrl: null,
        Title: "Excellent Choice! But wait?",
        Type: StoryStageType.Decision,
        Variables: {
          Dialogue: "You want to go to Area 51?  But how will you get there?"
        },
        Options: [{
          text: "By Car!",
          id: "Drive"
        },
        {
          text: "By Plane!",
          id: "Fly"
        },
        {
          text: "By Foot!",
          id: "Walk"
        }]
      },
      "Drive": {
        ImageUrl: null,
        Title: "You're driving.  Do you take the scenic route?",
        Type: StoryStageType.Decision,
        Variables: {
          Dialogue: "You want to go to Area 51?  But how will you get there?"
        },
        Options: [{
          text: "Scenic Route",
          id: "Scenic"
        },
        {
          text: "Straight there",
          id: "DirectDrive"
        }]
      },
      "Scenic": {
        ImageUrl: null,
        Title: "THERE SHALL BE NO SIGHTSEEING ON THE WAY TO AREA 51!",
        Type: StoryStageType.Decision,
        Variables: {
          Dialogue: "You missed the raid.  Sorry!"
        }
      },
      "DirectDrive": {
        ImageUrl: null,
        Title: "You blew a tire!",
        Type: StoryStageType.Decision,
        Variables: {
          Dialogue: "Dang it!  You're gonna be late!  CHANGE IT"
        },
        Options: [{
          text: "Hit the Spare!",
          id: "Arrived"
        }]
      },
      "Fly": {
        ImageUrl: null,
        Title: "Classic Mistake",
        Type: StoryStageType.Decision,
        Variables: {
          Dialogue: "Everyone knows you can't fly to Area 51!  (You get arrested)"
        }
      },
      "Walk": {
        ImageUrl: null,
        Title: "Wait... This is a long way!",
        Type: StoryStageType.Decision,
        Variables: {
          Dialogue: "You run 20 yards then realize you need to conserve energy for the naruto run. What do you do?"
        },
        Options: [{
          text: "Go back home and try again!",
          id: "Travel"
        },
          {
            text: "Hitchhike",
            id: "DirectDrive"
          },
          {
            text: "Go to school instead...",
            id: "School"
          }]
      },
      "Arrived": { ///OGHSL:KFD
        ImageUrl: null,
        Title: "Excellent Choice! But wait?",
        Type: StoryStageType.Decision,
        Variables: {
          Dialogue: "You made it to Area 51! But you're way early - how do you pass your time?"
        },
        Options: [{
          text: "TEAR DOWN THEM GATES EARLY!",
          id: "EarlyGates"
        },
        {
          text: "Naruto run behind reporters",
          id: "NarutoReporters"
        },
        {
          text: "Reddit.",
          id: "Reddit"
        }]
      },
      "EarlyGates": {
        ImageUrl: null,
        Title: "You forgot the magic of the Naruto Run.",
        Type: StoryStageType.Decision,
        Variables: {
          Dialogue: "You're thoroughly incapable of the invasion without the powers of Naruto.  You're blasted by a tank."
        }
      },
      "NarutoReporters": {
        ImageUrl: null,
        Title: "NARUTO POWER!!!",
        Type: StoryStageType.Decision,
        Variables: {
          Dialogue: "You become total internet history.  You've made your country proud.  Now what?"
        },
        Options: [{
          text: "INVADE!",
          id: "StormArea51"
        }]
      },
      "Reddit": {
        ImageUrl: null,
        Title: "Hahahaha.",
        Type: StoryStageType.Decision,
        Variables: {
          Dialogue: "haha haha.  Haha?"
        },
        Options: [{
          text: "Haha!",
          id: "StormArea51"
        },
        {
          text: "ahaha...",
          id: "StormArea51"
        },
        {
          text: "HA!",
          id: "StormArea51"
          },
          {
            text: "What?  No!  I'm learning about politics!",
            id: "Politics"
          }]
      },
      "Politics": {
        ImageUrl: null,
        Title: "Boooo",
        Type: StoryStageType.Decision,
        Variables: {
          Dialogue: "Reddit is a terrible place to learn about politics.  "
        }
      },

      "StormArea51": {
        ImageUrl: null,
        Title: "IT'S TIME!",
        Type: StoryStageType.Combat,
        Variables: {
          Dialogue: "But the FBI Blocks your path!",
          Enemy: "FBIAgent",
          next: "continue"
        },
        Options: [{
          text: "Continue",
          id: "continue"
        }]
      },
      "SleepIn": {
        ImageUrl: null,
        Type: StoryStageType.Decision,
        Title: "You slept in and missed school. And the raid.",
        Variables: {}
      },
      "continue": {
        ImageUrl: null,
        Title: "You're at the gates...",
        Type: StoryStageType.Combat,
        Variables: {
          Dialogue: "But the alien dragon defenders impedes you! Fight!",
          Enemy: "Aliens",
          next: "win"
        },
        Options: [{
          text: "Continue",
          id: "win"
        }]
      },

      "win": {
        ImageUrl: null,
        Title: "You Win!",
        Type: StoryStageType.Decision,
        Variables: {
          Dialogue: "YOU WIN!"
        }
      },

    }
  }
  Stage$: Subject<StoryStage>;
  stage: StoryStage; //This version is for normal ng interpolation.  Hacky?  Yes.

  constructor(private route: ActivatedRoute) {
    this.Story.Stages.Error = {
      ImageUrl: null,
      Title: "Error!",
      Type: StoryStageType.Decision,
      Variables: {
        Dialogue: "There was an error, and the story could not be found. See console"
      }
    }
    this.Stage$ = new Subject<StoryStage>();
    this.Stage$.subscribe((stage) => this.stage = stage);
  }

  setStage(stage: string) {
    if (this.Story.Stages.hasOwnProperty(stage)) {

      this.Stage$.next(this.Story.Stages[stage]);
    } else {
      console.warn("Story Stage:  '" + stage + "' has not been created");
      this.Stage$.next(this.Story["Error"])
    }
  }

  ngOnInit() {

  }
}
