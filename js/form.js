console.log("Hello form regex Project");

//only for learning dropdown values

// let select =document.getElementById("select");
// console.log(select.value);

// select.addEventListener('blur',(e)=>{

//     console.log(e);
//     console.log(select.value);

// });

let email = document.getElementById('email');
let password = document.getElementById('password');
let evalidation=false;
let pvalidation=false;
email.addEventListener('blur', () => {
    var emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (emailReg.test(email.value)) {
        console.log("Matches");
        evalidation=true;
        email.classList.remove("is-invalid");
   
    } else {
        email.classList.add("is-invalid");
        console.log("Not Matches");
        evalidation=false;
    }

});


password.addEventListener('blur', () => {
    function validateCode(){
        let Tcode=password.value;
        if( /[^a-zA-Z0-9]/.test( Tcode ) ) {
           return false;
        }
        return true;     
     }
    if (validateCode(password.value)) {
        var passwordReg = /([a-z0-4]){5}$/;
        if (passwordReg.test(password.value)) {
            console.log("Matches");
              pvalidation=true;
              password.classList.remove("is-invalid");
        } else {
            password.classList.add("is-invalid");
            console.log("Not Matches");
            pvalidation=false;
        }
    }
    else {
        pvalidation=false;
        password.classList.add("is-invalid");
        console.log("Please enter Password which contain numbers and alphabates");
    }


});


let btnsub=document.getElementById('btnsub');
btnsub.addEventListener('click',(e)=>{
let atype;
let msg;
    if(evalidation && pvalidation){
        atype="success";
        msg="Congrasulation you are registered successfully";
        alert(atype,msg);
    }
    else{
        atype="danger";
        msg="Please check details that you enter and try to resubmit again";
        alert(atype,msg);
        console.log("Please check your form again");
    }
     e.preventDefault();
});
function alert(type,msg){

   let alert=document.getElementById('alert');
   alert.innerHTML=`<div id="alert" class="alert alert-${type} alert-dismissible fade show" role="alert">
   <strong>${msg}</strong>  
   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
 </div>`;
}