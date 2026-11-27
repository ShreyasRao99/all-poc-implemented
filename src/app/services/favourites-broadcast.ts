import { OnDestroy, Service, signal } from '@angular/core';

@Service()
export class FavouritesBroadcast implements OnDestroy {
  private readonly channel = new BroadcastChannel('pokemon-favourites');
  favourites = signal<null | string[]>(null);

  constructor() {
    const saved = localStorage.getItem('favourites');
    if (saved) this.favourites.set(JSON.parse(saved));

    this.channel.addEventListener('message', (event) => {
      if (event.data?.type !== 'favourites') return;
      alert('i got the message')
      this.setRemoteFavourites(event.data.ids);
    });
  }

  setRemoteFavourites(ids: string[]) {
    this.favourites.set(ids);
    localStorage.setItem('favourites', JSON.stringify(ids));
  }

  setFavourites(ids: string[]) {
    console.log(localStorage.getItem('favourites'),ids)
    this.favourites.set(ids);
    localStorage.setItem('favourites', JSON.stringify(ids));
    this.channel.postMessage({ type: 'favourites', ids });
  }

  ngOnDestroy(): void {
    this.channel.close();
  }
}
