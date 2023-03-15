type PromiseString = Promise<string>;

//^ Promise to represent promise

type Result = Awaited<PromiseString>
//    ^?

// ^ the awaited type helper to unwrap these promises this means that if we change this to a number then this result is also going to be a number 

// * what happends when we change string to number?