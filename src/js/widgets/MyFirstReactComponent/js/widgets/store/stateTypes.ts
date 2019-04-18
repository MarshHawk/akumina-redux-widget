interface IUserStory {
    id: number,
    is_blocked: boolean,
    is_closed: boolean,
    subject: string, //i.e. name
    owner: string,
    project: number,
    epic: number,
    points: number,
    status: number
  }
  
export class UserStory implements IUserStory {
    id!: number;
    is_blocked!: boolean;
    is_closed!: boolean;
    subject!: string; //i.e. name
    owner!: string;
    project!: number;
    epic!:number;
    points!: number;
    status!: number;
}

const story0: IUserStory = {
    id: 0,
    is_blocked: false,
    is_closed: false,
    subject: "Create kanban widget",
    owner: "Sean Glover",
    project: 0,
    epic: 0,
    points: 3,
    status: 1
}

const story1: IUserStory = {
    id: 1,
    is_blocked: false,
    is_closed: false,
    subject: "Kanban widget Microsoft Graph Api integration",
    owner: "Sean Glover",
    project: 0,
    epic: 0,
    points: 8,
    status: 0
}

const story2: IUserStory = {
    id: 2,
    is_blocked: false,
    is_closed: false,
    subject: "Bot Widget POC",
    owner: "Sean Glover",
    project: 1,
    epic: 0,
    points: 5,
    status: 0
}

const story3: IUserStory = {
    id: 3,
    is_blocked: false,
    is_closed: true,
    subject: "Whole foods dev training meeting",
    owner: "Sean Glover",
    project: 2,
    epic: 1,
    points: 1,
    status: 1
}

export let demoInitialUserStories = [story0, story1, story2, story3];