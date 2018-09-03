var playlist = new Object({artistName:'song'});
function updatePlaylist(playlist, artistName, song){
  playlist[artistName] = song
  return playlist;
}