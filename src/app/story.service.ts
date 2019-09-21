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
