// *5. Decorators

// ~ decorators decorators have been around in typescript for a while under an ⁡⁣⁣⁢experimental flag⁡
// ~5.0 brings them up to speed with the ecmascript proposal which is now in ⁡⁣⁣⁢stage 3⁡
// ~ meaning it's in the stage where it gets added to typescript

export class SDK {

  public getUser(id: string) {
    return Promise.resolve({ id });
  }

  public getPost(id: string) {
    return Promise.resolve({ id });;
  }
}

const sdk = new SDK();

sdk.getPost("123");

// ^Imagine we want to log when the function is called also when it resolves


// & Step 1: Add console.log to the function
// console.log(`user called with id ${id}`);
// change to async
// save result to variable
// add log
/*
  public async getUser(id: string) {
    console.log(`user called with id ${id}`);
    const result = await Promise.resolve({ id });
    console.log("get user finished");
    return result;
  }
*/
// it means we need to copy this logic for every function we want to log

// if only were an ⁡⁢⁢⁢abstraction⁡ where I could just wrap these methods and add some logging to them this is where decorators come in

// ^Add Log function
/*
const log = (
  originalMethod: (...args: any[]) => any,
  _context: ClassDecoratorContext
) => {
  return async function func(this: any, ...args: any[]) {
    console.log(`${_context.name} called with id ${JSON.stringify(args)}`);
    // lets us pass this into the original method meaning it doesn't lose the context of where it's called in this case in the
    const result = await originalMethod.apply(this, args);
    console.log(`${_context.name} finished`);
    return result;
  };
};

@log
public getUser(id: string) {
    return Promise.resolve({ id });
}
*/
