class User {
    // 1. Private fields MUST be declared at the top of the class using '#'
    #password; 

    constructor(email, password) {
        this.email = email;
        this.#password = password; // Sets the private field
    }

    // Getter
    get password() {
        return this.#password.toUpperCase(); 
    }

    // Setter
    set password(value) {    
        this.#password = value; 
    }
}

const user1 = new User("lol@mail.lol", "secured password");

// 2. Checking the object directly
console.log(user1);           
// Output: User { email: 'lol@mail.lol' }  <-- Notice #password is completely hidden!

// 3. Accessing via public getter works fine
console.log(user1.password);  
// Output: SECURED PASSWORD

// 4. Trying to bypass and access the private variable directly:
console.log(user1.#password); 
// ❌ SyntaxError: Private field '#password' must be declared in an enclosing class