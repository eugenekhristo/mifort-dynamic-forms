export class User {
  constructor(
    public name: string,
    public age: number
  ) {}
}

export const UserInterface = new Map();
UserInterface.set('name', 'string');
UserInterface.set('age', 'age');

export enum CONTROL_TYPES {'string' = 'string', 'age' = 'age'}
