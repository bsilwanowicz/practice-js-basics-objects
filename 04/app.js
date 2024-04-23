const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '23',
        month: '04',
        year: '1985'
    }
}

const now = new Date()
const nowDay = now.getDate()
const nowMonth = now.getMonth()+1
const nowYear = now.getFullYear()
console.log(nowDay,nowMonth,nowYear)


userBirthDay = parseInt(user.born.day)
userBirthMonth = parseInt(user.born.month)
userBirthYear = parseInt(user.born.year)

if (userBirthMonth === nowMonth && userBirthDay === nowDay) {
    console.log('Happy Birthday!')
}