const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "Una Mattina",
        artist: 'Ludovico Einaudi',
        url: 'http://m10.music.126.net/20190705040353/e51bf4c6d6750b5e3ababb5a474bfa4e/ymusic/1caf/962e/ecd2/0d1f1e06f20e3a888ff2e672d1643999.mp3',
        cover: 'http://pu0chvxph.bkt.clouddn.com/%E8%A7%A6%E4%B8%8D%E5%8F%AF%E5%8F%8A.jpg',
      }
    ]
});