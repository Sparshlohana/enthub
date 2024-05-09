import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req) {
    const query = req.nextUrl.searchParams.get("query");
    const page = req.nextUrl.searchParams.get("page");
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
        params: {
            query: query,
            include_adult: false,
            language: 'en-US',
            page: page
        },
        headers: {
            'Authorization': `Bearer ${process.env.TMDBID}`,
            'accept': 'application/json'
        }
    });
    return NextResponse.json(response.data);
}
