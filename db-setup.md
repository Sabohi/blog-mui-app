import { db } from '@vercel/postgres';
import { blogs } from 'app/lib/placeholder-data';

const client = await db.connect();

async function seedBlogs() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS blogs (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      title VARCHAR(100) NOT NULL,
      author VARCHAR(50) NOT NULL,
      tags VARCHAR(100) NOT NULL,
      image VARCHAR(250) NOT NULL,
      content TEXT NOT NULL 
    );
  `;

  const insertedBlogs = await Promise.all(
    blogs.map(async (blog) => {
      return client.sql`
        INSERT INTO blogs (id, title, author, tags, image, content)
        VALUES (${blog.id}, ${blog.title}, ${blog.author}, ${blog.tags}, ${blog.image}, ${blog.content})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedBlogs;
}

export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedBlogs();
    await client.sql`COMMIT`;

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
