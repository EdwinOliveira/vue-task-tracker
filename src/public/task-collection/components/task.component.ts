import { Options, Vue } from "vue-class-component";
import { TaskEntity } from "../structs/task.entity";

@Options({
  name: "app-task",
  props: {
    task: TaskEntity,
  },
})
export default class TaskComponent extends Vue {
  public constructor() {
    super({});
  }

  public updateTask(task: TaskEntity): void {
    task.completed = !task.completed;

    this.$emit("updateTask", task);
  }
}
