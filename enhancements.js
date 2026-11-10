const links = [...document.querySelectorAll('nav a')];
const sections = links.map(link => document.querySelector(link.hash)).filter(Boolean);
function updateNavigation(){let current=null;for(const section of sections){if(section.getBoundingClientRect().top<=180)current=section.id;}for(const link of links){if(link.hash==='#'+current)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');}}
let scheduled=false;addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(()=>{updateNavigation();scheduled=false;});}},{passive:true});updateNavigation();
const video=document.querySelector('video');
video.addEventListener('error',()=>{document.querySelector('[role=status]').textContent='视频暂时无法加载，可通过下方飞书链接观看原视频。';});
