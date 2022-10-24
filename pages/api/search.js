import { apiKey, baseUrl } from '../../lib/tmdb';

export default async (req, res) => {
    let url = `${baseUrl}/search/movie?api_key=${apiKey}&language=pt-BR&query=${req.query.q}`;

    const response = await fetch(url);
    const json = await response.json();

    res.status(200).json({
        list: json.results
    });
}
  
