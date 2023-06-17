import { questionNumPiston } from "./modules/constant";
import AssemblingLine from "./modules/factory/AssemblingLine";
import Pieces from "./modules/factory/Pieces";
import { Asking, stopPrompt } from "./modules/question";

export default class Main {
  private production = new AssemblingLine();

  public productPistonWithNumber() {
    Asking(questionNumPiston).then((answer) => {
      const temps = this.production.productionSimulation(parseInt(answer));
      console.log(temps);
      stopPrompt();
    });
  }

  public productPistonPerso() {
    this.production.productionSimulationPerso().then((temps)=>{
      console.log(temps);
      stopPrompt();
    });

  }

  // public productPistonWithCarton(carton:Pieces[]):void {
  //   const temps = this.production.productionSimulationWithCarton(carton);
  //   console.log(temps);
  // }
}
