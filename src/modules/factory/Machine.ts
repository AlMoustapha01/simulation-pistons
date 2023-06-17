import Pieces from "./Pieces";

/*This is the Machine class, which represents a machine in a factory. It has a type, 
a boolean indicating if it's broken, and some processing and reparation times. 
*/
export default class Machine {
    private type: string;
    private isBroken: boolean;
     // A static object with processing times for different types of pieces
    private static processingTime: { [key: string]: number } = {
        tete: 2,
        jupe: 3,
        axe: 2.5,
    };
     // A static reparation time generated random number between 5 and 10
    private static reparationTime: number = Math.floor(Math.random() * (10 - 5 + 1) + 5);
      constructor(type: string) {
        this.type = type;
        this.isBroken = false;
    }
     // Getter for the type property
     public getType(): string {
        return this.type;
    }
     // Getter for the isBroken property
     public getIsBroken(): boolean {
        return this.isBroken;
    }
     // Setter for the isBroken property
     public setIsBroken(value: boolean): void {
        this.isBroken = value;
    }
     // Setter for the type property
    public setType(value: string): void {
        this.type = value;
    }
     /*
    This method takes a piece as argument and returns the corresponding processing time, 
    or throws an error if the piece type is invalid.
    */
    public processPiece(piece: Pieces): number {
        if (!Machine.processingTime.hasOwnProperty(piece.getType())) {
            throw new Error("Invalid piece type");
        }
        return Machine.processingTime[piece.getType()];
    }
     // Returns the reparation time
    public repair(): number {
        return Machine.reparationTime;
    }
}