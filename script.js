let people = document.querySelector("#people");
let bill = document.querySelector("#bill");
let zero = document.querySelector("#zero");
let zeroBill = document.querySelector("#zeroBill");
let tipAmount = document.querySelector("#tipAmount");
let total = document.querySelector("#total");
let tip = document.querySelectorAll(".tip");
let reset = document.querySelector("#reset");
let tipEnd = document.querySelector(".tipEnd");


people.addEventListener("input", function() {
    visible(this, zero);
});

bill.addEventListener("input", function() {
    visible(this, zeroBill);
});

reset.addEventListener("click", function() {
    tipAmount.innerText = "0.00";
    total.innerText = "0.00";
    bill.value = "";
    people.value = "";
    tipEnd.value = "";
    for (let r = 0; r < tip.length; r++) {
        if(tip[r].classList.contains("active")){
            tip[r].classList.remove("active");
        }
    }
    this.style.opacity = "0.2";
    cero(bill, zeroBill);
    cero(people, zero);
});

for (let index = 0; index < tip.length; index++) {
    tip[index].addEventListener("click", function() {
        for (let i = 0; i < tip.length; i++) {
            if(tip[i].classList.contains("active")){
                tip[i].classList.remove("active");
            }
        }
        this.classList.add("active");
        let totalTipAmount = (sliced(this) / 100) * bill.value;
        let totalPerson = totalTipAmount * people.value;
        tipAmount.innerText = totalTipAmount.toFixed(2);
        total.innerText = totalPerson.toFixed(2);
    });
    
}

tipEnd.addEventListener("input", function(event) {
    for (let r = 0; r < tip.length; r++) {
        if(tip[r].classList.contains("active")){
            tip[r].classList.remove("active");
        }
    }

    let totalTipAmount = (parseInt(this.value) / 100) * bill.value;
    let totalPerson = totalTipAmount * people.value;
    tipAmount.innerText = totalTipAmount.toFixed(2);
    total.innerText = totalPerson.toFixed(2);
});

function sliced (val) {
    return parseInt(val.value.substring(0, val.value.length - 1));
}

function visible (op, p2) {
    if (op.value != "") {
        console.log("Not empty");
        reset.style.opacity = "initial";
    }

    if(op.value <= 0) {
        p2.classList.remove("activeZero");
        op.style.cssText = "outline: 2px solid red";
    }else {
        p2.classList.add("activeZero");
        op.style.cssText = "border: none";
    }
    
    return parseInt(op.value);
}

function cero (z1, z2) {
    z2.classList.add("activeZero");
    z1.style.cssText = "border: none";
}