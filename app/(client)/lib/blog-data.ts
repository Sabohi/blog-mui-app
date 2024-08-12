import { sql } from '@vercel/postgres';
import { Destination } from 'core/models/ui.model';

export async function fetchBlogs() {
  try {
    const data = await sql<Destination>`SELECT * FROM blogs`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
};

export async function fetchPostById(id: string) {
    try {
        const data = await sql`
            SELECT * FROM blogs WHERE id = ${id}
        `;
        return data?.rows[0];
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch post data.');
    }
};

