

gallery.addEventListener("click",function(){
    console.log("hello");
    document.getElementById("project_image_one").src="a.png"; 
    document.getElementById("project_image_two").src="b.png"; 
    document.getElementById("project_image_three").src="c.png"; 
    document.getElementById("project_image_four").src="d.png"; 
    project_type.innerHTML="";
    gallery.innerHTML="My Projects";
    project_description.innerHTML="";
    document.body.classList.add("gallery");
    document.body.classList.remove("home");
    document.body.classList.remove("contact");
    document.body.classList.remove("back");
    
    const hideButtons = document.querySelectorAll(".hide");
    hideButtons.forEach(button => {
        button.style.display = "block"; 
    });
})


back.addEventListener("click",function(){
    console.log("hello");
    document.getElementById("project_image_one").src="a.png"; 
    document.getElementById("project_image_two").src="b.png"; 
    document.getElementById("project_image_three").src="c.png"; 
    document.getElementById("project_image_four").src="d.png"; 
    project_type.innerHTML="";
    gallery.innerHTML="My Projects";
    project_description.innerHTML="";
    document.body.classList.add("back");
    document.body.classList.remove("home");
    document.body.classList.remove("contact");
    document.body.classList.remove("gallery");

    const hideButtons = document.querySelectorAll(".hide");
    hideButtons.forEach(button => {
        button.style.display = "block"; 
    });
   
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
    document.body.classList.remove("home");
    document.body.classList.remove("contact");
    document.body.classList.remove("gallery");
    document.body.classList.remove("back");

    const hideButtons = document.querySelectorAll(".hide");
    hideButtons.forEach(button => {
    button.style.display = "none"; 
    });
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
    document.body.classList.remove("home");
    document.body.classList.remove("gallery");
    document.body.classList.remove("back");
    document.body.classList.remove("contact");

    const hideButtons = document.querySelectorAll(".hide");
    hideButtons.forEach(button => {
    button.style.display = "none"; 
    });
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
    document.body.classList.remove("home");
    document.body.classList.remove("gallery");
    document.body.classList.remove("back");
    document.body.classList.remove("contact");

    const hideButtons = document.querySelectorAll(".hide");
    hideButtons.forEach(button => {
    button.style.display = "none"; 
    });
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
    document.body.classList.remove("home");
    document.body.classList.remove("gallery");
    document.body.classList.remove("back");
    document.body.classList.remove("contact");

    const hideButtons = document.querySelectorAll(".hide");
    hideButtons.forEach(button => {
    button.style.display = "none"; 
    });
})


