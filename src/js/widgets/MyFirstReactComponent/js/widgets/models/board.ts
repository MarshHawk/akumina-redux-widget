export interface IColumn {
  id: number,
  title: string,
  blockIds: number[],
  blockType: string
}

export class Column implements IColumn {
  id!: number;
  title!: string;
  blockIds!: number[];
  blockType!: string;
}