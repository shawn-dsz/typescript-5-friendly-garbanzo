// ? union types
// ~are designed to work with Union types a union type is an OR type 

type Role = "admin" | "user" | "ananymous"

// ^we can use the exclude type helper to remove members of the union we can also pass a union type to exclude to remove multiple members

type NonAdminRole = Exclude<Role, 'admin'>
//     ^?