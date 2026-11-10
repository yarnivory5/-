const fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'..'),dist=path.join(root,'dist');
fs.mkdirSync(dist,{recursive:true});
fs.copyFileSync(path.join(root,'site.html'),path.join(dist,'index.html'));
fs.copyFileSync(path.join(root,'app/globals.css'),path.join(dist,'style.css'));
for(const f of ['galaxy.js','portrait.jpg','video-poster.jpg','intro.mp4','favicon.svg'])fs.copyFileSync(path.join(root,'public',f),path.join(dist,f));
for(const folder of ['moments','life'])fs.cpSync(path.join(root,'public',folder),path.join(dist,folder),{recursive:true});
