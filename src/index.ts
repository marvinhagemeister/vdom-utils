export const VOID_ELEMENTS = [
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
];

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

  return out + str;
}
