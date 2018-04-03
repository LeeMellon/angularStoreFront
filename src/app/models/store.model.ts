export class Store{
  public inventory = new Map([]);
  constructor(public name: string, public locale: string, public estDate: string){}
}
