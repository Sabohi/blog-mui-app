import pool from './../lib/db';

export async function GET() {
    try {
        const { rows } = await pool.query('SELECT * FROM blogs');
        return new Response(JSON.stringify(rows), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(
        JSON.stringify({ message: 'Error fetching data' }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    }
}

export async function POST(request: Request) {
    try {
        const { title, content, author, tags, image } = await request.json();
        console.log(title, content, author, tags, image);
        const result = await pool.query(
        'INSERT INTO blogs (title, content, author, tags, image) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [title, content, author, tags, image]
        );
        return new Response(JSON.stringify(result.rows[0]), {
            status: 201,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(
            JSON.stringify({ message: 'Error creating blog' }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    }
}