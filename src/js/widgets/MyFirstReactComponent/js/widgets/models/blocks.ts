export interface IUserStory {
    id: number,
    is_blocked: boolean,
    is_closed: boolean,
    subject: string, //i.e. name
    owner: string,
    project: number,
    epic: number,
    points: number
  }