import { getHeapStatistics } from 'v8';
import { Injectable } from '@angular/core';
import {Jsonp, URLSearchParams} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MoviesService {
  apikey: string;

  constructor(private _jsonp: Jsonp) {
    this.apikey = 'ff9e375eafa29aa4da03da90a2ce235d';
    console.log('Movies service is ready');
  }

  getPopular() {
    var search = new URLSearchParams();
    search.set('sort_by','popularity.desc');
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }

  getInTheaters() {
    var search = new URLSearchParams();
    search.set('primary_release_date.gt', '2015-10-20');
    search.set('primary_release_date.lte', '2015-12-20');
    search.set('sort_by','popularity.desc');
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }

  getMovie(id: string) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/movie/'+ id +'?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }

  searchMovies(searchStr: string) {
    var search = new URLSearchParams();
    search.set('sort_by','popularity.desc');
    search.set('query', searchStr);
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }

}
