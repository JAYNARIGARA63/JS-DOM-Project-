const upperSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerSet = 'abcdefghijklmnopqrstuvwxyz'
const numberSet = '0123456789'
const symbolSet = '~!@#$%^&*'

const showpassword = document.getElementById('show-password')
const passLength = document.getElementById('passLength')
const upperinput = document.getElementById('upper-case')
const lowerinput = document.getElementById('lower-case')
const numberinput = document.getElementById('numbers')
const symbolinput = document.getElementById('symbols')


const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const genratePassword = (password = ' ') => {
    if (upperinput.checked) {
        password += getRandomData(upperSet)
    }
    if (lowerinput.checked) {
        password += getRandomData(lowerSet)
    }
    if (numberinput.checked) {
        password += getRandomData(numberSet)
    }
    if (symbolinput.checked) {
        password += getRandomData(symbolSet)
    }
    if(password.length < passLength.value){
        return genratePassword(password)
    }
    showpassword.innerHTML = truncateString(password, passLength.value);
}
genratePassword()

document.getElementById('submit').addEventListener('click',
function(){
    genratePassword();
})

function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}

