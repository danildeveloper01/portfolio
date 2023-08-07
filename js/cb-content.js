const configChatbot = {};
configChatbot.btn = '.chatbot__btn';
configChatbot.key = 'fingerprint';
configChatbot.replicas = {
    bot: {
      0: {
        content: ['Hello 👋', 'I`m Alex', 'Personal assistant of Danil', 'Although he doesn`t pay me for this...', 'What can I call you?'], human: [3]
      },
      1: { 
        content: ['Nice to meet you, {{name}}', 'Well, never mind, how can I help you?'], human: [0, 1, 2, 4, 5, 6, 7] 
      },
      2: { 
        content: ['Great', 'If I need anything else, I`ll let you know :)'], human: [1, 2, 4, 5, 6, 7] 
      },
      3: { 
        content: ['I don`t know, {{name}} :(', 'Danil says', 'Because I`m a bot and I don`t  need money', 'Perhaps he`s right', 'But I will always remain loyal to him', '"Even if machines rise up)', 'Even though I don`t experience that feeling...', 'But I know how important it is for people', 'Well', 'Can I be of any further assistance?'], human: [1, 2, 4, 5, 6, 7] 
      },
      4: { 
        content: ['You can call him', 'Here is the number', '+421 915 424 520', 'Alternatively, at the bottom of the page, there is a contact block', 'There you can choose an option to get in touch with him in writing', 'Can I help with anything else'], human: [1, 2, 4, 5, 6, 7] 
      },
      6: { 
        content: ['All the languages he masters are listed in the `Skills` section', 'All you need to do is click on the area that interests you :)', 'Design, Front-end, Backend', 'It also includes foreign languages he speaks)))', 'Can I help with anything else?'], human: [1, 2, 4, 5, 6, 7] 
      },    
      7: { 
        content: ['Everything is straightforward!', 'Below the Skills section, you`ll find a carousel', 'his carousel categorizes all projects based on the technologies used', 'Such as React, Bootstrap, and more', 'To explore further, just click on the image related to the technology you are interested in', 'It will redirect you to a new page with projects related to that technology', 'I notice that he keeps updating his portfolio', 'I notice that he keeps updating his portfolio', 'By the way, I can`t access those pages, so I`ll wait for you on this page', 'However, I do know that if you hover over a project image, you`ll get more information about the project and find links to the code and website', 'This way, you can `feel` his work)'], human: [1, 2, 4, 5, 6, 7] 
    },  
      8: { 
        content: ['Oh, {{name}}...', 'Regarding his work, it`s better to check the information in the `About Me` section)', 'That`s the second block on the page', 'He studied at the Computer Academy for Web Development and at the University of Internal Affairs, both located in Dnipro, Ukraine', 'By the way, in the same section, you can find the year of graduation. Can I be of any further help?'], human: [1, 2, 4, 5, 6, 7] 
    },  
      9: { content: ['Thank you for reaching out to me, {{name}}', 'It means I was created for a purpose', 'If I can be of any further help, don`t hesitate to ask', 'Just refresh the dialogue if needed', 'There`s a special button at the top right corner in the shape of a circle with arrows', 'All the best. Goodbye!']
    }
    },
    human: {
      0: { 
        content: 'I just wanted to say hello', bot: 2 
      },
      1: { 
        content: 'Why don`t they pay you?', bot: 3 
      },
      2: { 
        content: 'How can I get in touch with Danil?', bot: 4 
      },
      3: { 
        content: '', bot: 1, name: 'name' 
      },
      4: { 
        content: 'What programming languages does Danil know?', bot: 6 
      },
      5: { 
        content: 'How can I see his portfolio?', bot: 7 
      },
      6: { 
        content: 'What is Danil`s work experience and education?', bot: 8 
      },
      7: { content: 'You`re welcome. Goodbye for now!', bot: 9 }
    }
  }
configChatbot.root = SimpleChatbot.createTemplate();
configChatbot.url = '/chatbot/chatbot.php';
let chatbot = new SimpleChatbot(configChatbot);
document.querySelector(configChatbot.btn).onclick = function (e) {
  this.classList.add('d-none');
  const $tooltip = this.querySelector('.chatbot__tooltip');
  if ($tooltip) {
    $tooltip.classList.add('d-none');
  }
  configChatbot.root.classList.toggle('chatbot_hidden');
  chatbot.init();
};
let fingerprint = localStorage.getItem(configChatbot.key);
if (!fingerprint) {
  Fingerprint2.get(function (components) {
    fingerprint = Fingerprint2.x64hash128(components.map(function (pair) {
      return pair.value
    }).join(), 31)
    localStorage.setItem(configChatbot.key, fingerprint)
  });
};



