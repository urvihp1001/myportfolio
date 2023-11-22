const intro=
"I am a student pursuing BSc. IT from Jai Hind College. I have a deep interest in Cybersecurity and AI. Know more about me...";
const education=
"I have been an ICSE student from JB Petit High School for Girls, and an HSC Computer Science Student of Jai Hind College.";
const projects=
"I love taking up unique projects that expand my technical knowledge.";
const skills=
"I have 4 years of experience in programming, Java and Python being my go-to languages. I am also comfortable with SQL Databases, and have a good understanding of DSA, Statistics and Calculus."
const achieve=
"I have a CGPA of 10.0 (as of Semester 2). I also hold a National Scholarship for scoring in the top 1% of my state in the HSC Exams."

class ActionProvider {
constructor(createChatBotMessage, setStateFunc){
    this.createChatBotMessage=createChatBotMessage;
    this.setState=setStateFunc;
}
greet()
{
    const greetingMessage=this.createChatBotMessage(
        'AI Chatbot in development...'
    );
    this.updateChatbotState(greetingMessage);
}
handleGoodMood()
{
    const message=this.createChatBotMessage(intro,{
        widget:'personalOptions',
    });
    this.updateChatbotState(message);
}
async handleBadMood()
{
    const jokeData= await(
        await fetch('https://v2.jokeapi.dev/joke/Programming?type=single') 
    ).json();
    const message=this.createChatBotMessage(
        'Let me tell you a joke: ${jokeData.joke}',
        {
            widget:'jokeOptions',
        }
    );
    this.updateChatbotState(message);
}
async handleBadMoodAgain()
{
    const jokeData= await(
        await fetch('https://v2.jokeapi.dev/joke/Programming?type=single') 
    ).json();
    const message=this.createChatBotMessage(
        'Another one: ${jokeData.joke}',
        {
            widget:'jokeOptions',
        }
    );
    this.updateChatbotState(message);
}

}
export default ActionProvider;