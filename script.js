/* =========================================================
   DỮ LIỆU — chỉ cần sửa trong khối DATA này là xong.
   • icon : emoji tạm (thay bằng ảnh nếu có 'img')
   • img  : dán link ảnh / đường dẫn file ảnh của bạn
   • g1/g2: 2 màu nền khi chưa có ảnh
   • size : "" | "wide" | "tall" | "big"  -> cỡ ô trong mosaic
   ========================================================= */
const DATA = {
  photos: {
    chung: [
      {img:"anh/IMG_5419 - Copy.JPG", cap:"Lễ trưởng thành",   size:"big",  g1:"#d98b5c", g2:"#9e2f22"},
      {img:"anh/IMG_5421 - Copy.JPG", cap:"Khai giảng năm đầu", size:"",     g1:"#5f8fb0", g2:"#39456a"},
      {icon:"🌳", cap:"Góc sân trường",     size:"tall", g1:"#5a9b86", g2:"#2c6354"},
      {icon:"🎉", cap:"Liên hoan lớp",      size:"wide", g1:"#e0a45a", g2:"#c8412f"},
      {icon:"⚽", cap:"Giải bóng trường",   size:"",     g1:"#c97b66", g2:"#9e2f22"},
      {icon:"🎤", cap:"Đêm văn nghệ",       size:"",     g1:"#7b6aa0", g2:"#3a2f5e"},
      {icon:"🚌", cap:"Chuyến dã ngoại",    size:"wide", g1:"#6aa896", g2:"#2c6354"},
      {icon:"📚", cap:"Giờ tự học",         size:"tall", g1:"#6f86b3", g2:"#39456a"},
      {icon:"🌅", cap:"Hoàng hôn sân thượng",size:"",    g1:"#e0a45a", g2:"#b8541f"},
      {icon:"☀️", cap:"Mùa phượng nở",      size:"",     g1:"#e07a5c", g2:"#c8412f"},
      {icon:"🤝", cap:"Đứa nào cũng thân",  size:"",     g1:"#5a9b86", g2:"#2c6354"},
      {icon:"💐", cap:"Lễ tri ân thầy cô",  size:"wide", g1:"#d99a5a", g2:"#a9802f"},
    ],
    l10: [
      {icon:"🙋", cap:"Buổi học đầu tiên",  size:"big",  g1:"#5a9b86", g2:"#2c6354"},
      {icon:"🏫", cap:"Lớp học mới tinh",   size:"",     g1:"#6aa896", g2:"#27574a"},
      {img:"anh/IMG_5419 - Copy.JPG", cap:"Bữa trưa căng tin",  size:"tall", g1:"#7fb09e", g2:"#2c6354"},
      {img:"anh/IMG_5421 - Copy.JPG", cap:"Hội thao đầu năm",   size:"wide", g1:"#5a9b86", g2:"#1f4f43"},
      {icon:"🌼", cap:"Trang trí lớp",      size:"",     g1:"#88baa9", g2:"#2c6354"},
      {icon:"🤝", cap:"Làm quen bạn mới",   size:"",     g1:"#5a9b86", g2:"#2c6354"},
      {img:"anh/IMG_5419 - Copy.JPG", cap:"Bài kiểm tra đầu đời",size:"wide",g1:"#6aa896", g2:"#235348"},
      {icon:"🎒", cap:"Lần đầu trực nhật",  size:"",     g1:"#7fb09e", g2:"#2c6354"},
    ],
    l11: [
      {img:"anh/IMG_5419 - Copy.JPG", cap:"Trận bóng để đời",   size:"big",  g1:"#e07a5c", g2:"#9e2f22"},
      {img:"anh/IMG_5421 - Copy.JPG", cap:"Văn nghệ chào mừng", size:"",     g1:"#d96b54", g2:"#c8412f"},
      {icon:"🚌", cap:"Đi trại hè",         size:"tall", g1:"#e08a6a", g2:"#a8331f"},
      {icon:"🍰", cap:"Sinh nhật tập thể",  size:"wide", g1:"#e8927a", g2:"#c8412f"},
      {icon:"📸", cap:"Ảnh kỷ niệm lớp",    size:"",     g1:"#d96b54", g2:"#9e2f22"},
      {icon:"🌈", cap:"Ngày hội màu sắc",   size:"",     g1:"#e07a5c", g2:"#c8412f"},
      {icon:"🔥", cap:"Đêm lửa trại",       size:"wide", g1:"#e89060", g2:"#b8401f"},
      {icon:"🏆", cap:"Giải nhất phong trào",size:"",    g1:"#d96b54", g2:"#c8412f"},
    ],
    l12: [
      {icon:"🎓", cap:"Chụp kỷ yếu",        size:"big",  g1:"#e0a45a", g2:"#a9802f"},
      {icon:"📖", cap:"Ôn thi xuyên đêm",   size:"",     g1:"#d99a5a", g2:"#b8841f"},
      {icon:"💐", cap:"Lễ tri ân",          size:"tall", g1:"#e0aa66", g2:"#a9802f"},
      {icon:"✍️", cap:"Viết lưu bút",       size:"wide", g1:"#e6b572", g2:"#c08a2e"},
      {icon:"🌅", cap:"Buổi học cuối cùng",  size:"",     g1:"#e0934a", g2:"#b8541f"},
      {icon:"🎆", cap:"Chia tay mái trường", size:"",     g1:"#d99a5a", g2:"#a9802f"},
      {icon:"👩‍🎓", cap:"Áo cử nhân lần đầu",size:"wide", g1:"#e6b572", g2:"#c08a2e"},
      {icon:"🕯️", cap:"Đêm trước kỳ thi",   size:"",     g1:"#d9924a", g2:"#9e6a1f"},
    ],
  },

  // VIDEO  (đổi 'url' thành link YouTube/Drive của bạn)
  videos: {
    chung: [
      {title:"Hậu trường chụp kỷ yếu", note:"3 năm gói trong 5 phút", g1:"#5f8fb0", g2:"#39456a", url:"anh/quân sự 2025.mp4"},
      {title:"Tổng kết thanh xuân", note:"Lời chúc của cả lớp", g1:"#d98b5c", g2:"#9e2f22", url:""},
    ],
    l10: [ {title:"Văn nghệ chào tân học sinh", note:"Tiết mục mở màn", g1:"#5a9b86", g2:"#2c6354", url:""} ],
    l11: [ {title:"Highlight giải bóng đá", note:"Pha ghi bàn để đời", g1:"#e07a5c", g2:"#9e2f22", url:""} ],
    l12: [ {title:"Clip tri ân thầy cô", note:"Nước mắt &amp; nụ cười", g1:"#e0a45a", g2:"#a9802f", url:""} ],
  },

  // CÂU NÓI / SLOGAN
  notes: {
    chung: [
      {q:"Thanh xuân là một cơn mưa rào, dù bị cảm vẫn muốn quay lại để ướt thêm lần nữa.", by:"Cả lớp mình", c:"y1"},
      {q:"Đoàn kết — chăm ngoan — quậy có chừng mực!", by:"Slogan lớp", c:"y2"},
      {q:"Có thể quên bài kiểm tra, nhưng không quên được đứa ngồi cạnh.", by:"Một bạn giấu tên", c:"y3"},
      {q:"Tụi mình không hoàn hảo, nhưng tụi mình hợp nhau.", by:"Ban cán sự lớp", c:"y4"},
      {q:"Dù sau này đi đâu, lớp vẫn là nhà.", by:"Lớp trưởng", c:"y5"},
      {q:"Học thì lười nhưng đi chơi thì siêng số một.", by:"Hội bạn thân", c:"y2"},
    ],
    l10: [
      {q:"Ngày đầu còn chẳng thuộc tên nhau, giờ thì thuộc cả tật xấu.", by:"Tổ 1", c:"y2"},
      {q:"Lớp 10: nơi bắt đầu mọi trò nghịch ngợm.", by:"Slogan", c:"y3"},
      {q:"Mới đó mà đã thân như quen từ kiếp trước.", by:"Một bạn nữ", c:"y4"},
    ],
    l11: [
      {q:"Năm bùng nổ nhất — chơi hết mình, học cũng… ráng hết mình.", by:"Tập thể lớp", c:"y3"},
      {q:"Một người vì mọi người, mọi người vì… giờ ra chơi.", by:"Slogan", c:"y1"},
      {q:"Tình bạn thật sự là cãi nhau xong vẫn rủ đi ăn.", by:"Hội bạn thân", c:"y2"},
    ],
    l12: [
      {q:"Cố lên, vạch đích ngay trước mắt rồi!", by:"Lời cả lớp tự nhủ", c:"y1"},
      {q:"Khó khăn rồi cũng qua, chỉ có kỷ niệm là ở lại.", by:"Một bạn nam", c:"y4"},
      {q:"Hẹn ngày tái ngộ, vẫn là tụi mình của ngày hôm nay.", by:"Slogan chia tay", c:"y3"},
    ],
  },

  // THẦY CÔ
  teachers: [
    {icon:"👩‍🏫", name:"Cô Chủ nhiệm", subj:"Người mẹ thứ hai", say:"“Các con cứ bay xa, cô luôn ở đây.”", g1:"#d2883a", g2:"#c8412f"},
    {icon:"👨‍🏫", name:"Thầy Toán", subj:"Môn Toán", say:"“Sai thì làm lại, đừng bỏ cuộc.”", g1:"#5f8fb0", g2:"#39456a"},
    {icon:"👩‍🏫", name:"Cô Văn", subj:"Môn Ngữ Văn", say:"“Hãy sống tử tế và biết yêu thương.”", g1:"#7b6aa0", g2:"#3a2f5e"},
    {icon:"👨‍🏫", name:"Thầy Thể dục", subj:"Môn Thể chất", say:"“Khỏe để học, học để vui.”", g1:"#5a9b86", g2:"#2c6354"},
  ],

  // CUỘN FILM ở hero
  film: [
    {icon:"📸", cap:"Ngày đầu gặp nhau", g1:"#5f8fb0", g2:"#39456a", rot:"-5deg"},
    {icon:"🌳", cap:"Góc sân trường",    g1:"#5a9b86", g2:"#2c6354", rot:"3deg"},
    {icon:"🎉", cap:"Tiệc cuối năm",      g1:"#e0a45a", g2:"#c8412f", rot:"-2deg"},
    {icon:"🎓", cap:"Lễ ra trường",       g1:"#d98b5c", g2:"#9e2f22", rot:"4deg"},
  ],
};

