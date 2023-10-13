//-------------------------------------------------------------
import { POST } from '../adapter';
import type { TProduct } from '../models';
//-------------------------------------------------------------
export async function createProduct(product: TProduct) {
  return await POST('/product/new', product);
}
//-------------------------------------------------------------
