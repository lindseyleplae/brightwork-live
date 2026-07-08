const CAUSE = {
  food:['#FBE7DF','#9A3D22','🍲'], environment:['#E3F1EA','#1F6B4C','🌳'], animals:['#FBEEDA','#8A5A10','🐾'],
  seniors:['#EFECFA','#4F3FA8','🧓'], youth:['#FDF3DC','#8A5A10','🎒'], health:['#FBE7DF','#9A3D22','❤️'],
  civic:['#E8F3F1','#0A6B60','🏛️'], arts:['#F6E9F2','#8A3D6E','🎨'], digital:['#E8F3F1','#0A6B60','💻'],
  education:['#FDF3DC','#8A5A10','📚'], mental_health:['#EFECFA','#4F3FA8','💜'], immigrants:['#E3F1EA','#1F6B4C','🌍'],
  disability:['#E8F3F1','#0A6B60','♿'], veterans:['#E8F3F1','#0A6B60','🎖️'], housing:['#FBE7DF','#9A3D22','🏠'] };
function tag(cause){ const c = CAUSE[cause] || ['#F2F8F6','#0A6B60','🌱']; return `<span class="tag" style="background:${c[0]};color:${c[1]}"><span aria-hidden="true">${c[2]}</span> ${cause.replace('_',' ')}</span>`; }
function esc(s){ return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;'); }
function mins(m){ return m >= 60 ? (m/60).toFixed(m%60?1:0) + ' hr' : m + ' min'; }
function card(o){
  const meta = [mins(o.durationMinutes), o.isRemote ? 'from home' : esc(o.neighborhood || 'SF'), o.when].filter(Boolean).join(' · ');
  return `<article class="op">${tag(o.cause)}<h3>${esc(o.title)}</h3><div class="org">${esc(o.org)}</div><div class="meta">${meta}</div><p class="blurb">${esc(o.blurb)}</p><a class="go" href="/app/#/o/${encodeURIComponent(o.id)}">Sign up →</a></article>`;
}
async function loadListings(){
  const res = await fetch('/listings.json', {cache:'no-cache'});
  if (!res.ok) throw new Error('listings unavailable');
  return res.json();
}