/* ---------- dựng giao diện ---------- */
function photoCard(p){
  const inner = p.img ? `<img src="${p.img}" alt="${p.cap}">` : (p.icon || "📸");
  return `<div class="frame ${p.size||''}" tabindex="0" data-cap="${p.cap}" data-icon="${p.icon||'📸'}" data-img="${p.img||''}" style="--g1:${p.g1};--g2:${p.g2}">
      <div class="photo">${inner}</div>
      <div class="tag">${p.cap}</div>
    </div>`;
}
function filmCard(f){
  return `<div class="film-cell" style="--rot:${f.rot||'0deg'}" tabindex="0" data-cap="${f.cap}" data-icon="${f.icon}" data-img="">
      <div class="ph photo" style="--g1:${f.g1};--g2:${f.g2}">${f.icon}</div>
      <div class="lb">${f.cap}</div>
    </div>`;
}
function videoCard(v){
  const link = v.url ? `onclick="window.open('${v.url}','_blank')"` : '';
  return `<div class="vid">
      <div class="frm" style="--g1:${v.g1};--g2:${v.g2}" ${link}><div class="play"></div></div>
      <div class="meta"><b>${v.title}</b><small>${v.note}</small></div>
    </div>`;
}
function noteCard(n){
  const rot = (Math.random()*4-2).toFixed(2)+'deg';
  return `<div class="note ${n.c}" style="--rot:${rot}"><div class="quote">${n.q}</div><div class="by">— ${n.by}</div></div>`;
}
function teacherCard(t){
  return `<div class="teacher">
      <div class="ava" style="--g1:${t.g1};--g2:${t.g2}">${t.icon}</div>
      <b>${t.name}</b><small>${t.subj}</small>
      <div class="saying">${t.say}</div>
    </div>`;
}
function fill(id, arr, fn){ const el=document.getElementById(id); if(el) el.innerHTML=arr.map(fn).join(''); }

