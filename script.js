Heightf = document.getElementById('height')
Weighf = document.getElementById('weigh')
submitbtn = document.getElementById('calbtn')
output = document.getElementById('answer')

function getanswer() {
    let text = ''
    let height = Number(Heightf.value)
    let weigh = Number(Weighf.value)
    let bmi = Number((weigh)/(((height/100)*(height/100)))).toFixed(1)
    console.log(bmi)
    text += '<h2>'+'ค่า BMI ของคุณคือ '+bmi+'</h2>'
    if(bmi<18.5){text+="<h2></h2>"
        text += "<h2>"+"นํ้าหนักคุณตํ่ากว่าเกณฑ์"+"</h2>"
    }
    else if(bmi>=18.5&&bmi<=22.9){
        text += "<h2>"+"คุณสมส่วน"+"</h2>"
    }
    else if(bmi>=23.0&&bmi<=24.9){
        text += "<h2>"+"คุณนํ้าหนักเกิน"+"</h2>"
    }
    else if(bmi>=25.0&&bmi<=29.9){
        text += "<h2>"+"คุณอ้วน"+"</h2>"
    }
    else if(bmi>=30){
        text += "<h2>"+"คุณอ้วนมาก"+"</h2>"
    }
    output.innerHTML = text
}
submitbtn.addEventListener('click', getanswer);







