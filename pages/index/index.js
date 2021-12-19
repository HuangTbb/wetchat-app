Page({
  data: {
    x: 0,
    y: 0,
    password: 0,
    guess: false,
    startGame: false,
    message: "",
    arrayX: [0,1,2,3,4,5,6,7,8,9],
    arrayY: [0,1,2,3,4,5,6,7,8,9]
 },
 setX: function(e){
  this.setData({x: e.detail.value})
 },
 setY: function(e){
  this.setData({y: e.detail.value})
 },
 guess: function(){
   if(this.data.startGame === false){
    this.setData({message: "请先点击开始按钮"})
   }else{
    const guessNumber = parseInt(this.data.x)*10 + parseInt(this.data.y);
    if(guessNumber === this.data.password){
     this.setData({guess: true})
     this.setData({startGame: false})
     this.setData({message: "猜对了！"})
    }else if(guessNumber > this.data.password){
      this.setData({message: "猜大了"})
    }else if(guessNumber < this.data.password){
      this.setData({message: "猜小了"})
    }
   }
 },
 start: function(){
  this.setData({startGame: true})
  this.setData({password: Math.floor(Math.random()*100)})
  this.setData({x: 0})
  this.setData({y: 0})
  this.setData({message: ""})
  this.setData({guess: false})
 }
})
