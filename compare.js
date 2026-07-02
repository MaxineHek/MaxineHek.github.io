function updateCompare(id, val){
  const el = document.getElementById(id);
  const after = el.querySelector('.compare-after');
  const divider = el.querySelector('.compare-divider');
  after.style.clipPath = `inset(0 ${100 - val}% 0 0)`;
  divider.style.left = val + '%';
}
