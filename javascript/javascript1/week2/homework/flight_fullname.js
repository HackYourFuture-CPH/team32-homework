let fullname1 = "Niger afroze";
let fullname2 = "Abed sujan";

function getFullName(firstname , surname, useFormalName ){
    if(useFormalName){
        return ("Lord " + firstname +" " + surname)
    }else{

        return (firstname +" " + surname)
    }
}
console.log(getFullName("Niger", "afroze", true));
console.log(getFullName(fullname1, fullname2, true));
