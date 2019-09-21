import { Component, OnInit } from '@angular/core';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-decision',
  templateUrl: './decision.component.html',
  styleUrls: ['./decision.component.sass']
})
export class DecisionComponent implements OnInit {

  constructor(private story: StoryService) { }

  ngOnInit() {
  }

}
