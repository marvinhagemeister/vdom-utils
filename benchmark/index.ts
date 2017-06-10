import * as Benchmark from "benchmark";
import * as chalk from "chalk";
import { escapeAttr, escapeTag, padStart } from "../src/index";

/* tslint:disable no-console */
const logWinner = (suite: any) =>
  console.log(
    "Fastest is " + chalk.green(suite.filter("fastest").map("name")) + "\n",
  );
const logCycle = (event: any) => console.log(String(event.target));

function escape(): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    new Benchmark.Suite()
      .add("escapeAttr", () => escapeAttr("a123<7&2\"'>"))
      .add("escapeTag", () => escapeTag("a123<7&2\"'>"))
      .on("cycle", (event: any) => logCycle(event))
      .on("complete", function(this: any) {
        logWinner(this);
        resolve();
      })
      .run({ async: true });
  });
}

async function pad(): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    new Benchmark.Suite()
      .add("padStart", () => padStart("foo", 16))
      .add("padStart", () => padStart("foo", 80))
      .on("cycle", (event: any) => logCycle(event))
      .on("complete", function(this: any) {
        logWinner(this);
        resolve();
      })
      .run({ async: true });
  });
}

escape().then(() => pad());
