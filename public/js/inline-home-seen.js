/* Seen — extracted from the component's inline script. */
(function () {
const statement = document.querySelector("[data-seen]");
if (statement) {
  let sync = function() {
    if (visible || reduced.matches)
      statement.classList.add("in");
    writers.forEach((writer) => writer.sync());
  };
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  let visible = !("IntersectionObserver" in window);
  const writers = Array.from(statement.querySelectorAll("[data-words]")).map((element, offset) => {
    const words = element.dataset.words.split("|");
    const colors = element.dataset.colors?.split("|");
    let index = 0;
    let count = words[0].length;
    let deleting = true;
    let timer;
    function colour() {
      if (colors)
        element.parentElement.style.setProperty("--word-color", colors[index]);
    }
    function complete() {
      window.clearTimeout(timer);
      timer = undefined;
      count = words[index].length;
      deleting = true;
      element.textContent = words[index];
      colour();
    }
    function step() {
      if (reduced.matches || !visible || document.hidden) {
        complete();
        return;
      }
      if (deleting) {
        count = Math.max(0, count - 1);
        element.textContent = words[index].slice(0, count);
        if (count === 0) {
          index = (index + 1) % words.length;
          deleting = false;
          colour();
          timer = window.setTimeout(step, 160);
        } else
          timer = window.setTimeout(step, 35);
      } else {
        count = Math.min(words[index].length, count + 1);
        element.textContent = words[index].slice(0, count);
        if (count === words[index].length) {
          deleting = true;
          timer = window.setTimeout(step, 2400);
        } else
          timer = window.setTimeout(step, 65);
      }
    }
    function sync() {
      complete();
      if (!reduced.matches && visible && !document.hidden)
        timer = window.setTimeout(step, 2400 + offset * 650);
    }
    return { sync, complete };
  });
  if ("IntersectionObserver" in window) {
    new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting;
      sync();
    }, { threshold: 0.1 }).observe(statement);
  }
  reduced.addEventListener("change", sync);
  document.addEventListener("visibilitychange", sync);
  window.addEventListener("pagehide", () => writers.forEach((writer) => writer.complete()));
  sync();
}
})();
