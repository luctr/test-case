let count=Math.floor(Math.random() * ((quizs.length-1) - 0 + 1) + 0);
let  count1=0;
let point=0;

let getQuizs = document.getElementById("img");
getQuizs.setAttribute("src", quizs[count].img);

function point1() {
    document.getElementById("sp1").innerHTML ="Điểm của bạn " + point;
}
function Support(){
    document.getElementById("text").innerText=quizs[count].note;
}
function Reset() {
   let a = confirm("Bạn có chắc chắn muốn reset không")
    if (a){
        location.reload();
    }

}
function next(){
    if (count1==0){
        count++;
        count1++;
        getQuizs.setAttribute("src", quizs[count].img);
    }

    else{
        alert("hết lượt" );
    }

}function next2(){
    count++;
    getQuizs.setAttribute("src",quizs[count].img);
    if (count == quizs.length-1 ){
        alert("câu hỏi cuối cùng rồi nè")
    }
}
function Result() {
    let check=document.getElementById("ip-1").value == quizs[count].correct
            if(check){
                point++;
                alert("đúng rồi")
                next2();
                point1();
            }else{
                alert("sai rồi")
            }
}

