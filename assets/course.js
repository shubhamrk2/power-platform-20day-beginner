(function(){
  // ---- site map: pages and their day-anchors (shared across every page) ----
  var PAGES=[
    {p:'index',   file:'index.html',    t:'Start here', days:[['welcome','Welcome'],['how','How to use'],['project','Your project'],['setup','Day 0 · Setup'],['roadmap','The roadmap'],['keep','Keep it forever']]},
    {p:'phase1',  file:'phase1.html',   t:'Foundations', gk:'Phase 1', days:[['day1','Day 1 · Orientation'],['day2','Day 2 · Tables & data'],['day3','Day 3 · Relationships'],['day4','Day 4 · Solutions & security']]},
    {p:'phase2',  file:'phase2.html',   t:'Building apps', gk:'Phase 2', days:[['powerfx-basics','Read First · Power Fx'],['day5','Day 5 · Canvas app'],['day6','Day 6 · Power Fx'],['day7','Day 7 · Galleries & forms'],['day8','Day 8 · Model-driven']]},
    {p:'phase3',  file:'phase3.html',   t:'Automation', gk:'Phase 3', days:[['day9','Day 9 · First flow'],['day10','Day 10 · Logic'],['day11','Day 11 · Approvals & data']]},
    {p:'phase4',  file:'phase4.html',   t:'Data & integration', gk:'Phase 4', days:[['day12','Day 12 · SharePoint'],['day13','Day 13 · Dataflows & M'],['day14','Day 14 · Connectors & APIs']]},
    {p:'phase5',  file:'phase5.html',   t:'AI & governance', gk:'Phase 5', days:[['day15','Day 15 · Copilot Studio'],['day16','Day 16 · Governance & Azure']]},
    {p:'phase6',  file:'phase6.html',   t:'Power BI', gk:'Phase 6', days:[['setup-bi','Setup guide'],['day17','Day 17 · Get started & data'],['day18','Day 18 · Visuals & reports'],['day19','Day 19 · Prepare & model'],['day20','Day 20 · Share & capstone']]},
    {p:'reference',file:'reference.html',t:'Reference', days:[['glossary','Glossary'],['abbreviations','Abbreviations'],['help','Troubleshooting']]}
  ];
  var current=document.body.getAttribute('data-page')||'index';

  // ---- build sidebar nav ----
  var nav=document.getElementById('nav'), html='';
  PAGES.forEach(function(pg){
    var on=pg.p===current;
    html+='<a class="np'+(on?' on':'')+'" href="'+pg.file+'">'+
      (pg.gk?'<span class="gk">'+pg.gk+'</span>':'')+pg.t+'</a>';
    // show day anchors only for the active page
    html+='<ul class="subs">';
    pg.days.forEach(function(d){
      var href=on?('#'+d[0]):(pg.file+'#'+d[0]);
      html+='<li><a href="'+href+'">'+d[1]+'</a></li>';
    });
    html+='</ul>';
  });
  nav.innerHTML=html;
  var subLinks=[].slice.call(nav.querySelectorAll('.np.on + .subs a'));

  // ---- mobile menu ----
  var rail=document.getElementById('rail'), menu=document.getElementById('menu');
  if(menu)menu.onclick=function(){rail.classList.toggle('open')};
  nav.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click',function(){if(innerWidth<=980)rail.classList.remove('open')});
  });

  // ---- checkbox persistence (per page) + progress bar ----
  var KEY='pp20-'+current;
  var saved={}; try{saved=JSON.parse(localStorage.getItem(KEY)||'{}')}catch(e){}
  var items=[].slice.call(document.querySelectorAll('.tasks li'));
  var pfill=document.getElementById('pfill'), pnum=document.getElementById('pnum'), ptot=document.getElementById('ptot');
  function refresh(){
    var done=document.querySelectorAll('.tasks li.done').length;
    if(pnum)pnum.textContent=done;
    if(ptot)ptot.textContent=items.length;
    if(pfill)pfill.style.width=(items.length?Math.round(done/items.length*100):0)+'%';
  }
  items.forEach(function(li,i){
    if(saved[i])li.classList.add('done');
    var box=li.querySelector('.box'); if(!box)return;
    box.setAttribute('role','checkbox'); box.setAttribute('tabindex','0');
    box.setAttribute('aria-checked', li.classList.contains('done')?'true':'false');
    function tog(){
      li.classList.toggle('done');
      var on=li.classList.contains('done');
      box.setAttribute('aria-checked', on?'true':'false');
      if(on)saved[i]=1; else delete saved[i];
      try{localStorage.setItem(KEY,JSON.stringify(saved))}catch(e){}
      refresh();
    }
    box.onclick=tog;
    box.onkeydown=function(e){if(e.key===' '||e.key==='Enter'){e.preventDefault();tog();}};
  });
  refresh();

  // ---- scroll spy (day anchors) + back-to-top ----
  var secs=[].slice.call(document.querySelectorAll('section[id],header[id]'));
  var top=document.getElementById('top');
  function onscroll(){
    if(top)top.classList.toggle('on', scrollY>500);
    var cur=null, y=scrollY+120;
    secs.forEach(function(s){ if(s.offsetTop<=y) cur=s; });
    subLinks.forEach(function(a){
      a.classList.toggle('on', !!cur && a.getAttribute('href')==='#'+cur.id);
    });
  }
  addEventListener('scroll',onscroll,{passive:true}); addEventListener('resize',onscroll); onscroll();
  if(top)top.onclick=function(){scrollTo({top:0,behavior:'smooth'})};

  // ---- dark / light theme toggle (top-right) ----
  var THKEY='pp20-theme';
  var savedTheme; try{savedTheme=localStorage.getItem(THKEY)}catch(e){}
  if(savedTheme==='dark') document.documentElement.classList.add('dark');
  var tbtn=document.createElement('button');
  tbtn.className='themebtn'; tbtn.type='button'; tbtn.setAttribute('aria-label','Toggle dark mode');
  function setIcon(){ tbtn.textContent = document.documentElement.classList.contains('dark') ? '☀' : '☾'; }
  setIcon();
  tbtn.onclick=function(){
    document.documentElement.classList.toggle('dark');
    var dark=document.documentElement.classList.contains('dark');
    try{localStorage.setItem(THKEY, dark?'dark':'light')}catch(e){}
    setIcon();
  };
  document.body.appendChild(tbtn);
})();
