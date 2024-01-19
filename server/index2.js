console.log("Anjali singh")

// express().get((req,res)=>{
    
// })
const express = require("express");
const app= express();
const port=8000;
app.get("/character_choice/character_id/character_info", (req,res)=>{
    res.send("your are on character info route");
    console.log("/course");

});
app.get("/character_choice/charcter_id/quiz_on_character", (req,res)=>{
    res.send("you are on charcter quiz route");
    // console.log("/course");

});
app.get("/patronous_gen/questions_asked/patronous_generated", (req,res)=>{
    res.send("your are on patronous generation route");
    console.log("/course");

});
app.get("/news/all_news/recent_news", (req,res)=>{
    res.send("you are on recent news route");
    // console.log("/course");

});
app.get("/fanfic/fanfic_write/fanfic_upload", (req,res)=>{
    res.send("your are on fanfiction route");
    console.log("/course");

});
app.get("/discussion/mention_scene/start_discussion/upload_comment/:id", (req,res)=>{
    const id = req.params.id;
  res.send(`Subroute with ID: ${id}`);
    res.send("you are on discussion route");
    // console.log("/course");

});


app.get("/*", (req,res)=>{
    res.send("this route is not available, visit below");
    // console.log("/course");

});
app.listen(port,()=>{
    console.log(`app running on ${port}`);
});
