import { Options, Vue } from "vue-class-component";

@Options({
  name: "app-layout",
})
export default class LayoutComponent extends Vue {
  public constructor() {
    super({});
  }
}
