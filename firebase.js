var firebaseConfig = {
    databaseURL: "https://covid-19-updates-459b6.firebaseio.com",
  }
  firebase.initializeApp(this.firebaseConfig);
  var db = firebase.database().ref("Chinese");
  var newdb = db.push();
  var wistleCount;
  var wistlearray = [];
  var fakeKey = [];
  
  var count;
  var lastCount;
  window.onload = function () {
    db.on("value", function (snapshot) {
        var data = snapshot.val();
        wistleCount = Object.keys(data).length;
        console.log(wistleCount);
      });
  
}

function sendData(tag){
    var data;
    data= tag;
    newdb.set(data);
}











  

   
 