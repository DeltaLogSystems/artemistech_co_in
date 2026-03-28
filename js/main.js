/* ══════════════════════════════════════════════════════
   ARTEMIS TECH  |  Main JS  |  artemistech.co.in
══════════════════════════════════════════════════════ */

/* ── NAV SCROLL ── */
window.addEventListener('scroll',()=>{
  document.querySelector('.nav')?.classList.toggle('scrolled',window.scrollY>20);
});

/* ── HAMBURGER ── */
document.addEventListener('DOMContentLoaded',()=>{
  const ham = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  if(ham){
    ham.addEventListener('click',()=>nav.classList.toggle('nav-mobile-open'));
  }

  /* ── HERO SLIDER ── */
  const slides = document.querySelectorAll('.hero-slide');
  const dots   = document.querySelectorAll('.hero-dot');
  let current  = 0;
  let timer;

  function goSlide(n){
    slides.forEach((s,i)=>{s.classList.toggle('active',i===n); dots[i]?.classList.toggle('active',i===n);});
    current = n;
  }
  function nextSlide(){ goSlide((current+1)%slides.length); }

  if(slides.length){
    goSlide(0);
    timer = setInterval(nextSlide, 5000);
    dots.forEach((d,i)=>d.addEventListener('click',()=>{clearInterval(timer);goSlide(i);timer=setInterval(nextSlide,5000);}));
  }

  /* ── ACTIVE NAV LINK ── */
  const page = document.body.dataset.page;
  document.querySelectorAll('[data-page]').forEach(a=>{
    if(a.dataset.page===page) a.classList.add('active');
  });

  /* ── FADE-UP OBSERVER ── */
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.style.animationPlayState='running';}});
  },{threshold:0.12});
  document.querySelectorAll('.card,.ind-tile,.ind-card,.cs-card,.pf-card,.founder-card').forEach(el=>{
    el.style.animationPlayState='paused';
    obs.observe(el);
  });

  /* ── CONTACT FORM ── */
  const form = document.getElementById('enquiry-form');
  if(form){
    form.addEventListener('submit',e=>{
      e.preventDefault();
      form.innerHTML='<div style="text-align:center;padding:48px 0"><div style="font-size:2.5rem;margin-bottom:16px">✓</div><h3 style="color:var(--bd);margin-bottom:8px">Thank You!</h3><p style="color:var(--mid)">An Artemis engineer will contact you within 24 hours with a technical assessment.</p></div>';
    });
  }
});
