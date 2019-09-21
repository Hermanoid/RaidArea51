export class StoryStage {
  ImageUrl: string;
  Title: string;
  Type: StoryStageType;
  Variables: { [id: string]: string };
  Options: { [Text: string]: string };
}

export class Story {
  Stages: { [storyStageId: string]: StoryStage }
}

export enum StoryStageType {
  Start, Dialogue, Combat
}
