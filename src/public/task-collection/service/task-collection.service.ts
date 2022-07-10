import { BehaviorSubject, Observable } from "rxjs";
import { TaskEntity } from "../structs/task.entity";
import * as uuid from "uuid";

export default class TaskCollectionService {
  private readonly _state: BehaviorSubject<Array<TaskEntity>>;
  private readonly _state$: Observable<Array<TaskEntity>>;

  public constructor() {
    this._state = new BehaviorSubject<Array<TaskEntity>>([
      new TaskEntity(uuid.v4(), "Clean Kitchen", "Clean Kitchen", false),
      new TaskEntity(uuid.v4(), "Clean WC", "Clean WC", true),
      new TaskEntity(uuid.v4(), "Clean Room", "Clean Room", false),
    ]);

    this._state$ = this._state.asObservable();
  }

  public get state$(): Observable<Array<TaskEntity>> {
    return this._state$;
  }

  public createTask(task: TaskEntity): void {
    const data = this._state.value;

    this._state.value.length = 0;
    this._state.next([...data, task]);
  }

  public updateTask(task: TaskEntity): void {
    this._state.value.map((data) => {
      if (data.uuid === task.uuid) {
        data.completed = task.completed;
      }

      return data;
    });
  }
}
