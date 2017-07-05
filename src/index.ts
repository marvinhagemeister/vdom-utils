export * from "./dom";

export function escape(text: string | number | boolean): string {
  if (typeof text === "string") {
    let result = text;
    let escape: string = "";
    let start = 0;
    let i;
    for (i = 0; i < text.length; i++) {
      switch (text.charCodeAt(i)) {
        case 34: // "
          escape = "&quot;";
          break;
        case 39: // \
          escape = "&#39;";
          break;
        case 38: // &
          escape = "&amp;";
          break;
        case 60: // <
          escape = "&lt;";
          break;
        case 62: // >
          escape = "&gt;";
          break;
        default:
          continue;
      }
      if (i > start) {
        if (start > 0) {
          result += text.slice(start, i);
        } else {
          result = text.slice(start, i);
        }
      }

      if (i > 0) {
        result += escape;
      } else {
        result = escape;
      }

      start = i + 1;
    }
    if (start && i !== start) {
      return result + text.slice(start, i);
    }
    return result;
  } else {
    return text.toString();
  }
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

const upperCaseRegex = /[A-Z]/g;
// Taken from `preact-render-to-string` by @developit
// See: https://github.com/developit/preact-render-to-string/blob/master/src/util.js#L65
export let jsToCss = memoize((s: string) =>
  s.replace(upperCaseRegex, "-$&").toLowerCase(),
);
