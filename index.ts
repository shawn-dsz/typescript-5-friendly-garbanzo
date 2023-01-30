// *1. Improvement to Enums
enum LogLevel {
  ERROR = "ERROR",
  WARN = "WARN",
  INFO = "INFO",
}

const log = (level: LogLevel, message: string) => {};

// ^previous version allows any number to be passed in
// !Switch to TS 4
// log(23, 'This is an error message')

log(LogLevel.ERROR, "This is an error message");

// log(1, 'This is an error message')

// ^TS 5 will force you to use the enum,
// log('ERROR', 'This is an error message')

// *2. Speed improvements
// https://devblogs.microsoft.com/typescript/announcing-typescript-5-0-beta/#speed-memory-and-package-size-optimizations

// Build Time
// Package Size

// *3. const annotations
/* give you a new tool with generics in order to improve the inference that you get when you call functions */
const routes = <const T>(routes: T[]) => {
  const addRedirect = (from: T, to: T) => {
    // Implementation
  };

  return {
    addRedirect,
  };
};

const router = routes(["/users", "/posts", "/admin/users"]);

router.addRedirect("/admin/users", "/users");  

// ^the function excepts any string.
// !Switch to TS 4
// router.addRedirect("/admin/blah", "/users");  

// adding const T
// now the things that you pass into roots are going to be inferred as their literal

// ^means we autocomplete
// router.addRedirect(

// ^this is one of the most important features typescript has shipped for a while because 
// ^it makes handling these generics when you care about the literal values

// *5. Decorators

// decorators decorators have been around in typescript for a while under an ⁡⁣⁣⁢experimental flag⁡
//  5.0 brings them up to speed with the ecmascript proposal which is now in ⁡⁣⁣⁢stage 3⁡ meaning it's in the stage where it gets added to typescript 
