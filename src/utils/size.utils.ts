import { ProductSize } from 'src/constants/enums';
import { objectToArray } from './app.utils';

export interface SizeData {
  s?: number;
  m?: number;
  l?: number;
}

export const createSizeData = ({ s, m, l }: SizeData) => {
  return {
    sizes: [
      { size: ProductSize.Small, quantity: s ?? 0 },
      { size: ProductSize.Medium, quantity: m ?? 0 },
      { size: ProductSize.Large, quantity: l ?? 0 },
    ],
  };
};

export const updateSizeData = (sizeData: SizeData, productData: any) => {
  const arraySizeData = objectToArray(sizeData);
  const sizeArray = productData?.sizes?.sizes;

  const size = sizeArray.map((obj: any, index: number) => {
    if (arraySizeData[index] && typeof arraySizeData[index] === 'object') {
      return { ...obj, ...arraySizeData[index] };
    }
    return obj;
  });

  return {
    sizes: size,
  };
};
