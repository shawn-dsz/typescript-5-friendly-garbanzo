interface User {
    id: string;
    name: string;
    email: string;
}

type Mutable<T> = {
    -readonly [K in keyof T]: T[K]
}

// ^can create your own this takes a user with a lot of read-only properties and makes them mutable it does this by using a map type and

type MutableUser = Mutable<User>;
//     ^?
