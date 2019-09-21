import { Component, OnInit } from '@angular/core';
import { StoryService } from '../story.service';
import { StoryStageType } from '../StoryStage';
import { tap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {
  storyStageType = StoryStageType;
  storyType: StoryStageType = StoryStageType.Decision;
  constructor(private storyService: StoryService,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.storyService.Stage$.subscribe(storyStage => {
      if (storyStage) this.storyType = storyStage.Type;
      console.log(storyStage);
    })
    this.route.paramMap.subscribe((params: ParamMap) => this.storyService.setStage(params.get("id")));
  }

}
