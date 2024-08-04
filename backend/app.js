import cors from 'cors';
import express from 'express';
import { connectToDB, db } from './db.js';
const app=express();
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send("server is running")
})
app.get('/login/:logname/:cpassword',async(req,res)=>{
  const data = await db.collection('cars').findOne({
      $or: [
          { username: req.params.logname, cpassword: req.params.cpassword },
          { email: req.params.logname, cpassword: req.params.cpassword }
      ]
  });
  res.json(data);
})
app.get('/check/:username',async(req,res)=>{
    const details=await db.collection('cars').findOne({username:req.params.username});
    res.json(details);
})
app.get('/check1/:email',async(req,res)=>{
    const details=await db.collection('cars').findOne({email:req.params.email});
    res.json(details);
})
app.get('/aigetjoinvalue',async(req,res)=>{
  const details=await db.collection('aijoin').findOne({Count:"display"});
  res.json(details);
})
app.get('/aigetjoin/:name/:gmail', async (req, res) => {
  const details=await db.collection('aijoin').findOne({Name: req.params.name, gmail: req.params.gmail});
    res.json(details);
});
app.post('/aijoin/:name/:gmail/:count', async (req, res) => {
    const details = await db.collection('aijoin').insertOne({ Name: req.params.name, gmail: req.params.gmail });
    const data = await db.collection('aijoin').updateOne({ Count:"display" }, { $set: { Joincount: parseInt(req.params.count) } });
    res.json(details);
    res.json(data);
});
app.get('/dsgetjoinvalue',async(req,res)=>{
  const details=await db.collection('dsjoin').findOne({Count:"display"});
  res.json(details);
})
app.get('/dsgetjoin/:name/:gmail', async (req, res) => {
  const details=await db.collection('dsjoin').findOne({Name: req.params.name, gmail: req.params.gmail});
    res.json(details);
});
app.post('/dsjoin/:name/:gmail/:count', async (req, res) => {
    const details = await db.collection('dsjoin').insertOne({ Name: req.params.name, gmail: req.params.gmail });
    const data = await db.collection('dsjoin').updateOne({ Count:"display" }, { $set: { Joincount: parseInt(req.params.count) } });
    res.json(details);
    res.json(data);
});
app.get('/mlgetjoinvalue',async(req,res)=>{
  const details=await db.collection('mljoin').findOne({Count:"display"});
  res.json(details);
})
app.get('/mlgetjoin/:name/:gmail', async (req, res) => {
  const details=await db.collection('mljoin').findOne({Name: req.params.name, gmail: req.params.gmail});
    res.json(details);
});
app.post('/mljoin/:name/:gmail/:count', async (req, res) => {
    const details = await db.collection('mljoin').insertOne({ Name: req.params.name, gmail: req.params.gmail });
    const data = await db.collection('mljoin').updateOne({ Count:"display" }, { $set: { Joincount: parseInt(req.params.count) } });
    res.json(details);
    res.json(data);
});
app.get('/pythongetjoinvalue',async(req,res)=>{
  const details=await db.collection('pythonjoin').findOne({Count:"display"});
  res.json(details);
})
app.get('/pythongetjoin/:name/:gmail', async (req, res) => {
  const details=await db.collection('pythonjoin').findOne({Name: req.params.name, gmail: req.params.gmail});
    res.json(details);
});
app.post('/pythonjoin/:name/:gmail/:count', async (req, res) => {
    const details = await db.collection('pythonjoin').insertOne({ Name: req.params.name, gmail: req.params.gmail });
    const data = await db.collection('pythonjoin').updateOne({ Count:"display" }, { $set: { Joincount: parseInt(req.params.count) } });
    res.json(details);
    res.json(data);
});
app.get('/arcgetjoinvalue',async(req,res)=>{
  const details=await db.collection('arcjoin').findOne({Count:"display"});
  res.json(details);
})
app.get('/arcgetjoin/:name/:gmail', async (req, res) => {
  const details=await db.collection('arcjoin').findOne({Name: req.params.name, gmail: req.params.gmail});
    res.json(details);
});
app.post('/arcjoin/:name/:gmail/:count', async (req, res) => {
    const details = await db.collection('arcjoin').insertOne({ Name: req.params.name, gmail: req.params.gmail });
    const data = await db.collection('arcjoin').updateOne({ Count:"display" }, { $set: { Joincount: parseInt(req.params.count) } });
    res.json(details);
    res.json(data);
});
app.get('/lawgetjoinvalue',async(req,res)=>{
  const details=await db.collection('lawjoin').findOne({Count:"display"});
  res.json(details);
})
app.get('/lawgetjoin/:name/:gmail', async (req, res) => {
  const details=await db.collection('lawjoin').findOne({Name: req.params.name, gmail: req.params.gmail});
    res.json(details);
});
app.post('/lawjoin/:name/:gmail/:count', async (req, res) => {
    const details = await db.collection('lawjoin').insertOne({ Name: req.params.name, gmail: req.params.gmail });
    const data = await db.collection('lawjoin').updateOne({ Count:"display" }, { $set: { Joincount: parseInt(req.params.count) } });
    res.json(details);
    res.json(data);
});
app.get('/pdgetjoinvalue',async(req,res)=>{
  const details=await db.collection('pdjoin').findOne({Count:"display"});
  res.json(details);
})
app.get('/pdgetjoin/:name/:gmail', async (req, res) => {
  const details=await db.collection('pdjoin').findOne({Name: req.params.name, gmail: req.params.gmail});
    res.json(details);
});
app.post('/pdjoin/:name/:gmail/:count', async (req, res) => {
    const details = await db.collection('pdjoin').insertOne({ Name: req.params.name, gmail: req.params.gmail });
    const data = await db.collection('pdjoin').updateOne({ Count:"display" }, { $set: { Joincount: parseInt(req.params.count) } });
    res.json(details);
    res.json(data);
});

app.post('/signup/:username/:email/:cpassword',async(req,res)=>{
  const details=await db.collection('cars').insertOne({username:req.params.username,email:req.params.email,cpassword:req.params.cpassword});
  res.json(details);
})
connectToDB(()=>{
  app.listen(8000,()=>{
      console.log("Server Running At port 8000");
  })
})
app.get('/screen/:course',async(req,res)=>{
  const details=await db.collection(req.params.course).find().toArray();
  res.json(details);
 })
 app.post('/insertchat/:name/:text/:course',async(req,res)=>{
  const details=await db.collection(req.params.course).insertOne({Name:req.params.name,Text:req.params.text});
  res.json(details);
})