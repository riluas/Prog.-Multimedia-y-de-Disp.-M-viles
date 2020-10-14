let users = ["Pedro", "Celeste", "Laika", "Ares", "Alfonso"];
let blackListed = ["Celeste", "Ares"];

function usr(user, black) {

    let noBaneados = user.filter(x => 
        !black.includes(x)
        );

return noBaneados;  

}
console.log(usr(users,blackListed));
usr(users,blackListed);