"use strict";
function make_album(artist, title, tracks) {
    const album = { artist, title };
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
//const albumWithTracks = make_album("Artist Four", "The Forth Album", 12);
//console.log(albumWithTracks);
