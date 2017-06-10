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

const padCache = [
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
  "            ",
  "             ",
  "              ",
  "               ",
  "                ",
];

export function padStart(str: string, n: number) {
  const pad = padCache[n];
  if (pad !== undefined) {
    return pad + str;
  }

  return Array(n).join(" ") + str;
}
