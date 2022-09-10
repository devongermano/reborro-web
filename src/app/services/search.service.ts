import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  search(query: string) {
    console.log('SearchService: requestSearch: query: ', query);
  }
}
