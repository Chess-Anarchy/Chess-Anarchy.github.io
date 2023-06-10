const hello = document.getElementById("hello")
const hello_text = "Hello yes this is the anarchy chess about page(made by zw!)".split("")
const introduction = document.getElementById("introduction")
const introduction_text = "Here you can learn about Anarchy chess's history!(why)".split("")
const logotext = document.getElementById("logotext")
const logotext_text = "This is anarchy chess's logo!".split("")
const logo = document.getElementById("logo2")
const homebutton = document.getElementById("back")
const contributor_header = document.getElementById("contributor_header")
const contributor_header_text = "Website Contributors".split("")
const Brabygg = document.getElementById("Brabygg")
const AlvoSil = document.getElementById("AlvoSil")
const Lordaurum = document.getElementById("Lordaurum")
const Pos3odon = document.getElementById("Pos3odon")
const Shubham = document.getElementById("Shubham")
const zw = document.getElementById("zw")
//wait who even is kujojotaro- (in the discord)
contributor_array = "Brabygg AlvoSil Lordaurum Pos3odon Shubham zw".split(" ")
const historyheader = document.getElementById("historyheader")
const historyheader_text = "Anarchy Chess History".split("")
const enpassant_history = document.getElementById("googleenpassant_history")
const enpassant_history_text = "Google En Passant/Holy hell: Originates from this post, where a user named KnottyDuck commented 'Google en passant'. Blaky039, the original poster, then replied 'Holy hell'.".split("")
const enpassant_post = document.getElementById("enpassantpost")
const enpassant_example = document.getElementById("enpassantexample")
const enpassant_example_show = document.getElementById("example")
const enpassant_example_show_text = "An example of en passant is shown above.".split("")
const logoissue = document.getElementById("logoissues")
const logoissue_text = "huh the logo looks a bit broken, give me some time..".split("")
const fixedlogo = document.getElementById("fixed")
const fixedlogo_text = "there!".split("")
//scripts!!
function wait(time) {
    return new Promise(resolve => {
    setTimeout(resolve, time);
    });
    }
    //random int
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    //brings user back home!
    homebutton.addEventListener('click', function() {
        window.location.href = "fp.html";
    })
    //displays welcoming speech?...
    async function displayHello() {
        for (let i=0; i < hello_text.length; i++) {
        hello.textContent = hello.textContent + hello_text[i]
        await wait(25)
        }
    }
    //displays what to expect
    async function displayintroduction() {
        await wait(25 * parseInt(hello_text.length))
        await wait(1000)
        for (let i=0; i < introduction_text.length; i++) {
        introduction.textContent = introduction.textContent + introduction_text[i]
        await wait(25)
        }
    }
    //displays text showing logo!
    async function displaylogotext() {
        await wait(30 * parseInt(hello_text.length))
        await wait(30 * parseInt(introduction_text.length))
        await wait(1000)
        for (let i=0; i < logotext_text.length; i++) {
        logotext.textContent = logotext.textContent + logotext_text[i]
        await wait(25)
        }
    }
    //displays actual logo
    async function showlogo() {
        await wait(25 * parseInt(hello_text.length))
        await wait(25 * parseInt(introduction_text.length))
        await wait(25 * parseInt(logotext_text.length))
        await wait(1750)
        logo.style.display = "block";
        }
    //displays header about contributors!
    async function displaycontributorheader() {
        await wait(30 * parseInt(hello_text.length))
        await wait(30 * parseInt(introduction_text.length))
        await wait(25 * parseInt(logotext_text.length))
        await wait(1750)
        await wait(1000)
        for (let i=0; i < contributor_header_text.length; i++) {
        contributor_header.textContent = contributor_header.textContent + contributor_header_text[i]
        await wait(20)
        }
    }
    //displays contributors
    async function displaycontributor(elementId) {
        await wait(30 * parseInt(hello_text.length));
        await wait(30 * parseInt(introduction_text.length));
        await wait(25 * parseInt(logotext_text.length));
        await wait(25 * parseInt(contributor_header_text.length));
        await wait(1750);
        await wait(2000);
        
        const element = document.getElementById(elementId);
        let texttowrite = "";
        
        if (elementId == "Brabygg") {
          texttowrite = "Brabygg";
        } else if (elementId == "AlvoSil") {
          texttowrite = "AlvoSil";
        } else if (elementId == "Lordaurum") {
          texttowrite = "Lordaurum";
        } else if (elementId == "Pos3odon") {
          texttowrite = "Pos3odon";
        } else if (elementId == "Shubham") {
          texttowrite = "Shubham";
        } else if (elementId == "zw") {
          texttowrite = "zw";
        }
        
        for (let i = 0; i < texttowrite.length; i++) {
          element.textContent = element.textContent + texttowrite[i];
          await wait(20);
        }
      }
      //shows cool box!
      async function showContainer() {
        await wait(30 * parseInt(hello_text.length))
        await wait(30 * parseInt(introduction_text.length))
        await wait(25 * parseInt(logotext_text.length))
        await wait(1750)
        await wait(1000)
        var container = document.getElementById("box");
        container.style.display="inline-block";
      }
      //shows history header
      async function displayhistoryheader() {
        await wait(30 * parseInt(hello_text.length))
        await wait(30 * parseInt(introduction_text.length))
        await wait(25 * parseInt(logotext_text.length))
        await wait(25 * parseInt(contributor_header_text.length));
        await wait(3750)
        await wait(1000)
        for (let i=0; i < historyheader_text.length; i++) {
        historyheader.textContent = historyheader.textContent + historyheader_text[i]
        await wait(20)
        }
    }
    //shows google en passant/holy hell history
    async function displayhistory() {
        await wait(30 * parseInt(hello_text.length))
        await wait(30 * parseInt(introduction_text.length))
        await wait(25 * parseInt(logotext_text.length))
        await wait(25 * parseInt(contributor_header_text.length));
        await wait(25 * parseInt(historyheader_text.length));
        await wait(3750)
        await wait(1000)
        for (let i=0; i < enpassant_history_text.length; i++) {
        enpassant_history.textContent = enpassant_history.textContent + enpassant_history_text[i]
        await wait(20)
        }
    }
    //displays actual post from above meme
    async function showpost() {
        await wait(30 * parseInt(hello_text.length))
        await wait(30 * parseInt(introduction_text.length))
        await wait(25 * parseInt(logotext_text.length))
        await wait(25 * parseInt(contributor_header_text.length));
        await wait(25 * parseInt(historyheader_text.length));
        await wait(25 * parseInt(historyheader_text.length))
        await wait(5750)
        enpassant_post.style.display = "block";
        }
    //displays example of en passant
    async function showexample() {
        await wait(30 * parseInt(hello_text.length))
        await wait(30 * parseInt(introduction_text.length))
        await wait(25 * parseInt(logotext_text.length))
        await wait(25 * parseInt(contributor_header_text.length));
        await wait(25 * parseInt(historyheader_text.length));
        await wait(25 * parseInt(enpassant_history_text.length))
        await wait(5750)
        enpassant_example.style.display = "block";
        }
    //shows example text of en passantiahsnasifm dies
    async function displayexampletext() {
        await wait(30 * parseInt(hello_text.length))
        await wait(30 * parseInt(introduction_text.length))
        await wait(25 * parseInt(logotext_text.length))
        await wait(25 * parseInt(contributor_header_text.length));
        await wait(25 * parseInt(historyheader_text.length));
        await wait(25 * parseInt(enpassant_history_text.length));
        
        await wait(3750)
        await wait(1000)
        for (let i=0; i < enpassant_example_show_text.length; i++) {
        enpassant_example_show.textContent = enpassant_example_show.textContent + enpassant_example_show_text[i]
        await wait(20)
        }
    }
    //logo issues!?
    async function displaylogoissuetext() {
        await wait(30 * parseInt(hello_text.length))
        await wait(30 * parseInt(introduction_text.length))
        await wait(25 * parseInt(logotext_text.length))
        await wait(25 * parseInt(contributor_header_text.length));
        await wait(25 * parseInt(historyheader_text.length));
        await wait(25 * parseInt(enpassant_history_text.length));
        
        await wait(3750)
        await wait(1000)
        await wait(20000)
        for (let i=0; i < logoissue_text.length; i++) {
        logoissue.textContent = logoissue.textContent + logoissue_text[i]
        await wait(20)
        }
    }
    //logo fix?!
    async function fixlogotext() {
        await wait(30 * parseInt(hello_text.length))
        await wait(30 * parseInt(introduction_text.length))
        await wait(25 * parseInt(logotext_text.length))
        await wait(25 * parseInt(contributor_header_text.length));
        await wait(25 * parseInt(historyheader_text.length));
        await wait(25 * parseInt(enpassant_history_text.length));
        
        await wait(3750)
        await wait(1000)
        await wait(37000)
        for (let i=0; i < fixedlogo_text.length; i++) {
        fixedlogo.textContent = fixedlogo.textContent + fixedlogo_text[i]
        await wait(20)
        }
    }
    //moves image around!
    async function movearound() {
        await wait(30 * parseInt(hello_text.length))
        await wait(30 * parseInt(introduction_text.length))
        await wait(25 * parseInt(logotext_text.length))
        await wait(25 * parseInt(contributor_header_text.length));
        await wait(25 * parseInt(historyheader_text.length));
        await wait(25 * parseInt(enpassant_history_text.length));
        
        await wait(3750)
        await wait(1000)
        await wait(25000)
        for (let i=0; i < 2500; i++) {
            logo.style.position = "absolute";
            logo.style.top = parseInt(getRandomInt(-100,100)) + "px";
            logo.style.left = parseInt(getRandomInt(-100,100)) + "px";
        await wait(2)
        }
        logo.style.position = "inline";
        logo.style.top = "-20px";
        logo.style.left = "80%";
        logo.style.transform = "translate(-50%, -50%)";
        logo.style.textAlign = "center";

        }
    //fast spinning logo!!
    let animationDuration = 5; // Initial animation duration in seconds
    function increaseAnimationSpeed() {
    animationDuration -= 0.01; // Decrease animation duration
    logo.style.animationDuration = animationDuration + "s"; // Update CSS animation duration
    }



//actually running the functions!
displayHello()
displayintroduction()
displaylogotext()
showlogo()
showContainer()
displaycontributorheader()
displaycontributor("Brabygg")
displaycontributor("AlvoSil")
displaycontributor("Lordaurum")
displaycontributor("Pos3odon")
displaycontributor("Shubham")
displaycontributor("zw")
displayhistoryheader()
displayhistory()
showpost()
showexample()
displayexampletext()
displaylogoissuetext()
fixlogotext()
movearound()
setInterval(increaseAnimationSpeed, 100);