const videoElement = document.querySelector("video");

home.addEventListener("click",function(){
    console.log("six");
    videoElement.style.display = "block"; 
    document.getElementById("project_image_one").src=""; 
    document.getElementById("project_image_two").src=""; 
    document.getElementById("project_image_three").src=""; 
    document.getElementById("project_image_four").src=""; 
    project_type.innerHTML="";
    gallery.innerHTML="";
    project_description.innerHTML= "My name is Maca and I am a Graphic Designer and Industrial Designer, with experience in branding, briefing, modeling and creating new concepts and ideas to develop in companies. With more than five years of experience I had work with important brands as a L'Oreal Paris and also I have experience working in design agencies, working in fast-peaced enviornmentsthat developed my time managment, detail oriented and organizational skills. Personally I am a corious person, always trying to lern new tools that help to achieve my creative ideas."
    document.body.classList.add("home");
    document.body.classList.remove("retail");
    document.body.classList.remove("graphic");
    document.body.classList.remove("branding");
    document.body.classList.remove("textile");

})

gallery.addEventListener("click",function(){
    console.log("hello");
})


retail.addEventListener("click",function(){
    console.log("seven");
    document.getElementById("project_image_one").src="one.png"; 
    document.getElementById("project_image_two").src="two.png"; 
    document.getElementById("project_image_three").src="three.png"; 
    document.getElementById("project_image_four").src=""; 
    project_type.innerHTML="Retail Projects";
    gallery.innerHTML="3D design and Rendering";
    project_description.innerHTML= "During my experience in L'Oreal Paris";
    document.body.classList.add("retail");
    document.body.classList.remove("graphic");
    document.body.classList.remove("textile");
    document.body.classList.remove("branding");
    document.body.classList.remove("home");
    videoElement.style.display = "none"; 
    })

graphic.addEventListener("click",function(){
    console.log("eight");
    document.getElementById("project_image_one").src="five.png";
    document.getElementById("project_image_two").src="six.png"; 
    document.getElementById("project_image_three").src="seven.png"; 
    document.getElementById("project_image_four").src="eight.png"; 
    project_type.innerHTML="Graphic Design";
    gallery.innerHTML="Tygraphy and Branding"
    project_description.innerHTML="In the 18th century, some techniques were improved during the process. For example, instead of using an axe to cut the trees, they began fashioning wooden taps to drive into the trees—one of the first examples of innovation in maple syrup production. Later in the 18th century, metal boilers and taps were invented, along with the evaporator, which was adapted for maple syrup production. This invention replaced the iron pot, improving the quality of the syrup and increasing production." ;
    document.body.classList.add("graphic");
    document.body.classList.remove("retail");
    document.body.classList.remove("textile");
    document.body.classList.remove("branding");
    document.body.classList.remove("home");
    videoElement.style.display = "none"; 
    })

textile.addEventListener("click",function(){
    console.log("nine");
    document.getElementById("project_image_one").src="nine.png";
    document.getElementById("project_image_two").src="ten.png"; 
    document.getElementById("project_image_three").src="eleven.png"; 
    document.getElementById("project_image_four").src="twelve.png"; 
    project_type.innerHTML="Textile and Print design";
    gallery.innerHTML="Printing and textile Design";
    project_description.innerHTML="textile";
    document.body.classList.add("textile");
    document.body.classList.remove("graphic");
    document.body.classList.remove("home");
    document.body.classList.remove("branding");
    document.body.classList.remove("retail");
    videoElement.style.display = "none"; 
     })
 

branding.addEventListener("click",function(){
    console.log("ten");
    document.getElementById("project_image_one").src="thirteen.png";
    document.getElementById("project_image_two").src="fourteen.png"; 
    document.getElementById("project_image_three").src="fifteen.png"; 
    document.getElementById("project_image_four").src="sixteen.png"; 
    project_type.innerHTML="Branding design";
    gallery.innerHTML="Branding";
    project_description.innerHTML="hello world";
    document.body.classList.add("branding");
    document.body.classList.remove("graphic");
    document.body.classList.remove("home");
    document.body.classList.remove("textile");
    document.body.classList.remove("retail");
    videoElement.style.display = "none"; 
})


