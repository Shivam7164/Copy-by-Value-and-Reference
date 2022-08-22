// List all the primitive and non-primitive data types in JavaScript.
// primitive.
1. string
2. number
3. null
4. undefined
5. symbol
6. bigint 
7. boolean

// Explain the difference between Primitive and Non-Primitive with examples.

primitive is store only one value at a time but non-primtive store many values 
at a time a primitive value is immutable but the non-primitive value is mutable. 
let user = "ravi"; let obj = { name : "ravi" , fullNmae : "ravindra rajpoot" }

// Explain copy by value and copy by reference with examples
copy by value :- let user = "ravi"; let owner = user; here we define two variable
 users and owner that means create two boxes first box name is user and the second box name is the owner.
  the first box has a value "ravi". and the box's second box also has the same value because the value is copy to the first variable.

  copy by reference:- let student = { name : "arya", age : "21", } let newStudents = student ; 
  in the above example working like same of example first but here the boxes have store object memory location address, 
  not a value and the memory location address are the same for both, and here variable reference of memory location address,
  not value so we can say that the memory address is same so here we copy the reference

// Explain mutation with example
Non primitive data type the origin data can be changed so here address the but orignal data change.

example ==  function getuser(user){ user.name = "singh"; return user }
let user = {name : "arya"} getuser(user);