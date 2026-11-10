const fs=require('fs'),path=require('path');const root=path.resolve(__dirname,'..');fs.mkdirSync(path.join(root,'dist'),{recursive:true});fs.copyFileSync(path.join(root,'site.html'),path.join(root,'dist/index.html'));fs.copyFileSync(path.join(root,'app/globals.css'),path.join(root,'dist/style.css'));for(const f of ['galaxy.js','portrait.jpg','video-poster.jpg','intro.mp4','favicon.svg'])fs.copyFileSync(path.join(root,'public',f),path.join(root,'dist',f));

fs.cpSync(path.join(root,'public/moments'),path.join(root,'dist/moments'),{recursive:true});
