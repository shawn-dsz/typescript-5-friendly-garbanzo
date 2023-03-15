interface User {
  id: string;
  name: string;
  email: string;
}

// ^we can make an object read only by using the read-only type helper now ID name and age are all read-only
type ReadOnlyPropsUser = Readonly<User>;
//     ^?
