import Main from "./src/Main";
import { questionBox } from "./src/modules/constant";
import { Asking, stopPrompt } from "./src/modules/question";

console.log(
  "---------------- WELCOME TO THE PISTONS ASSEMBLY FACTORY ----------------"
);

const main = new Main();


Asking(questionBox).then((answer)=>{
    if(answer.toLocaleLowerCase().startsWith('y')){
        main.productPistonPerso();

    }else if (answer.toLocaleLowerCase().startsWith('n')){
        main.productPistonWithNumber();
    }else {
        console.log("This option don't match any possibles option");
        stopPrompt();
    }
})