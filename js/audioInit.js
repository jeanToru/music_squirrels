import {Canvas} from './canvas.js';
import {audio, AudioContext} from './player.js'

function audioInit() {
  const audioContext = new AudioContext();
  let source = audioContext.createMediaElementSource(audio);
  let analyser = audioContext.createAnalyser();
  source.connect(analyser);
  analyser.connect(audioContext.destination);
  analyser.fftSize = 128;
  let bufferLength = analyser.frequencyBinCount;

  let canvas = document.getElementById ("canvas");
  let ctx = canvas.getContext ("2d");
  let barWidth = (canvas.width/2) / bufferLength;
  let barHeight;
  let x;

  function animate() {
    x = 0;
    ctx.clearRect(0,0, canvas.width, canvas.height);
    analyser.getByteFrequencyData(dataArray);
    const canva = new Canvas(bufferLength, x, barWidth, barHeight, dataArray);
    canva.drawBars();
    requestAnimationFrame(animate);
  }
  animate()
}

export {
  audioInit
}
