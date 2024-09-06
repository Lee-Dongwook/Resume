import { FootprintType } from '@/types/profileData';

import footprints from '@/assets/data/footPrints.json';

export async function getFootPrints() {
  const footprintsList = footprints as FootprintType[];
  const data = await new Promise<FootprintType[]>((resolve) => {
    resolve(footprintsList);
  });

  return data;
}
