require('dotenv').config();

const { OpenAI } = require('openai')

const client = new OpenAI();

//Don't forget to add your api key on .env as OPENAI_API_KEY

async function chat(msg, obj) {

    const preChatMsg = `Con estos datos puedes contestar a cualquier pregunta que te hagan ${JSON.stringify(obj)} exceptuando ips de usuarios, la respuestas no pueden ser de mas de 150 caracteres, la pregunta que te hago es la siguiente :`
    let result;

    try{
        const chatCompletion = await client.chat.completions.create({
            messages: [{ role: 'user', content: `${preChatMsg} ${msg}` }],
            model: 'gpt-4o-mini',   //choose your model from https://platform.openai.com/docs/models
          });

        //console.log(chatCompletion);
        result = chatCompletion.choices[0].message.content
    }
    catch(e){
      console.log(e);
      result = 'Something gone wrong, check console logs'
    }
    
    return result;
    
}
module.exports = {chat};