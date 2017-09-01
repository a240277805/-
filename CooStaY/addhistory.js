var start=db.updatedtimes.find({"name":"updatebrowsehistories"}).sort("-_id");

//var houses=db.houses.find({createdAt:{$gte: start[0].time}});

 var houses=db.houses.find().sort("-_id");
 var users=db.users.find().sort("-_id");

 for(let i=0;i<houses.count();i++){
    for(let j=0;j<5;j++){
      console.log(" 第 "+ i+"个 house begin:  insert第"+j+"个");
      let radom=Math.floor(Math.random()*1000);
      let json= {
      "post" : houses[i]._id,
      "user" : users[radom]._id,
      "posttype" : "House",
      "updatedAt" : ISODate("2017-04-08T20:25:56.010+08:00"),
      "__v" : NumberInt("0"),
      "createdAt" : ISODate("2017-04-08T20:25:55.829+08:00")
     };
     db.browsehistories.insert(json);
    }
 }
 
 
db.updatedtimes.insert({
    time:new Date(),
    name:"updatebrowsehistories"
});
 