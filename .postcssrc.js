// module.exports로 안에 있는 내용을 밖으로 내보낸다.
// plugins의 옵션으로 postcss에 plugin으로 사용할 autoprefixer를 지정해준다.
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}