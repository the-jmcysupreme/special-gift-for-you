function openEnvelope() {
  const envelope = document.getElementById("envelope");
  const audio = document.getElementById("bgAudio");

  if (envelope.classList.contains("open")) {
    envelope.classList.remove("open");
  } else {
    envelope.classList.add("open");
  }
}

// Mobile support for autoplay
window.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('bgAudio');
  document.body.addEventListener('click', () => {
    if (audio.paused) {
      audio.play().catch(() => {});
    }
  }, { once: true });
});
