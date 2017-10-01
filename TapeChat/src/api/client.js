import io from 'socket.io-client'
const TapeChat = {
  socket: null,
  //退出，本例只是一个简单的刷新
  logout: function () {
    this.socket.disconnect();
    // location.reload();
  },
  genUid: function () {
    return new Date().getTime() + "" + Math.floor(Math.random() * 899 + 100);
  },
  init: function (userId,username) {
    //连接websocket后端服务器
    this.socket = io.connect('ws://localhost');
    //告诉服务器端有用户登录
    this.socket.emit('login', {
      userid: userId,
      username: username,
    });
    //心跳包，30s左右无数据浏览器会断开连接Heartbeat
    setInterval(() => {
      this.socket.emit('heartbeat', 1);
    }, 10000)
    //监听新用户登录
    this.socket.on('login', function (obj) {
      console.log(obj,'login');
    });

    //监听用户退出
    this.socket.on('logout', function (obj) {
      console.log(obj,'logout');
    });

    //监听消息发送
    this.socket.on('message', function (obj) {
      console.log(obj,'message');
    });
  }
}
export default TapeChat
