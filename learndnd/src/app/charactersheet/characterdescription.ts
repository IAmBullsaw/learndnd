export interface Feature {
  key: string;
  valute: string;
}

export interface CharacterDescription {
  age: number;
  height: number;
  weight: number;
  skincolor: string;
  hairstyle: string;
  haircolor: string;
  eyecolor: string;
  other: Feature[];
}
