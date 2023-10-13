//----------------------------------------------------------------------------------
export declare interface TProduct {
  name: string;
  weight: TProductWeight;
  isEnable?: boolean;
  piecesPerBox: number;
}
export declare interface TProductWeight {
  minimum: number;
  maximum: number;
}
//----------------------------------------------------------------------------------