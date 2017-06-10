import Benchmark from "minibench";
import { escapeAttr, escapeTag } from "../src/index";

async function bench1() {
  const bench = await new Benchmark()
    .add("escapeAttr", () => escapeAttr("a123<7&2\"'>"))
    .add("escapeTag", () => escapeTag("a123<7&2\"'>"))
    .run();

  bench.print(console.log);
}

bench1();