["chung","l10","l11","l12"].forEach(k=>{
  fill("wall-"+k, DATA.photos[k], photoCard);
  fill("vids-"+k, DATA.videos[k], videoCard);
  fill("notes-"+k, DATA.notes[k], noteCard);
});
fill("teachers-chung", DATA.teachers, teacherCard);
document.getElementById("filmstrip").innerHTML = `<div class="film-row">${DATA.film.map(filmCard).join('')}</div>`;

/* ---------- điều hướng: cuộn tới khối + làm nổi tab ---------- */
const tabs = document.querySelectorAll('.tab');
function scrollToId(id){
  const el = document.getElementById(id);
  if(!el) return;
  el.scrollIntoView({behavior:'smooth', block:'start'});
  pageTurnSound();            // tiếng "lật trang"
}
tabs.forEach(t=>t.addEventListener('click', ()=>scrollToId(t.dataset.scroll)));
document.querySelectorAll('[data-go]').forEach(c=>c.addEventListener('click', ()=>scrollToId(c.dataset.go)));

// scrollspy: tab nào ứng với khối đang xem thì sáng lên
const spyTargets = ['top','l10','l11','l12']
  .map(id=>document.getElementById(id)).filter(Boolean);
function setActiveTab(id){
  tabs.forEach(t=>t.classList.toggle('active', t.dataset.scroll===id));
}
const spy = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting) setActiveTab(e.target.id); });
}, {rootMargin:'-45% 0px -50% 0px', threshold:0});
spyTargets.forEach(el=>spy.observe(el));

