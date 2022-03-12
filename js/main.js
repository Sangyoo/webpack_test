// main.js를 진입점으로 설정했기 때문에, 여기에 import로
// main.css를 연결하면 webpack은 같이 묶어서 dist 폴더에 넣어줄 수 있다.
// 그러나, 한 곳에 넣어주는 것일 뿐 읽지는 못하는데, 읽게 하기 위해서는
// npm i -D css-loader style-loader 로 두 개의 패키지를 설치한다
import '../scss/main.scss'

console.log('webpack!')