type MaybeString = string | null | undefined;

type DefinatelyString = NonNullable<MaybeString>;
//     ^?

// ^ remove null or undefined