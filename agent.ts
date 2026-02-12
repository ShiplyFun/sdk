export class Agent {
  constructor(public name: string) {}

  run() {
    console.log(`Agent ${this.name} is running`);
  }
}
