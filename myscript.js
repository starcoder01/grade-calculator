function calc()
{
    let wb=document.getElementById('wb').value;
    let ds=document.getElementById('ds').value;
    let mth=document.getElementById('mth').value;
    let eng=document.getElementById('eng').value;
    let total = parseInt(wb) + parseInt(ds) + parseInt(mth) + parseInt(eng);
    let perc=(total/400)*100;
    let grade="";

    if(perc>=90 && perc<100)
    {
        grade='O';
    }
    else if(perc>=80 && perc<90)
    {
        grade='A';
    }
    else if(perc>=70 && perc<80)
    {
        grade='B';
    }

    else if(perc>=60 && perc<70)
    {
        grade='C';
    }

    else if(perc>=40 && perc<60)
    {
        grade='D';
    }
    else
    {
        grade='F';
    }

    let result="";
    if(grade=='D')
        result="You are Fail.";
    else
        result="Congratulations, you are Pass."

    document.querySelector("#result").innerHTML=`${result} <br> <br> You got ${perc}% with grade ${grade}`;
}

const words = ["Score", "Percentage" , "Grade"];
let i = 0;
let timer;

function typingEffect() {
	let word = words[i].split("");
	var loopTyping = function() {
		if (word.length > 0) {
			document.getElementById('word').textContent += word.shift();
		} else {
			deletingEffect();
			return false;
		};
		timer = setTimeout(loopTyping, 150);
	};
	loopTyping();
};

function deletingEffect() {
	let word = words[i].split("");
	var loopDeleting = function() {
		if (word.length > 0) {
			word.pop();
			document.getElementById('word').textContent = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting, 150);
	};
	loopDeleting();
};

typingEffect();

