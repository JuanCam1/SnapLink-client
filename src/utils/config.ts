

class Config {
  private static instance: Config;

  public readonly BASE_URL: string;

  private constructor() {
    this.BASE_URL = process.env.BASE_URL || "http://localhost:8080";

    if (!this.BASE_URL) {
      throw new Error("BASE_URL is not defined in environment variables.");
    }
  }

  public static getInstance(): Config {
    if (!Config.instance) {
      Config.instance = new Config();
    }
    return Config.instance;
  }
}

export const config = Config.getInstance();