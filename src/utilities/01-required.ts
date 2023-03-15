interface User1 {
  id: string;
  name?: string;
  // ^ where all of our optional object properties are now required
  email?: string;
}

type RequiredUser = Required<User1>;
//     ^?
