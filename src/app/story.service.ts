import { Injectable } from '@angular/core';
import { StoryStage, StoryStageType } from './StoryStage';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  Story: StoryStage = {
    ImageUrl: null,
    Title: "Welcome to RAID AREA 51",
    Type: StoryStageType.Start,
    Variables: {
      Dialogue: "The man, the myth, the meme:  Area 51 is truly legendary.  Home to untold aliens, the government has been hiding our green, big-headed friends for years.  Now, however, you're faced with an opportunity:  to RAID AREA 51"
    },
    Options: {
       //None yet
    }
  }
  constructor() { }
}
