interface User {
  id: string;
  name: string;
  email: string;
}

type PickedPropsUser = Pick<User, 'id' | 'name'>;
// ^using pick now we only get the properties that we pass to pick we can
