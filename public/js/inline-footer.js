/* Footer — extracted from the component's inline script. */
(function(){
  document.querySelectorAll('[data-footer-art]').forEach(function(art){
    if(art.dataset.motionReady)return;
    art.dataset.motionReady='true';
    var visible=false,reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
    function sync(){art.dataset.motion=visible&&!document.hidden&&!reduced.matches?'running':'paused';}
    if('IntersectionObserver' in window){
      new IntersectionObserver(function(entries){visible=entries[0].isIntersecting;sync();},{threshold:.05}).observe(art);
    }else{visible=true;}
    document.addEventListener('visibilitychange',sync);
    reduced.addEventListener('change',sync);
    sync();
  });
})();
