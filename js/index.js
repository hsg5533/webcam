!(function () {
  if (!1 in navigator || !1 in navigator.mediaDevices) {
    alert("Camera API is not available in your browser");
    return;
  }
  let e = document.querySelector("#video"),
    t = document.querySelector("#canvas"),
    i = document.querySelector("#btnPlay"),
    n = document.querySelector("#btnPause");
  document.querySelector("#devicesSelect");
  let a = document.querySelector("#btnScreenshot"),
    c = document.querySelector("#btnChangeCamera"),
    r = document.querySelector("#screenshots"),
    s = {
      video: {
        width: { min: 1280, ideal: 1920, max: 2560 },
        height: { min: 720, ideal: 1080, max: 1440 },
      },
    },
    d = !0,
    o;
  async function l() {
    o &&
      o.getTracks().forEach((e) => {
        e.stop();
      }),
      (s.video.facingMode = d ? "user" : "environment");
    try {
      (o = await navigator.mediaDevices.getUserMedia(s)), (e.srcObject = o);
    } catch (t) {
      alert("Could not access the camera");
    }
  }
  i.addEventListener("click", function () {
    e.play(), i.classList.add("is-hidden"), n.classList.remove("is-hidden");
  }),
    n.addEventListener("click", function () {
      e.pause(), n.classList.add("is-hidden"), i.classList.remove("is-hidden");
    }),
    a.addEventListener("click", function () {
      let i = document.createElement("img");
      (t.width = e.videoWidth),
        (t.height = e.videoHeight),
        t.getContext("2d").drawImage(e, 0, 0),
        (i.src = t.toDataURL("image/png")),
        r.prepend(i);
    }),
    c.addEventListener("click", function () {
      (d = !d), l();
    }),
    l();
})();
