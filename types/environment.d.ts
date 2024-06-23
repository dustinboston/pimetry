declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NEXTAUTH_URL: string;
    readonly NEXTAUTH_SECRET: string;
    readonly AUTH_SECRET: string;

    readonly AUTH_GITHUB_ID: string;
    readonly AUTH_GITHUB_SECRET: string;

    readonly POSTGRES_URL: string;
  }
}
