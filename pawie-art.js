// Pawie's pixel art: the bear, its animation frames' shared palette, and everything it can wear.
//
// Shared by index.html (the mascot) and wardrobe.html (the gallery), so a new accessory only
// has to be drawn here once. The ids below must match auth.js UNLOCK_SCHEDULE, which owns the
// names and the unlock schedule.
//
// The sprite is 16x16. '.' is transparent; other letters index PAL. IDLE is the bear fully
// dressed, exactly as originally drawn, and every animation frame in index.html is a small
// edit of it. Nothing is redrawn per accessory: paint() takes any frame and undoes whatever
// is not being worn:
//   clothes   the jacket, collar and zipper in rows 11 to 14 become the bare cream belly, or
//             take the colours of the chosen outfit. Every Pawie starts with none.
//   hat       a small overlay of rows from the top, drawn last, over the brows
//   glasses, shoes   every Pawie wears them, so the game always passes them on. They can still be
//             switched off (the 'G' pixels in rows 2 to 6 and in row 15 turn to fur), which the
//             gallery does not use but keeps the option open.

window.PawieArt = (function () {
  const PAL = {
    D:'#4a2f17', B:'#8a5a30', L:'#b78a55', C:'#e8d5b0', K:'#20201c', G:'#141414', S:'#4b4e54', W:'#eef0ee',
    R:'#c0392b', Y:'#e6b422', V:'#1f4580', Z:'#2f8fff', J:'#bfe6ff', P:'#f5b7a8', F:'#3f8f3a', M:'#5a3a1e',
    a:'#5d6068', b:'#3f4247', q:'#9aa0aa'
  };

  // the bear, fully dressed
  const IDLE = [
    '..DDD......DDD..',
    '.DDLDD....DDLDD.',
    '..DGGGBLLBGGGD..',   // brows/glasses top, and a highlight on the forehead
    '.DBBBBBBBBBBBBD.',
    '.DGGGGGGGGGGGGD.',   // glasses: top rim
    '.DGBKBGBBGBKBGD.',   // eyes at columns 4 and 11
    '.DGGGGGBBGGGGGD.',   // glasses: bottom rim
    '.DBBBCCCCCCBBBD.',
    '.DBBBCCKKCCBBBD.',
    '.DBBBCCCCCCBBBD.',
    '..DDDDDDDDDDDD..',
    '...DSSWWWWSSD...',   // jacket collar and the tee showing
    '...DBSSSGSSBD...',   // jacket, zipper down the middle
    '..DBBSSSGSSBBD..',
    '...DBBSSGSBBD...',
    '...GGG....GGG...'    // shoes
  ];

  // hats: rows from the top of the sprite, '.' keeps whatever is underneath. They are small, sit
  // between the ears, and each one is the colour of an outfit: grey baseball cap with grey, blue diamond
  // with blue, red apple with red, gold crown with yellow.
  const HATS = {
    none: null,
    cap:     ['................', '......aaaa......', '.....aaqaaa.....', '...bbbbbbbbbb...'],
    diamond: ['.......JJ.......', '......ZJJZ......', '.....VZWJZV.....', '......VZZV......'],
    apple:   ['.......DF.......', '......RRRR......', '.....RPRRRR.....', '.....RRRRRR.....'],
    crown:   ['.....Y.YY.Y.....', '.....YYYYYY.....', '....YYRYYRYY....']
  };

  // outfits: the jacket colour, the collar (the tee under it) and the zipper
  const OUTFITS = {
    none:   null,
    grey:   { S:'#4b4e54', collar:'#eef0ee', zip:'#141414' },
    blue:   { S:'#2f5fa8', collar:'#a9c3ec', zip:'#142642' },
    red:    { S:'#c0392b', collar:'#f2b8b0', zip:'#6e1a12' },
    yellow: { S:'#e2b32a', collar:'#f8e7a4', zip:'#7a5c0a' }
  };

  // Draw one frame with a given look: { hat, outfit, glasses, shoes }, each an id or 'none'.
  // `glasses` and `shoes` are just on or off: any id other than 'none' shows them.
  function paint(ctx, rows, look){
    look = look || {};
    const on = v => !!v && v !== 'none';
    const glasses = on(look.glasses), shoes = on(look.shoes), outfit = OUTFITS[look.outfit] || null;
    ctx.clearRect(0, 0, 16, 16);
    const dot = (x, y, col) => { ctx.fillStyle = col; ctx.fillRect(x, y, 1, 1); };
    for (let y = 0; y < rows.length; y++) for (let x = 0; x < rows[y].length; x++) {
      let c = rows[y][x]; if (c === '.') continue;
      let col = null;
      if (c === 'G' && y >= 2 && y <= 6 && !glasses) c = 'B';
      else if (c === 'G' && y === 15 && !shoes) c = 'B';
      else if (y >= 11 && y <= 14 && (c === 'S' || c === 'W' || c === 'G')) {
        col = outfit ? (c === 'S' ? outfit.S : c === 'W' ? outfit.collar : outfit.zip) : PAL.C;   // bare belly
      }
      dot(x, y, col || PAL[c] || '#f0f');
    }
    if (!glasses) {
      // without glasses the bear needs brows, and a blink needs a closed-eye stroke
      if (rows[4] && rows[4][4] === 'G') [4, 5, 10, 11].forEach(x => dot(x, 4, PAL.M));
      if (rows[5] && rows[5][2] === 'G' && rows[5].indexOf('K') < 0) { dot(4, 5, PAL.M); dot(11, 5, PAL.M); }
    }
    const hat = HATS[look.hat];
    if (hat) for (let y = 0; y < hat.length; y++) for (let x = 0; x < hat[y].length; x++) {
      if (hat[y][x] !== '.') dot(x, y, PAL[hat[y][x]]);
    }
  }

  return { PAL, IDLE, HATS, OUTFITS, paint };
})();
