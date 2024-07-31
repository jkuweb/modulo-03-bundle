declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_BASE: string;
      ENV: string;
    }
  }
}
export { };