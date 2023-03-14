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


// const routes = <const T>(routes: T[]) => {
//   const addRedirect = (from: T, to: T) => {
//     // Implementation
//   };

//   return {
//     addRedirect,
//   };
// };

const router = routes(["/users", "/posts", "/admin/users"]);

// ^the function excepts any string.
// !Without TS5
// router.addRedirect("/admin/blah", "/users");  

router.addRedirect("/admin/users", "/posts");  


// adding const T
// now the things that you pass into roots are going to be inferred as their literal

// ^means we autocomplete
// router.addRedirect(

// ^this is one of the most important features typescript has shipped for a while because 
// ^it makes handling these generics when you care about the literal values
