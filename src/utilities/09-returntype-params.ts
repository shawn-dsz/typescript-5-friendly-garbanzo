type Func = (a: number, b: string) => number;

//^  if we want to access this number we can use the return type helper this return value will then be typed to

type ReturnValue = ReturnType<Func>;
//       ^?

//^ this return value will then be typed to whatever the return type of that function is if we change this to string

//* What happens when we change this to string?

type Params = Parameters<Func>;
//    ^?

//^ these end up as a named Tuple where we have a number and B

//^ here this is really good when you have a function in an external library and you need to extract out the type of its parameters or its return type which if the library doesn't provide it is really useful