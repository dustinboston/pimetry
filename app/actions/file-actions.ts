import { db } from '@/app/lib/db';
import { files } from '@/db/schema';
import { eq, and } from 'drizzle-orm';
import { getUser } from './user-actions';

export type NewFile = typeof files.$inferInsert;
export type GetFile = typeof files.$inferSelect;
export type PutFile = Partial<Omit<GetFile, 'id'>> & { id: string };

export async function getFiles() {
  try {
    const user = await getUser();
    return await db.query.files.findMany({
      where: (fields) => eq(fields.userId, user.id!),
    });
  } catch (e) {
    console.log(e);
  }
}

export async function getFile(id: string) {
  try {
    const user = await getUser();
    return await db.query.files.findFirst({
      where: (fields) => and(eq(fields.userId, user.id!), eq(fields.id, id)),
    });
  } catch (e) {
    console.log(e);
  }
}

export async function insertDefaultFile() {
  try {
    const user = await getUser();
    const date = new Date();
    const name = date.toLocaleDateString(undefined, {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });

    const file: NewFile = {
      date,
      name,
      userId: user.id!,
      text: '',
      type: 'note',
      provider: '',
    };

    return await db
      .insert(files)
      .values(file)
      .returning({ insertedId: files.id });
  } catch (e) {
    console.log(e);
  }
}

export function insertFile(file: NewFile) {
  return db.insert(files).values(file).returning({ insertedId: files.id });
}

export function updateFile(file: PutFile) {
  return db.update(files).set(file).where(eq(files.id, file.id));
}

export async function deleteFile(fileId: string) {
  try {
    const user = await getUser();
    await db
      .delete(files)
      .where(and(eq(files.id, fileId), eq(files.userId, user.id!)));
  } catch (e) {
    console.log(e);
  }
}
