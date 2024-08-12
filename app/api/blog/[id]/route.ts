import pool from './../../lib/db';

export async function GET(request: Request, { params }: { params: { id: string } }): Promise<Response> {
    const { id } = params;
    try {
        const { rows } = await pool.query('SELECT * FROM blogs WHERE id = $1', [id]);
        if (rows.length > 0) {
            return new Response(JSON.stringify(rows[0]), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            });
        } else {
            return new Response(
                JSON.stringify({ message: 'Blog not found' }),
                {
                    status: 404,
                    headers: { 'Content-Type': 'application/json' },
                }
            );
        }
    } catch (error) {
        return new Response(
            JSON.stringify({ message: 'Error fetching blog' }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    }
}

export async function PUT(request: Request, { params }: { params: { id: string } }): Promise<Response> {
    const { id } = params;
    const { title, content, author, tags, image } = await request.json();
    try {
        const query = await pool.query(
            'UPDATE blogs SET title = $1, content = $2, author = $3, tags = $4, image = $5 WHERE id = $6',
            [title, content, author, tags, image, id]
        );
        if (query?.rowCount && query?.rowCount > 0) {
            const { rows } = await pool.query('SELECT * FROM blogs WHERE id = $1', [id]);
            return new Response(JSON.stringify(rows[0]), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            });
        } else {
            return new Response(
                JSON.stringify({ message: 'Blog not found' }),
                {
                    status: 404,
                    headers: { 'Content-Type': 'application/json' },
                }
            );
        }
    } catch (error) {
        return new Response(
            JSON.stringify({ message: 'Error updating blog' }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }): Promise<Response> {
    const { id } = params;
    
    try {
        const query = await pool.query('DELETE FROM blogs WHERE id = $1', [id]);

        if (query?.rowCount && query?.rowCount > 0) {
            return new Response(null, { status: 204 }); 
        } else {
            return new Response(
                JSON.stringify({ message: 'Blog not found' }),
                {
                    status: 404,
                    headers: { 'Content-Type': 'application/json' },
                }
            );
        }
    } catch (error) {
        return new Response(
            JSON.stringify({ message: 'Error deleting blog' }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    }
}