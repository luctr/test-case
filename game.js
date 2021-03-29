let count = Math.floor(Math.random() * ((quizs.length - 1) - 0 + 1) + 0);
count =0;
let count1 = 0;
let point = 0;
let array = [];
let getQuizs = document.getElementById("img");

if (getQuizs!=null)
getQuizs.setAttribute("src", quizs[count].img);
function check(input) {
    if (input == ""){
        return true
    }return false
}
function dangnhap() {
    let p = document.getElementById("name-1").value;
    if (check(p)){
        alert("bạn cần điền họ tên")
    }else{
        window.location="/testcasy/test.html";
        document.getElementById("sp1").innerHTML = p;
    }

}

function point1() {
    document.getElementById("sp1").innerText =  + " " + "Điểm của bạn " + point;
}

function support() {
    document.getElementById("text").innerText = quizs[count].note;
}

function reset() {
    let a = confirm("Bạn có chắc chắn muốn reset không")
    if (a) {
        location.reload();
    }

}

function next() {

    count = Math.floor(Math.random() * ((quizs.length - 1) - 0 + 1) + 0);
    while (array.includes(count)) {
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
    while (array.includes(count)) {
        if(array.length === quizs.length)
            break


        count = Math.floor(Math.random() * ((quizs.length - 1) - 0 + 1) + 0);
    }
    if (count < quizs.length) {
        console.log(quizs[count])
        getQuizs.setAttribute("src", quizs[count].img);
    }

    if (array.length == quizs.length-1) {
        alert("câu hỏi cuối cùng rồi nè")

    }


    if (array.length == quizs.length){
        document.getElementById("kq").style.display='none'
        document.getElementById("ip-1").style.display='none'
        document.getElementById("win").style.display='block'
        addElement()

    }
}

function handleClose(){
    document.getElementById("win").style.display='none'
    count = Math.floor(Math.random() * ((quizs.length - 1) - 0 + 1) + 0);
    count1 = 0;
    point = 0;
    array = [];
    document.getElementById("abc").pause()
}

function result() {
    let value = document.getElementById("ip-1").value
    let check = value === quizs[count].correct
    if (check) {
        music()
        array.push(count)
        point++;
        alert("đúng rồi")
        next2();
        point1();
        document.getElementById("ip-1").value = "";
    } else {
        musicc()
        alert("sai rồi")
    }
}
function music() {
    document.getElementById("nhacdung").play()

}
function musicc() {
    document.getElementById("nhacsai").play()
}

function addElement(){
    document.getElementById("abc").play()
}





