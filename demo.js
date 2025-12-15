

let person = {
    name: "John",
    age: 30,
    city: "New York",
    add : function(){
        return this.name + " from " + this.city;
        function innerFunc(){
            console.log("Inner Function: " + this.name);
            function nestedFunc(){
                console.log("Nested Function: " + this.name);
                function deepNestedFunc(){
                    console.log("Deep Nested Function: " + this.name);
                }
            }
        }
    },

    phone : "123-456-7890"
    

}