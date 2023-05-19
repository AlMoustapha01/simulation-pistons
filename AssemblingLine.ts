import Machine from "./Machine";
import Pieces from "./Pieces";
import { PieceType } from "./type";

// Class representing an assembling line
export default class AssemblingLine {
    private carton: Pieces[]; // Array of Pieces to be assembled into pistons
    private machines: Machine[]; // Array of Machines that process Pieces into pistons
     // Constructor that initializes the carton and machines arrays
    constructor() {
      this.carton = [];
      this.machines = [];
    }
     // Method to add a Piece to the carton
    public setPiece(piece: Pieces): void {
      this.carton.push(piece);
    }
     // Method to shuffle the carton randomly
    private suffleCarton(): void {
      // Sorting the carton using a random sort function
      this.carton.sort(() => Math.random() - 0.5);
    }
     // Method to set the Pieces in the carton to a specific array of Pieces
    public setCarton(value: Pieces[]): void {
      this.carton = value;
    }
     // Method to add a Machine to the machines array
    public setMachine(machine: Machine): void {
      this.machines.push(machine);
    }
     // Method to fill the carton with a specified number of pistons
    private fillCarton(numPistons: number): void {
      const numPieces = numPistons * 3;
      for (let i = 0; i < numPieces; i++) {
        // Creating a new Piece and adding it to the carton
        const pieceType = i % 3;
        const types: PieceType[] = ["tete", "axe", "jupe"];
        const piece = new Pieces(types[pieceType]);
        this.setPiece(piece);
      }
      this.suffleCarton();
    }
     // Method to sort the Pieces in the carton by their type
    private trierPieces(carton: Pieces[]): {
      tete: Pieces[];
      jupe: Pieces[];
      axe: Pieces[];
    } {
      // Object to store the sorted Pieces
      const pieces: {
        tete: Pieces[];
        jupe: Pieces[];
        axe: Pieces[];
      } = { tete: [], jupe: [], axe: [] };
       // Sorting the Pieces by type
      for (const piece of carton) {
        pieces[piece.getType()].push(piece);
      }
      return pieces;
    }
     // Method to initialize the Machines
    private initializeMachines(): void {
      // Adding the four Machines to the machines array
      this.machines.push(new Machine("MA"));
      this.machines.push(new Machine("MJ"));
      this.machines.push(new Machine("MT"));
      this.machines.push(new Machine("MP"));
    }
     // Method to simulate the production of a specific number of pistons
    public productionSimulation(numPistons: number) {
      let pistonsAssembled = 0; // Counter for the number of pistons assembled
      let totalTime = 0; // Counter for the total time taken to assemble all the pistons
      this.initializeMachines(); // Initializing the Machines
      this.fillCarton(numPistons); // Filling the carton with the Pieces needed to assemble the pistons
       // Checking that there are enough Pieces to assemble all the pistons
      if (!this.carton || this.carton.length < numPistons * 3) {
        throw new Error(
          "carton must contain enough pieces to assemble all the pistons"
        );
      }
       // Checking that the number of pistons is a positive integer
      if (!numPistons || numPistons < 1) {
        throw new Error("numPistons must be a positive integer");
      }
       // Logging the start of the simulation
      console.log(
        `Assembling ${numPistons} pistons from a carton of ${this.carton.length} pieces`
      );
       // Loop that simulates the assembly of the pistons
      while (pistonsAssembled < numPistons) {
        // Sorting the Pieces in the carton by their type
        const { tete, jupe, axe } = this.trierPieces(this.carton);
         // Checking if there are enough Pieces of each type to assemble a piston
        if (tete.length > 0 && jupe.length > 0 && axe.length > 0) {
          const brokenMachines: Machine[] = []; // Array to store Machines that are broken
          const teteInProcessing = tete[0]; // Getting the first Piece of type "tete"
          const axeInProcessing = axe[0]; // Getting the first Piece of type "axe"
          const jupeInProcessing = jupe[0]; // Getting the first Piece of type "jupe"
          const batch = [teteInProcessing, axeInProcessing, jupeInProcessing]; // Creating an array of the three Pieces in the batch
          let maxProcessingTime = 0; // Variable to store the maximum time taken to process a Piece in the batch
           // Looping through the Machines
          for (const machine of this.machines) {
            // Checking if the Machine is not broken
            if (!machine.getIsBroken()) {
              // Processing each Piece in the batch and storing the processing time for each Piece
              const processingTime = batch.map((piece) =>
                piece && machine.processPiece(piece)
              );
              // Finding the maximum processing time for all the Pieces in the batch
              maxProcessingTime = Math.max(...processingTime);
              // Randomly breaking the Machine with a probability of 0.25
              if (Math.random() <= 0.25) {
                // Logging the machine which is broken
                console.log(
                  `${machine.getType()} is broken...`
                );
                machine.setIsBroken(true);
              }
            } else {
              // Storing the broken Machines in the brokenMachines array
              brokenMachines.push(machine);
            }
          }
           // Checking if there are any broken Machines
          if (brokenMachines.length > 0) {
            // Choosing a random broken Machine to repair
            const machineEnPanne =
              brokenMachines[Math.floor(Math.random() * brokenMachines.length)];
            // Repairing the broken Machine and adding the repair time to the totalTime counter
            const tempsReparation = machineEnPanne.repair();
            totalTime += tempsReparation;
            // Logging the machine which is broken
            console.log(
              `${machineEnPanne.getType()} is repair...`
            );
            machineEnPanne.setIsBroken(false);
          }
           // Adding the maximum processing time to the totalTime counter
          totalTime += maxProcessingTime;
           // Removing the used Pieces from the carton
          tete.splice(0, 1);
          jupe.splice(0, 1);
          axe.splice(0, 1);
           // Setting the carton to the remaining Pieces
          this.setCarton([...tete, ...jupe, ...axe]);
           // Incrementing the pistonsAssembled counter
          pistonsAssembled++;
        }
         // Incrementing the totalTime counter and logging the current number of pistons assembled
        totalTime++;
        console.log(
          `${pistonsAssembled} piston assembled  in ${totalTime} minutes`
        );
      }
       // Logging the end of the simulation and returning the totalTime counter
      console.log(
        `Finished assembling ${numPistons} pistons in ${totalTime} minutes`
      );
      return totalTime;
    }
  }