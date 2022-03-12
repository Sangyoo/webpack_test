const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
//기본적인 webpack 구성옵션을 지정하는 파일
module.exports = {
  //parcel main.js와 같은 기능
  //파일을 읽어들이기 시작하는 진입점 설정
  entry: './js/main.js',

  //결과물(번들)을 반환하는 설정
  output: {

    //아래에 있는 내용이 '기본값'
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    //새롭게 빌드하였을때 기존의 내용을 삭제
    clean: true
  },

  module: {
    rules: [
      //rules의 배열 데이터에 {}객체데이터가 들어온다.
      //그 객체 데이터 하나하나가 사용할 패키지와 그 타겟을 지정하는 것이다.
      //예를들어, 아래의 첫 번째 객체데이터에서 test 부분의 s?css로 끝나는 파일이
      //타겟이고, 그 타겟에 적용할 패키지는 style-loader, css-loader...등 4가지 패키지이다.
      {
        //.scss로 끝나는 파일명 근데 s는 있을수도 없을수도(css파일도 매칭가능)
        test: /\.s?css$/,

        //style loader와 css-loader의 순서가 중요! css loader가 먼저 해석됨
        use: [
          // 밑에서 css loader가 해석한 내용을 index.html 파일에 style tag로
          // 붙여주는 패키지
          'style-loader',
          //  javascript에 연결된 css파일을 해석하는 패키지
          'css-loader',
          //공급업체 접두사 적용
          'postcss-loader',
          //scss해석 패키지. 제일먼저 해석되어야 하므로 맨아래에 작성
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: [
          //여러가지 패키지를 통해 babel이 동작할 수 있게 했는데,
          //결국 webpack이 그것을 해석하기 위해서는 매개체 역할의 'loader'가 필요하다.
          'babel-loader'
        ]
      }
    ]
  },

  //번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    //main.js뿐만 아니라 index.html파일을 포함하여 번들링
    new HtmlPlugin({
      template: './index.html'
    }),
    //static 폴더 안의 favicon과 logo를 포함하여 번들링
    new CopyPlugin({
      patterns: [
        {from: 'static'}
      ]
    })
  ]
}