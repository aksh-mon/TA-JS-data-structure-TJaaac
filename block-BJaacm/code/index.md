 ```js
let user = {
  name: 'Arya',
  sibling: ['Robb', 'Ryan', 'John'],
};
let allBrothers = ['Robb', 'Ryan', 'John'];
let brothersCopy = user.sibling;
let usename = user.name;
let newUser = user;
```

1. Memory representation

- Create the memory representation of the above snippet on notebook.
- Take a photo/screenshot and add it to the folder `code`

<!-- To add this image here use ![name](./hello.jpg) -->
[memory representation](./memory%20representation.png)
2. Answer the following with reason:

- `user == newUser;` // true
 <!-- it is non-primitive type so it will refer to the address and here user is an object so new user will refer to this address hence true
  -->
- `user === newUser;` // true
 <!-- it is non-primitive type so it and === strict equality will type check and data type here both refer to object
 will refer to the address and here user is an object so new user will refer to this address hence true -->
- `user.name === newUser.name;` // true
<!-- it is non-primitive type so it and === strict equality will type check and data type here both refer to object
 will refer to the address and here user is an object so new user will refer to this address hence true -->
- `user.name == newUser.name;` // true
 <!-- it is non-primitive type so it will refer to the address and here user is an object so new user will refer to this address hence true -->
- `user.sibling == newUser.sibling;` // true
<!-- it is non-primitive type so it and === strict equality will type check and data type here both refer to object
 will refer to the address and here user is an object so new user will refer to this address hence true -->
- `user.sibling === newUser.sibling;` // true
 <!-- it is non-primitive type so it and === strict equality will type check and data type here both refer to object
 will refer to the address and here user is an object so new user will refer to this address hence true -->
- `user.sibling == allBrothers;` // false
  <!-- here user.sibling refer to the key of an object whereas allBrothers is an object so the both types != hence false -->
- `user.sibling === allBrothers;` // false
  <!-- here user.sibling refer to the key of an object whereas allBrothers is an object (===) strict equality will look for typecheck and datatype so the both types != hence false -->
- `brothersCopy === allBrothers;` // false
  <!-- here brothersCopy refer to the key of an object whereas allBrothers is an object (===) strict equality will look for typecheck and datatype so the both types != hence false -->

- `brothersCopy == allBrothers;` // false

  <!-- here brothersCopy refer to the key of an object whereas allBrothers is an object so the both types != hence false -->

- `brothersCopy == user.sibling;` // true
   <!-- it is non-primitive type so it will refer to the address and here user is an object so new user will refer to this address hence true -->

- `brothersCopy === user.sibling;` // true
   <!-- it is non-primitive type so it will refer to the address and here user is an object so new user will refer to this address hence true -->

- `brothersCopy[0] === user.sibling[0];` // true
    <!-- here brothersCopy refers to an array index1 and user.Sibling refers to an array index 1 which is 'Robb' hence true -->
- `brothersCopy[1] === user.sibling[1];` // true
    <!-- here brothersCopy refers to an array index2 and user.Sibling refers to an array index 2 which is 'Ryan' hence true -->
- `user.sibling[1] === newUser.sibling[1];` // true
    <!-- here brothersCopy refers to an array index3 and user.Sibling refers to an array index 3 which is 'Bobb' hence true -->
