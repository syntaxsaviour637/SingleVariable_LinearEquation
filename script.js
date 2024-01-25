var x = 0
    var score = 0
    var quiz = document.querySelector(".eq")
    var btn = document.querySelector('button')
    var ans = document.querySelector('input')
        function get_number(){
            digit = Math.floor(Math.random()*20)-10;
         return digit   
        }
        function get_equation(){
        x = get_number();
        first_digit =get_number()+2
        
        second_digit =get_number()
        if(second_digit>-1){
        second_digit = '+'+second_digit;
        }
        
        sol = eval(first_digit*x+second_digit)
        eq = `${first_digit}x${second_digit} = ${sol}`
        document.querySelector('.eq').innerText = eq
        }
        
        btn.addEventListener("click", () => {
        if (x == ans.value) {
        result = "correct";
        score++;
        } else {
        result = "wrong";
        if (score > 0) {
        score--;
        }
        }
        document.querySelector(".box h1").innerText = score;
        document.querySelector("#result").innerText = result;
        
        document.querySelector("#result").style.display = "block";
        document.querySelector(".answer").style.display = "none";
        document.querySelector(".eq").style.display = "none"
        document.querySelector(".button-5").style.display = "none";
        
        setTimeout(() => {
        
        quiz.innerText = ""
        get_equation()
        
        document.querySelector("#result").style.display = "none";
        document.querySelector(".answer").style.display = "flex";
        document.querySelector("input").value = ""
        document.querySelector(".eq").style.display = "block"
        document.querySelector(".button-5").style.display = "block";
        
        }, 750);
        });