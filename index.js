const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const { User } = require('./models/User');
const config = require('./config/key');

//application/x-www-form-urlencoded 이런 데이터를 분석해서 서버가 가져올 수 있게 해줌
app.use(bodyParser.urlencoded({extended: true}));
//application/json 인 데이터를 분석해서 가져올 수있게 함
app.use(bodyParser.json());


const mongoose = require('mongoose');
mongoose.connect(config.mongoURI)
    .then(() => console.log('MongoDB Connected...')) //연결이 잘 됐는지 확인
    .catch(() => console.log('err')) //연결 에러시 표시

// mongoose.connect(`mongodb+srv://boyoung-yang:<password>@boilerplate.uybsm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,{
//     useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: falsle
// }) => 였으나
// // useNewUrlParser, useUnifiedTopology, useCreateIndex, useFindAndModify 설정을 기본으로 갖게 업데이트 하면서 설정이름들을 더이상 지원하지 않음


app.get('/', (req,res) => res.send("안녕 세상"))

app.post('/register', (req, res) => {
    //회원가입할 때 필요한 정보들을 클라이언트에서 가져오면
    //그것들을 데이터베이스에 넣어준다.
    // => 모델(User.js)만든 것을 가져와서 연결해 줘야 함
    // const { User } = require('./models/User'); 위에 추가
    //클라이언트에서 가저온 정보를 req.body로 가져오기 위해 바디파서 연결
    //const bodyparser = require('body-parser');

    const user = new User(req.body) //req.body를 받아오는 인스턴스 생성
    //user.save(콜백)는 몽고db의 메소드 user에 온 정보들이 user에 저장됨 콜백은 데이터에 에러가 났을 때 안났을 때 취할 행동 지정
    user.save((err, userInfo) => {
        if(err) return res.json({success: false, err}); //에러가 나면 success: false라는 말과 함께 에러 코드 보내주기
        return res.status(200).json({
            success: true
        })
    })

})

app.listen(port, () => console.log(`example app listening on port ${port}`))