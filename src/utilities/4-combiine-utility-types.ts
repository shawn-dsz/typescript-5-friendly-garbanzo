interface User2 {
    id: string;
    name: string;
    email: string;
}

// ^also use utility types together we first pick the user and then we make the object that we get from pick a partial this means we end up with ID and name both optional we can make an object read

type PartialPickedPropsUser = Partial<Pick<User2, 'id' | 'name'>>;
//     ^?