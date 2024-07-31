/// <reference types="vite/client"/>

interface ImportMetaEnv {
  readonly VITE_API_BASE: string;
  VITE_API_BASE;
}

declare module '*.svg' {
  const content: react.functioncomponent<react.svgattributes<svgelement>>;
  content;
  export default content;
}
declare module '*.scss';
declare module '*.svg';

declare module '*.jpg' {
  const content: string;
  content;
}

declare module '*.png' {
  const content: string;
  content;
}

declare module '*.json' {
  const content: string;
  content;
}

declare module '*.scss' {
  const content: record<string, string>;
  content;
  export default content;
}
