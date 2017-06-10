import * as Benchmark from "benchmark";
import { escapeAttr, escapeTag } from "../src/index";

/* tslint:disable no-console */

new Benchmark.Suite()
  .add("escapeAttr", () => escapeAttr("a123<7&2\"'>"))
  .add("escapeTag", () => escapeTag("a123<7&2\"'>"))
  .on("cycle", (event: any) => {
    console.log(String(event.target));
  })
  .on("complete", function() {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  .run({ async: true });
