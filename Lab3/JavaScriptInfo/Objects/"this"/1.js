function makeUser() {
    return {
        name: "Kuralbayev",
        ref() {
            return this;
        }
    };
}
  
let user = makeUser();
  
alert( user.ref().name );