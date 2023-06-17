import { PieceType } from "../types";

//Defines a class named Pieces
export default class Pieces {
  
    //Declares a private property named type with a type of "tete", "jupe", or "axe"
      private type:PieceType;
     //Constructor function that sets the value of the private property, type, to the value passed as an argument
      constructor(type:PieceType) {
        this.type = type;
      }
     //Public method that returns the value of the private property, type
      public getType():PieceType {
          return this.type;
      }
     //Public method that sets the value of the private property, type, to the value passed as an argument
      public setType(value:PieceType): void {
          this.type = value;
      }
}