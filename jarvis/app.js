
const btn = document.querySelector('.talk')
const content = document.querySelector('.content')


function speak(text){
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe(){
    var day = new Date();
    var hour = day.getHours();

    if(hour>=0 && hour<12){
        speak("Good Morning Boss...")
    }

    else if(hour>12 && hour<17){
        speak("Good Afternoon Master...")
    }

    else{
        speak("Good Evenining Sir...")
    }

}

window.addEventListener('load', ()=>{
    speak("Initializing JARVIS..");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition =  new SpeechRecognition();

recognition.onresult = (event)=>{
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());

}

btn.addEventListener('click', ()=>{
    content.textContent = "Listening...."
    recognition.start();
})

function takeCommand(message){
    if(message.includes('hey') || message.includes('hello')){
        speak("Hello Boss, How May I Help You?");
    }

    

    else if (message.includes('are you there') || message.includes('jarvis activate'))
        speak("jarvis activated boss tell me how can i help you");

    else if (message.includes('wake up daddy home') || message.includes('wake up daddy home'))
        speak("welcome home sir great to see you again");

    else if (message.includes('who made you') || message.includes('who creates you'))
        speak("i made by Mr. Pranav kashyap");

    else if (message.includes('jarvis how are you') || message.includes('what about you jarvis'))
        speak("i am fine sir ");

     else if (message.includes('what is your name') || message.includes('your good name'))
        speak("my name is Jarvis i am your virtual assistant");

     else if (message.includes('good job jarvis') || message.includes('excellent work jarvis'))
        speak("Thankyou sir its my pleasure");

     else if(message.includes("open whatsapp")){
        window.open("https://web.whatsapp.com/", "_blank");
        speak("Opening whatsapp...");
     }

     else if (message.includes("open netflix")){
        window.open("https://www.netflix.com/in/","_blank");
        speak("Opening netflix...");
     }

     else if (message.includes("open flipkart")){
        window.open("https://www.flipkart.com/","_blank");
        speak("Opening flipkart...");
     }
     else if (message.includes("open meesho")){
        window.open("https://www.meesho.com/","_blank");
        speak("Opening meesho...");
     }
     else if (message.includes("open amazon")){
        window.open("https://www.amazon.com/","_blank");
        speak("Openin amazon...");
     }
      
     else if(message.includes("open github")){
        window.open("https://github.com/","_blank");
        speak("opening github...");
     }

     else if (message.includes("open Linkedin")){
        window.open("https://www.linkedin.com/feed/","_blank");
        speak("opening LinkedIn...");
     }

     else if(message.includes("open instagram")){
        window.open("https://www.instagram.com/?hl=en","_blank");
        speak("opening instagram...");
     }

    else if(message.includes("open google")){
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    }
    else if(message.includes("open youtube")){
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...");
    }
    else if(message.includes("open facebook")){
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...");
    }
    else if(message.includes("open chatgpt")){
        window.open("https://chatgpt.com/", "_blank");
        speak("Opening chatgpt...");
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
	    speak(finalText);
  
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speak(finalText);
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speak(finalText);
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speak(finalText);
    }

    else if(message.includes('calculator')) {
        window.open('calculator:///')
        const finalText = "Opening calculator";
        speak(finalText);
    }
        
    else if (message.includes('spotify')) {
        window.open('spotify:///')
        const finalText = "Open spotify"
        speak(finalText);
    }
       

   
    
    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speak(finalText);

       
    }
    
    
}