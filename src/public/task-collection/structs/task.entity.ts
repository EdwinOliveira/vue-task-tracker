export class TaskEntity {
  public constructor(
    private readonly _uuid: string,
    private readonly _alias: string,
    private readonly _description: string,
    private _completed: boolean
  ) {}

  public get uuid(): string {
    return this._uuid;
  }

  public get alias(): string {
    return this._alias;
  }

  public get description(): string {
    return this._description;
  }

  public get completed(): boolean {
    return this._completed;
  }

  public set completed(value: boolean) {
    this._completed = value;
  }
}
