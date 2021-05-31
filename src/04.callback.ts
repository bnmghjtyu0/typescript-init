interface Greeter {
    (message: string): void;
}

//OR
//type Greeter = (message: string) => void;

function sayHi(callback: Greeter) {
    callback('Hi!')
}