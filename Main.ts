import AssemblingLine from "./AssemblingLine";

class Main {

  private numPiston: number;

  constructor(numPiston:number){
    this.numPiston = numPiston;
  }

  public productPiston():void {

    const production = new AssemblingLine();
    const temps = production.productionSimulation(this.numPiston)
    console.log(temps);
      
  }
}

const main = new Main(100);

main.productPiston()