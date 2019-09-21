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
        ImageUrl: "https://fsmedia.imgix.net/25/19/2e/e6/7feb/409e/aca0/7c4d8344a94d/area-51-is-revealed-in-extraordinary-detail-on-google-maps.png?rect=107%2C37%2C1219%2C611&auto=format%2Ccompress&dpr=2&w=650",
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
          id: "StormArea51"
            }
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
      "StormArea51": {
        ImageUrl: null,
        Title: "You decide to join the raid",
        Type: StoryStageType.Combat,
        Variables: {
            Dialogue: "You gotta fight people to get there!",
            Enemy: "FBIAgent"
        }
      }
      "SleepIn": {
          ImageUrl: null,
          Title: "You slept in and missed school."
      }

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
