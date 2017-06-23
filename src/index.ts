export * from "./dom";

const ESC: Record<string, string> = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&quot;",
  "&": "&amp;",
};

const escapeChar = (a: string) => ESC[a] || a;

export function escapeAttr(s: string): string {
  return s.replace(/[<>"'&]/g, escapeChar);
}

export function escapeTag(s: string): string {
  return s.replace(/[<>&]/g, escapeChar).replace(/["']/g, "");
}

export const padCache = [
  "",
  " ",
  "  ",
  "   ",
  "    ",
  "     ",
  "      ",
  "       ",
  "        ",
  "         ",
  "          ",
  "           ",
  "            ",
  "             ",
  "              ",
  "               ",
  "                ",
  "                 ",
  "                  ",
  "                   ",
  "                    ",
  "                     ",
  "                      ",
  "                       ",
  "                        ",
  "                         ",
  "                          ",
  "                           ",
  "                            ",
  "                             ",
  "                              ",
  "                               ",
  "                                ",
  "                                 ",
  "                                  ",
  "                                   ",
  "                                    ",
];

// Even with node 8.1.0 the `var` keyword is still a lot faster
// than `const` or `let`!
export function padStart(str: string, n: number) {
  var pad = padCache[n];
  if (pad !== undefined) {
    return pad + str;
  }

  var out = "";
  for (var i = 0; i < n; i++) {
    out += " ";
  }

  padCache[n] = out;

  return out + str;
}

// Taken from `preact-render-to-string` by @developit
// See https://github.com/developit/preact-render-to-string/blob/master/src/util.js#L27
export let memoize = (fn: any, mem: any = {}) => (v: any) => {
  if (mem[v] === undefined) {
    mem[v] = fn(v);
  }
  return mem[v];
};

// Taken from `preact-render-to-string` by @developit
// See: https://github.com/developit/preact-render-to-string/blob/master/src/util.js#L65
export let jsToCss = memoize((s: string) =>
  s.replace(/([A-Z])/g, "-$1").toLowerCase(),
);
