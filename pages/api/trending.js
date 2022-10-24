import { apiKey, baseUrl } from '../../lib/tmdb';

export default async (req, res) => {

    const response = await fetch(`${baseUrl}/trending/movie/week?api_key=${apiKey}&language=pt-BR`);
    const json = await response.json();

    res.status(200).json({
        list: json.results
    });
}
  
