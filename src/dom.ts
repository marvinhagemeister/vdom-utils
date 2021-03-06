export const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
export const XLINK_NAMESPACE = "http://www.w3.org/1999/xlink";
export const XML_NAMESPACE = "http://www.w3.org/XML/1998/namespace";

export const VOID_ELEMENTS = new Set([
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
]);

export const SVG_ELEMENTS = new Set([
  "desc",
  "ellipse",
  "feblend",
  "fecolormatrix",
  "fecomponenttransfer",
  "fecomposite",
  "feconvolvematrix",
  "fediffuselighting",
  "fedisplacementmap",
  "fedistantlight",
  "feflood",
  "fefunca",
  "fefuncb",
  "fefuncg",
  "fefuncr",
  "fegaussianblur",
  "feimage",
  "femerge",
  "femergenode",
  "femorphology",
  "feoffset",
  "fepointlight",
  "fespotlight",
  "fetile",
  "feturbulence",
  "filter",
  "foreignobject",
  "g",
  "image",
  "line",
  "lineargradient",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialgradient",
  "rect",
  "stop",
  "svg",
  "symbol",
  "text",
  "textpath",
  "tspan",
  "use",
  "view",
]);

export type InputType =
  | "textarea" // not a real input type
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

export type MediaTagType = "audio" | "video";

export type SVGTagType =
  | "circle"
  | "clippath"
  | "defs"
  | "desc"
  | "ellipse"
  | "feblend"
  | "fecolormatrix"
  | "fecomponenttransfer"
  | "fecomposite"
  | "feconvolvematrix"
  | "fediffuselighting"
  | "fedisplacementmap"
  | "fedistantlight"
  | "feflood"
  | "fefunca"
  | "fefuncb"
  | "fefuncg"
  | "fefuncr"
  | "fegaussianblur"
  | "feimage"
  | "femerge"
  | "femergenode"
  | "femorphology"
  | "feoffset"
  | "fepointlight"
  | "fespecularlighting"
  | "fespotlight"
  | "fetile"
  | "feturbulence"
  | "filter"
  | "foreignobject"
  | "g"
  | "image"
  | "line"
  | "lineargradient"
  | "marker"
  | "mask"
  | "metadata"
  | "path"
  | "pattern"
  | "polygon"
  | "polyline"
  | "radialgradient"
  | "rect"
  | "stop"
  | "svg"
  | "switch"
  | "symbol"
  | "text"
  | "textpath"
  | "tspan"
  | "use"
  | "view";

export type HTMLTagType =
  | "a"
  | "abbr"
  | "acronym"
  | "address"
  | "applet"
  | "area"
  | "article"
  | "aside"
  | "b"
  | "base"
  | "basefont"
  | "bdo"
  | "big"
  | "blockquote"
  | "body"
  | "br"
  | "button"
  | "canvas"
  | "caption"
  | "center"
  | "cite"
  | "code"
  | "col"
  | "colgroup"
  | "datalist"
  | "dd"
  | "del"
  | "dfn"
  | "dir"
  | "div"
  | "dl"
  | "dt"
  | "em"
  | "embed"
  | "fieldset"
  | "figcaption"
  | "figure"
  | "font"
  | "footer"
  | "form"
  | "frame"
  | "frameset"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "head"
  | "header"
  | "hgroup"
  | "hr"
  | "html"
  | "i"
  | "iframe"
  | "img"
  | "ins"
  | "isindex"
  | "kbd"
  | "keygen"
  | "label"
  | "legend"
  | "li"
  | "link"
  | "listing"
  | "map"
  | "mark"
  | "marquee"
  | "menu"
  | "meta"
  | "meter"
  | "nav"
  | "nextid"
  | "nobr"
  | "noframes"
  | "noscript"
  | "object"
  | "ol"
  | "optgroup"
  | "option"
  | "p"
  | "param"
  | "picture"
  | "plaintext"
  | "pre"
  | "progress"
  | "q"
  | "rt"
  | "ruby"
  | "s"
  | "samp"
  | "script"
  | "section"
  | "select"
  | "small"
  | "source"
  | "span"
  | "strike"
  | "strong"
  | "style"
  | "sub"
  | "sup"
  | "table"
  | "tbody"
  | "td"
  | "template"
  | "textarea"
  | "tfoot"
  | "th"
  | "thead"
  | "title"
  | "tr"
  | "track"
  | "tt"
  | "u"
  | "ul"
  | "var"
  | "wbr"
  | "x-ms-webview"
  | "xmp";
