import { delay } from "rxjs";
import { Options, Vue } from "vue-class-component";
import Task from "./components/task.vue";
import TaskCollectionService from "./service/task-collection.service";
import { TaskEntity } from "./structs/task.entity";
import * as uuid from "uuid";

@Options({
  name: "app-task-collection",
  components: {
    "app-task": Task,
  },
})
export default class TaskCollectionComponent extends Vue {
  public readonly service: TaskCollectionService;
  public tasks: Array<TaskEntity> = new Array<TaskEntity>();
  public isLoading: boolean;

  public taskAlias = "";

  public constructor() {
    super({});

    this.service = new TaskCollectionService();
    this.isLoading = true;
  }

  public created() {
    this.service.state$.pipe(delay(1000)).subscribe((data) => {
      this.tasks.push(...data);

      this.isLoading = false;
    });
  }

  public createTask(event: Event) {
    const task = new TaskEntity(uuid.v4(), this.taskAlias, "", false);

    this.service.createTask(task);

    event.preventDefault();
  }

  public updateTask(task: TaskEntity): void {
    this.service.updateTask(task);
  }
}
