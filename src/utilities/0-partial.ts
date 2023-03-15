interface User {
  id: string;
  name: string;
  email: string;
}

// ^  a partial of that object that makes allof the properties optional

type PartialUser = Partial<User>;
//     ^?

