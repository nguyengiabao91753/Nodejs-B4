import express from 'express';
import { create as createhandlebarsEngine } from 'express-handlebars';


const app = express();

//Tạo handlebars engine
const handlebarsEngine = createhandlebarsEngine({
    defaultLayout: "main",
    layoutsDir: "view/layouts",
    partialsDir: "view/partials"
});
app.engine('handlebars', handlebarsEngine.engine);
app.set('view engine', 'handlebars');
app.set('views', './view/pages');

app.use(express.static("public"));

app.get("/", (req,res)=>{
    res.render("homepage");
});
app.get("/index", (req,res)=>{
    res.render("homepage");
});
app.get("/about", (req,res)=>{
    res.render("about",{
        name: "Nguyen",
        title: "hello",
        user:{
            id:1,
            name:"Bao Nguyen"
        },
        values:[{
            title:"Consectetur",
            desc: "orem ipsum dolor sit amet consectetur adipisicing elit. Mollitia accusamus consectetur adipisicing elit excepturi corrupti nam quae exercitationem cupiditate, provident ipsa delectus vero possimus reprehenderit quas ut officiis tempora voluptatum quibusdam consectetur commodi"
        },{
            title:"Adipisicing",
            desc:"Molestias, autem impedit culpa dolores excepturi, quidem unde ducimus, rerum commodi deserunt earum, minus voluptatum.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe doloremque provident quas quae exercitationem laboriosam."
        },{
            title:"tittle3",
            desc:"Molestias, autem impedit culpa dolores excepturi, quidem unde ducimus, rerum commodi deserunt earum, minus voluptatum.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe doloremque provident quas quae exercitationem laboriosam."
        },{
            title:"title4",
            desc:"Molestias, autem impedit culpa dolores excepturi, quidem unde ducimus, rerum commodi deserunt earum, minus voluptatum.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe doloremque provident quas quae exercitationem laboriosam."
        }
    ]
        
    });
});
app.get("/blog", (req,res)=>{
    res.render("blog");
});
app.get("/contact", (req,res)=>{
    res.render("contact");
});
app.get("/services", (req,res)=>{
    res.render("services");
});

app.get("/generic", (req,res)=>{
    res.render("generic");
});


app.listen(3000, ()=>{
    console.log("Running port 3000");
});