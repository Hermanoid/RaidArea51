export class StoryStage {
  ImageUrl: string;
  Title: string;
  Type: StoryStageType;
  Variables: { [id: string]: string } = {};
  Options?: { id: string, text: string }[];
}

export class Story {
  Stages: { [storyStageId: string]: StoryStage }
}

export enum StoryStageType {
  Start,
  Decision,
  Combat,
  Store,
  Error
}
