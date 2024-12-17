import pino from "pino";

/**
 * Map of Pino log levels to severity in Google Cloud Logging.
 */
const PinoLevelToSeverityLookup = {
  trace: "DEBUG",
  debug: "DEBUG",
  info: "INFO",
  warn: "WARNING",
  error: "ERROR",
  fatal: "CRITICAL",
} as const;

const logger = pino({
  level: 'debug',
  timestamp: pino.stdTimeFunctions.isoTime,
  messageKey: "message",
  formatters: {
    level(label: string, number: number) {
      // Use a type guard to ensure safe lookup with a default fallback
      const severity =
        PinoLevelToSeverityLookup[
          label as keyof typeof PinoLevelToSeverityLookup
        ] || "INFO";
      return {
        severity,
        level: number,
      };
    },
  },
});

export default logger;