/* ---------- reveal khi cuộn ---------- */
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
}, {threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

/* ---------- lightbox ---------- */
const lb = document.getElementById('lightbox');
const lbPhoto = document.getElementById('lbPhoto');
const lbCap = document.getElementById('lbCap');
function openLB(el){
  const img = el.dataset.img, icon = el.dataset.icon, cap = el.dataset.cap;
  const ph = el.querySelector('.photo');
  const g1 = el.style.getPropertyValue('--g1') || ph.style.getPropertyValue('--g1') || '#7ec';
  const g2 = el.style.getPropertyValue('--g2') || ph.style.getPropertyValue('--g2') || '#48a';
  lbPhoto.setAttribute('style', `background:linear-gradient(135deg,${g1},${g2})`);
  lbPhoto.innerHTML = img ? `<img src="${img}" alt="${cap}">` : icon;
  lbCap.textContent = cap;
  lb.classList.add('open'); lb.setAttribute('aria-hidden','false');
}
document.addEventListener('click', e=>{
  const f = e.target.closest('.frame, .film-cell');
  if(f) openLB(f);
});
document.addEventListener('keydown', e=>{
  if(e.key==='Enter'){ const f=document.activeElement.closest?.('.frame, .film-cell'); if(f) openLB(f); }
  if(e.key==='Escape') closeLB();
});
function closeLB(){ lb.classList.remove('open'); lb.setAttribute('aria-hidden','true'); }
document.getElementById('lbClose').addEventListener('click', closeLB);
lb.addEventListener('click', e=>{ if(e.target===lb) closeLB(); });

/* ---------- nút lên đầu trang ---------- */
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', ()=>{ toTop.classList.toggle('show', window.scrollY>500); });
toTop.addEventListener('click', ()=>window.scrollTo({top:0,behavior:'smooth'}));

/* ---------- cánh phượng rơi ---------- */
(function(){
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const wrap = document.getElementById('petals');
  for(let i=0;i<16;i++){
    const s=document.createElement('span');
    s.className='petal';
    const sz = 9+Math.random()*9;
    s.style.left = Math.random()*100+'%';
    s.style.width = sz+'px'; s.style.height = sz+'px';
    s.style.animationDuration = (11+Math.random()*12)+'s';
    s.style.animationDelay = (-Math.random()*16)+'s';
    s.style.opacity = (.45+Math.random()*.4).toFixed(2);
    wrap.appendChild(s);
  }
})();

/* =========================================================
   NHẠC NỀN — trình phát danh sách bài hát thật.

   ➜ THÊM / ĐỔI NHẠC: chỉ cần sửa mảng PLAYLIST bên dưới.
     • title : tên bài
     • artist: ca sĩ / nguồn
     • src   : đường dẫn file nhạc (.mp3/.m4a/.ogg)
               - file đặt cạnh web:  "nhac/bai-hat.mp3"
               - hoặc link trực tiếp tới file nhạc trên mạng

   ⚠️ BẢN QUYỀN: web phi lợi nhuận VẪN không được dùng nhạc
      có bản quyền tuỳ tiện. Hãy dùng nhạc miễn phí / Creative
      Commons (Pixabay Music, Free Music Archive, YouTube Audio
      Library, Incompetech, Bensound) hoặc nhạc do lớp tự thu.
      Mấy bài mặc định dưới đây là NHẠC DEMO miễn phí — hãy
      thay bằng bài của bạn.
   ========================================================= */
const PLAYLIST = [
  {title:"Bản nhạc demo 1", artist:"Nhạc demo • thay bằng bài của bạn", src:"nhac/N1.m4a"},
  {title:"Bản nhạc demo 2", artist:"Nhạc demo • thay bằng bài của bạn", src:"nhac/N1.m4a"},
  {title:"Bản nhạc demo 3", artist:"Nhạc demo • thay bằng bài của bạn", src:"nhac/N1.m4a"},
];

const bgm      = document.getElementById('bgm');
const player   = document.getElementById('player');
const discEl   = document.getElementById('disc');
const ppBtn    = document.getElementById('ppBtn');
const prevBtn  = document.getElementById('prevBtn');
const nextBtn  = document.getElementById('nextBtn');
const trkTitle = document.getElementById('trkTitle');
const trkArtist= document.getElementById('trkArtist');
const musicHint= document.getElementById('musicHint');

let current = 0, loaded = false;
bgm.volume = 0.5;

function showTrackInfo(){
  const tr = PLAYLIST[current];
  if(!tr){ trkTitle.textContent="Chưa có nhạc"; trkArtist.textContent="thêm bài vào PLAYLIST"; return; }
  trkTitle.textContent = tr.title;
  trkArtist.textContent = tr.artist || "";
}
function loadTrack(i, autoplay){
  if(!PLAYLIST.length) return;
  current = (i + PLAYLIST.length) % PLAYLIST.length;
  bgm.src = PLAYLIST[current].src;
  loaded = true;
  showTrackInfo();
  if(autoplay) bgm.play().catch(()=>{});
}
function playMusic(){
  if(!PLAYLIST.length) return;
  if(!loaded) loadTrack(current, false);
  bgm.play().catch(()=>{ /* trình duyệt chặn tới khi có thao tác */ });
}
function togglePlay(){
  if(!PLAYLIST.length) return;
  if(bgm.paused) playMusic(); else bgm.pause();
}

ppBtn.addEventListener('click', ()=>{ togglePlay(); musicHint.classList.remove('show'); });
nextBtn.addEventListener('click', ()=>loadTrack(current+1, true));
prevBtn.addEventListener('click', ()=>loadTrack(current-1, true));
bgm.addEventListener('ended', ()=>loadTrack(current+1, true));  // tự chuyển bài
bgm.addEventListener('play',  ()=>{ player.classList.add('playing'); ppBtn.textContent='⏸'; });
bgm.addEventListener('pause', ()=>{ player.classList.remove('playing'); ppBtn.textContent='▶'; });
bgm.addEventListener('error', ()=>{ trkArtist.textContent="Không tải được nhạc — kiểm tra đường dẫn src"; });

showTrackInfo();

// gợi ý nhỏ lúc mới vào
setTimeout(()=>{ if(bgm.paused) musicHint.classList.add('show'); }, 1200);
setTimeout(()=>musicHint.classList.remove('show'), 8000);

// thử tự phát ở thao tác đầu tiên (trình duyệt chặn autoplay khi chưa tương tác)
function firstGesture(){
  playMusic();
  musicHint.classList.remove('show');
  window.removeEventListener('pointerdown', firstGesture);
  window.removeEventListener('keydown', firstGesture);
  window.removeEventListener('scroll', firstGesture);
}
window.addEventListener('pointerdown', firstGesture);
window.addEventListener('keydown', firstGesture);
window.addEventListener('scroll', firstGesture, {passive:true});

/* tiếng "lật trang" nhẹ khi chuyển trang (Web Audio, không cần file) */
let _actx;
function pageTurnSound(){
  if(bgm.paused) return;                 // chỉ kêu khi đang mở nhạc
  try{
    const AC = window.AudioContext || window.webkitAudioContext;
    _actx = _actx || new AC();
    if(_actx.state==='suspended') _actx.resume();
    const dur=.3, sr=_actx.sampleRate, len=Math.floor(sr*dur);
    const buf=_actx.createBuffer(1,len,sr); const d=buf.getChannelData(0);
    for(let i=0;i<len;i++){ d[i]=(Math.random()*2-1)*Math.pow(1-i/len,2.5); }
    const src=_actx.createBufferSource(); src.buffer=buf;
    const bp=_actx.createBiquadFilter(); bp.type='bandpass'; bp.frequency.value=2600; bp.Q.value=.8;
    const g=_actx.createGain(); g.gain.value=.12;
    src.connect(bp); bp.connect(g); g.connect(_actx.destination);
    bp.frequency.setValueAtTime(1200,_actx.currentTime);
    bp.frequency.exponentialRampToValueAtTime(4200,_actx.currentTime+dur);
    src.start();
  }catch(e){}
}
