const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, //이메일 중 띄어쓰기 있는 것을 없애줌 ex) boyoung yang@gmail.com => boyoungyang@gmail.com
        unique: 1, //이메일중복X unique: true도 가능
        required: true, //필수값
        lowercase: true //소문자여야함-소문자로 자동변환되는것인지 확인필요
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    birth: {
        type: Date,
        default: Date.now //기본 값으로 현재 시간 넣음
    },
    role: {
        //role을 주는 이유는 관리자 유저인지 일반 유저인지 설정 가능
        type: Number, // 1이면 관리자, 0이면 일반유저
        default : 0 //따로 설정하지 않는 경우 0(일반유저)로 자동설정
    },
    image: String,
    token: {
        type: String //유효성관리
    },
    tokenExp: {
        //토큰 유효기간
        type: Number
    }
})

const User = mongoose.model('User', userSchema) 
//모델의 이름과 스키마를 이용해서 모델을 변수처럼 설정
//const 변수명 = mongoose.model('모델 명', 사용 스키마)

module.exports = {User} //만든 User 모델을 다른 곳에서도 쓸 수 있게 해줌