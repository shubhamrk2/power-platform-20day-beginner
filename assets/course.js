(function(){
  // ---- site map: pages and their anchors ----
  var PAGES=[
    {p:'index', file:'index.html', t:'Start Here', days:[
      ['welcome','Welcome'],
      ['why','Ask WHY First'],
      ['english','English Strategy'],
      ['timeline','4-Month Timeline'],
      ['project','Community Library'],
      ['accounts','Accounts & Setup'],
      ['mindset','Your Mindset']
    ]},
    {p:'phase1', file:'phase1.html', t:'September', gk:'Month 1', days:[
      ['week1','Week 1 · Cloud & Identity'],
      ['week2','Week 2 · SharePoint & Teams'],
      ['week3','Week 3 · Power Platform'],
      ['week4','Week 4 · Backup & Transition']
    ]},
    {p:'phase2', file:'phase2.html', t:'October', gk:'Month 2', days:[
      ['week5','Week 5 · Canvas App'],
      ['week6','Week 6 · Power Fx'],
      ['week7','Week 7 · Power Automate'],
      ['week8','Week 8 · Security & Power BI']
    ]},
    {p:'phase3', file:'phase3.html', t:'November', gk:'Month 3', days:[
      ['week9','Week 9 · Azure & SQL'],
      ['week10','Week 10 · Functions & Storage'],
      ['week11','Week 11 · GitHub'],
      ['week12','Week 12 · CI/CD & DevOps']
    ]},
    {p:'phase4', file:'phase4.html', t:'December', gk:'Month 4', days:[
      ['week13','Week 13 · AI Builder'],
      ['week14','Week 14 · Copilot Studio'],
      ['week15','Week 15 · AI Ethics'],
      ['week16','Week 16 · Capstone']
    ]},
    {p:'reference', file:'reference.html', t:'Reference', days:[
      ['glossary','Glossary'],
      ['abbreviations','Abbreviations'],
      ['help','Troubleshooting']
    ]}
  ];
  var current=document.body.getAttribute('data-page')||'index';

  // ---- build sidebar nav ----
  var nav=document.getElementById('nav'), html='';
  PAGES.forEach(function(pg){
    var on=pg.p===current;
    html+='<a class="np'+(on?' on':'')+'" href="'+pg.file+'">'+(pg.gk?'<span class="gk">'+pg.gk+'</span>':'')+pg.t+'</a>';
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
  var KEY='ai4m-'+current;
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

  // ---- scroll spy (anchors) + back-to-top ----
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

  // ---- dark / light theme toggle ----
  var THKEY='ai4m-theme';
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
