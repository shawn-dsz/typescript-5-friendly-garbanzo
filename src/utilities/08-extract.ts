type RoleAttribute = { role: "admin"; orgId: string } | { role: "user" } | { role: "ananymous" }

type AdminRole = Extract<RoleAttribute, {
//       ^?
    role: 'admin'
}>

// ^to exclude to remove multiple members from the union sometimes your union will be a 
// ?**discriminated** Union 
//^ for instance here we have role attributes the