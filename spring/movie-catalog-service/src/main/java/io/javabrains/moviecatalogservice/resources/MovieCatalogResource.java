package io.javabrains.moviecatalogservice.resources;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import io.javabrains.moviecatalogservice.models.CatalogItem;
import io.javabrains.moviecatalogservice.models.Movie;
import io.javabrains.moviecatalogservice.models.Rating;

@RestController
@RequestMapping("/catalog")
public class MovieCatalogResource {
	

	@RequestMapping("/{userId}")
	public List<CatalogItem> getCalalog(@PathVariable("userId") String userId){
		
		RestTemplate restTemplate = new RestTemplate();
		//Movie movie = restTemplate.getForObject("http://localhost:8081/movies/foo", Movie.class);
		
		//rating
		List<Rating> ratings = Arrays.asList(
		
				new Rating("1234", 4),
				new Rating("5678", 3)
		
		);
		
		return ratings.stream().map(rating -> {
			Movie movie = restTemplate.getForObject("http://localhost:8082/movies/" + rating.getMovieId(), Movie.class);
			return new CatalogItem(movie.getName(), "Desc", rating.getRating());
		}).collect(Collectors.toList());
		
		
		
		// self
//		return Collections.singletonList(
//				new CatalogItem("Transformers", "Test", 4)
//		);
				
	}
}
