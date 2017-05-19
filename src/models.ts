export interface Color {
  r: number;
  g: number;
  b: number;
  a?: number;
}

export function toRGBA(c: Color): string {
  let a = 255;
  if (c.a !== undefined) {
    a = c.a;
  }
  return `rgba(${c.r}, ${c.g}, ${c.b}, ${a})`;
}

export interface Chip {
  size: number;
  color: Color;
  layers: Layer[];
}

export interface Layer {
  angle?: number;
  cx?: number;
  cy?: number;
  count?: number;
  kind: LayerKind;
}

export type LayerKind
  = Circle
  | CurvedRect
  | Text
  | CurvedText
  ;

export const CIRCLE = 'CIRCLE';
export const CURVED_RECT = 'CURVED_RECT';
export const TEXT = 'TEXT';
export const CURVED_TEXT = 'CURVED_TEXT';

export interface Circle {
  kind: typeof CIRCLE;
  radius: number;
  color: Color;
}

export interface CurvedRect {
  kind: typeof CURVED_RECT;
  radius: number;
  angle: number;
  height: number;
  color: Color;
}

export interface Text {
  kind: typeof TEXT;
  content: string;
  fontFamily: string;
  fontSize: number;
  color: Color;
}

export interface CurvedText {
  kind: typeof CURVED_TEXT;
  text: Text;
  radius: number;
}