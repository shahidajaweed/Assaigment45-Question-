interface Album {
    artist: string;
    title: string;
    tracks?: number;
}
function make_album(artist: string, title: string, tracks?: number): Album {
    const album: Album = { artist, title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = make_album("Artist One", "The First Album");
const album2 = make_album("Artist Two", "The Second Album");
const album3 = make_album("Artist Three", "The Third Album", 12);

console.log(album1);
console.log(album2);
console.log(album3);
