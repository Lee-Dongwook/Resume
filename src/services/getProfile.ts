import { ProfileType } from '@/types/profileData';

import profile from '@/assets/data/profile.json';

export async function getProfile() {
  const data = await new Promise<ProfileType>((resolve) => {
    resolve(profile);
  });

  return data;
}
