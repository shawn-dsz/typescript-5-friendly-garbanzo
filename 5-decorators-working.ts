const log = (
  originalMethod: any,
  _context: any
) => {
  return async function func(this: any, ...args: any[]) {
    console.log(`${_context.name} called with id ${JSON.stringify(args)}`);
    // lets us pass this into the original method meaning it doesn't lose the context of where it's called in this case in the
    const result = await originalMethod.apply(this, args);
    console.log(`${_context.name} finished`);
    return result;
  };
};

export class SDK {

  @log
  public getUser(id: string) {
    // returns from database
    return Promise.resolve({ id });
  }
  public getPost(id: string) {
    // returns from database
    return Promise.resolve({ id });
  }
}

const sdk = new SDK();
sdk.getUser("123");
