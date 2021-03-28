let count = Math.floor(Math.random() * ((quizs.length - 1) - 0 + 1) + 0);
let count1 = 0;
let point = 0;
let abc = [];
let getQuizs = document.getElementById("img");
getQuizs.setAttribute("src", quizs[count].img);

function point1() {
    document.getElementById("sp1").innerText = "Điểm của bạn " + point;
}

function Support() {
    document.getElementById("text").innerText = quizs[count].note;
}

function Reset() {
    let a = confirm("Bạn có chắc chắn muốn reset không")
    if (a) {
        location.reload();
    }

}

function next() {

    count = Math.floor(Math.random() * ((quizs.length - 1) - 0 + 1) + 0);
    while (abc.includes(count)) {
        count = Math.floor(Math.random() * ((quizs.length - 1) - 0 + 1) + 0);
    }

    if (count1 == 0) {
        // count++;
        count1++;
        getQuizs.setAttribute("src", quizs[count].img);
    } else {
        alert("hết lượt");
    }

}

function next2() {

    count = Math.floor(Math.random() * ((quizs.length - 1) - 0 + 1) + 0);
    while (abc.includes(count)) {
        if(abc.length === quizs.length)
            break


        count = Math.floor(Math.random() * ((quizs.length - 1) - 0 + 1) + 0);
    }
    if (count < quizs.length) {
        console.log(quizs[count])
        getQuizs.setAttribute("src", quizs[count].img);
    }

    if (abc.length == quizs.length-1) {
        alert("câu hỏi cuối cùng rồi nè")
    }

    if (abc.length == quizs.length){
        document.getElementById("kq").style.display='none'
        document.getElementById("ip-1").style.display='none'
        document.getElementById("win").style.display='block'

    }
}

function handleClose(){
    document.getElementById("win").style.display='none'
    count = Math.floor(Math.random() * ((quizs.length - 1) - 0 + 1) + 0);
    count1 = 0;
    point = 0;
    abc = [];

}

function Result() {
    let value = document.getElementById("ip-1").value
    let check = value === quizs[count].correct
    if (check) {
        abc.push(count)
        point++;
        alert("đúng rồi")
        next2();
        point1();
        document.getElementById("ip-1").value = "";

    } else {
        alert("sai rồi")
    }
}

