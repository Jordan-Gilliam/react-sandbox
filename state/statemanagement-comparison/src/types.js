import * as React from "react";

export interface IEntity {
  id: number;
}

export interface ITodo extends IEntity {
  title: string;
  finished: boolean;
}

export class Todo implements ITodo {
  id = Math.random();
  title;
  finished;
  __typename = "TODO"; // needed for ApolloLinkState
  constructor(title, finished = false) {
    this.title = title;
    this.finished = finished;
  }
}
