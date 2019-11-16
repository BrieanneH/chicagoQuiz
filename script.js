var quizBox=document.getElementById('questionBox');
var op1= document.getElementById('op1');
var op2= document.getElementById('op2');
var op3= document.getElementById('op3');
var op4= document.getElementById('op4');

var app{

    questions:[ //how to enter questions.js script 
    ],

    index:0,
    load: function(){
        quizBox.innerHTML=this.questions[this.index].q;
        op1.innerHTML=this.questions[this.index].options[0;]
        op2.innerHTML=this.questions[this.index].options[1;]
        op3.innerHTML=this.questions[this.index].options[2;]
        op4.innerHTML=this.questions[this.index].options[3;]
    }
    
}