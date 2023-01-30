// *1. Improvement to Enums
enum LogLevel {
  ERROR,
  WARN,
  INFO,
}

const log = (level: LogLevel, message: string) => {};

// ^previous version allows any number to be passed in
// !Switch to TS 4
// log(23, 'This is an error message')

log(LogLevel.ERROR, "This is an error message");
// log(1, 'This is an error message')

// ^TS 5 will force you to use the enum,
/**
 * enum LogLevel {
  ERROR = "ERROR",
  WARN = "WARN",
  INFO = "INFO",
}
 */
// log('ERROR', 'This is an error message')
