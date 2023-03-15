interface User {
  id: string;
  name: string;
  email: string;
}

// ^ passing the user into the first argument and the property that we want to get rid of into the second argument this means we end up with an object with that property removed

type OmittedUser = Omit<User, 'id'>;
//     ^?

// ^ we can remove multiple Properties by passing in a union type 

type OmittedUser1 = Omit<User, 'id' | 'name'>;
//     ^?
