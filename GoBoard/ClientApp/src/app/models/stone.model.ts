export enum StoneColour { Black, White }

export class StoneModel {
  public readonly x: number;
  public readonly y: number;
  public readonly colour: StoneColour;

  public static colourToString(colour: StoneColour): string {
    if (colour === StoneColour.Black) {
      return 'Black';
    }
    return 'White';
  }

  constructor(x: number, y: number, colour: StoneColour) {
    this.x = x;
    this.y = y;
    this.colour = colour;
  }
}
