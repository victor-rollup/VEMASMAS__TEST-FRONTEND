import Backend from '@/backend';
import type { TProduct } from '@/backend/models';

void (async (product: TProduct) => Backend.POST('/product/new', product) )({
  name: 'PECHUGA SIN HUESO 3/4 PK',
  weight: {
    minimum: 3.54,
    maximum: 2.45,
  },
  piecesPerBox: 4,
});