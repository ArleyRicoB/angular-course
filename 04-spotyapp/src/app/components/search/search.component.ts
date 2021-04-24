import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent implements OnInit {
  artists: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) {}

  ngOnInit(): void {}

  buscar(termino: string) {
    this.loading = false;
    this.spotify.getArtists(termino).subscribe((data: any) => {
      this.loading = false;
      this.artists = data;
    });
  }
}
