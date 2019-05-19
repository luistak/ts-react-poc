export default class Todo {
  public text: string;
  public complete: boolean = false;

  constructor(text: string) {
    this.text = text;
  }

  public toggleComplete(): void {
    this.complete = !this.complete;
  }
}
