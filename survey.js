
const readline = require('readline');

const paragraph = {
  name: "",
  live: '',
  music:'',
  favMeal: '',
  favFood: '',
  sport: '',
  weird: ''
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What is your name? ', (answer) => {
  paragraph.name = answer;
  
  rl.question('Where do you live?', (answer) => {
    paragraph.live = answer;
    
    rl.question('What music do you do listen too?', (answer) => {
      paragraph.music = answer;
      
    
      rl.question('Your favorite meal of the day is?', (answer) => {
        paragraph.favMeal = answer;
    
        rl.question('Your favorite thing to eat during your favorite meal?', (answer) => {
          paragraph.favFood = answer;
      
          rl.question('What sports do you play?', (answer) => {
            paragraph.sport = answer;
        
            rl.question('What makes you weird?', (answer) => {
              paragraph.weird = answer;
          
            


              console.log(
                `Hi my name is ${paragraph.name}.I grew up in the ${paragraph.live} area. Survived high school by listening too ${paragraph.music} it kept me sane.\n My favorite meal of the day is ${paragraph.favMeal} and specificly love ${paragraph.favFood}. In my free time I like to play ${paragraph.sport} which keeps \nme fit. What makes me diffrent from everyone else is ${paragraph.weird}.`);


              rl.close();
            });

          });

        });

      });

    });
    
  });
   
});


