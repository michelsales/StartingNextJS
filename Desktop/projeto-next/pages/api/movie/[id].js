import { apiKey, baseUrl } from '../../../lib/tmdb';

export default async (req, res) => {
     let url = `${baseUrl}/movie/${req.query.id}?api_key=${apiKey}&language=pt-BR`;

     const response = await fetch(url);
     const json = await response.json();

    res.status(200).json({
        info: json
    });
}
  
