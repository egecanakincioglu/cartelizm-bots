export class CallerFile {
    public static getCallerFile(): string {
        const Object = { stack: "" };

        Error.captureStackTrace(Object, CallerFile.getCallerFile);

        const Stack = Object.stack
        .split("\n")
        .slice(1)
        .filter((string) =>
            !string.includes("node_modules") && !string.includes("node:internal"));

        const CallerLine = Stack.map((string) => string.trim()).at(-1);
        const Match = CallerLine?.match(/\((.*):\d+:\d+\)$/)?.at(1);

        if (!Match) {
            const errorMessage = [
                "Failed to get caller file. Caller stack trace:",
                Stack.join("\n"),
                "-".repeat(Math.max(...Stack.map((string) => string.length)) + 15),
            ].join("\n");
      throw new Error(errorMessage);
    }

    return Match;
  }
}
