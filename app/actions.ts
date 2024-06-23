'use server';

import { deleteUserById } from '@/database/db';
import { revalidatePath } from 'next/cache';

export async function deleteUser(userId: number) {
  // Uncomment this to enable deletion
  // await deleteUserById(userId);
  // revalidatePath('/');
}
