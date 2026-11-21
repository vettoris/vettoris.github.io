// Shared site behaviour: responsive nav, typed hero text, footer year.
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(navLinks.classList.contains('open')));
    });
  }

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const research = document.getElementById('research');
  const expandTopics = research && research.querySelector('.expand-topics');
  if (expandTopics) {
    const topics = Array.from(research.querySelectorAll('details.topic'));
    function updateExpandButton() {
      const allOpen = topics.every(topic => topic.open);
      expandTopics.textContent = allOpen ? 'Collapse all' : 'Expand all';
    }
    topics.forEach(topic => topic.addEventListener('toggle', updateExpandButton));
    expandTopics.addEventListener('click', () => {
      const shouldOpen = !topics.every(topic => topic.open);
      topics.forEach(topic => { topic.open = shouldOpen; });
      updateExpandButton();
    });
    if (topics.length) { expandTopics.hidden = false; updateExpandButton(); }
  }

  const typedTextElement = document.getElementById('typed-text');
  if (typedTextElement) {
    const typedPhrases = [
      'social neuroscience',
      'visual perception',
      'the developing brain'
    ];
    typedTextElement.textContent = '';
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      typedTextElement.textContent = typedPhrases[0];
      return;
    }
    let currentPhraseIndex = 0;
    let charIndex = 0;
    const typingDelay = 45;
    const erasingDelay = 25;
    const newPhraseDelay = 900;

    function type() {
      const phrase = typedPhrases[currentPhraseIndex];
      if (charIndex < phrase.length) {
        typedTextElement.textContent += phrase.charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        setTimeout(erase, newPhraseDelay);
      }
    }
    function erase() {
      const phrase = typedPhrases[currentPhraseIndex];
      if (charIndex > 0) {
        typedTextElement.textContent = phrase.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
      } else {
        currentPhraseIndex = (currentPhraseIndex + 1) % typedPhrases.length;
        setTimeout(type, typingDelay);
      }
    }
    setTimeout(type, 400);
  }
});
