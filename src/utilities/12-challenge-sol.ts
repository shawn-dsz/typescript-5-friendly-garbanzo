const func1 = async () => {
    return {
        id: 123,
    }
}

type Result1 = Awaited<ReturnType<typeof func>>;
//       ^?


// ^ let's finish with a challenge imagine that you have this function
// ^ and you want to get its return type it's an async function so it's going to return a promise 