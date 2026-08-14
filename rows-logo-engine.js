/**
 * Rows.gg Logo Particle Animation Engine (Custom "17" Glyph Edition)
 * 已移除底色，将白色 17 改为原底色值 rgb(15, 26, 48)，保留鲜橙色点
 */

(function () {
  "use strict";

  // ==========================================
  // 1. 纯净「17 + 橙点」高密物理质点数据 (519 质点)
  // ==========================================
  const GLYPH_17_POINTS = [[2,0,255,87,34,"orange"],[3,0,255,87,34,"orange"],[4,0,255,87,34,"orange"],[10,0,15,26,48,"main"],[11,0,15,26,48,"main"],[12,0,15,26,48,"main"],[13,0,15,26,48,"main"],[14,0,15,26,48,"main"],[1,1,255,87,34,"orange"],[2,1,255,87,34,"orange"],[3,1,255,87,34,"orange"],[4,1,255,87,34,"orange"],[5,1,255,87,34,"orange"],[10,1,15,26,48,"main"],[11,1,15,26,48,"main"],[12,1,15,26,48,"main"],[13,1,15,26,48,"main"],[14,1,15,26,48,"main"],[19,1,15,26,48,"main"],[20,1,15,26,48,"main"],[21,1,15,26,48,"main"],[22,1,15,26,48,"main"],[23,1,15,26,48,"main"],[24,1,15,26,48,"main"],[25,1,15,26,48,"main"],[26,1,15,26,48,"main"],[27,1,15,26,48,"main"],[28,1,15,26,48,"main"],[29,1,15,26,48,"main"],[30,1,15,26,48,"main"],[0,2,255,87,34,"orange"],[1,2,255,87,34,"orange"],[2,2,255,87,34,"orange"],[3,2,255,87,34,"orange"],[4,2,255,87,34,"orange"],[5,2,255,87,34,"orange"],[6,2,255,87,34,"orange"],[10,2,15,26,48,"main"],[11,2,15,26,48,"main"],[12,2,15,26,48,"main"],[13,2,15,26,48,"main"],[14,2,15,26,48,"main"],[19,2,15,26,48,"main"],[20,2,15,26,48,"main"],[21,2,15,26,48,"main"],[22,2,15,26,48,"main"],[23,2,15,26,48,"main"],[24,2,15,26,48,"main"],[25,2,15,26,48,"main"],[26,2,15,26,48,"main"],[27,2,15,26,48,"main"],[28,2,15,26,48,"main"],[29,2,15,26,48,"main"],[30,2,15,26,48,"main"],[31,2,15,26,48,"main"],[32,2,15,26,48,"main"],[0,3,255,87,34,"orange"],[1,3,255,87,34,"orange"],[2,3,255,87,34,"orange"],[3,3,255,87,34,"orange"],[4,3,255,87,34,"orange"],[5,3,255,87,34,"orange"],[6,3,255,87,34,"orange"],[10,3,15,26,48,"main"],[11,3,15,26,48,"main"],[12,3,15,26,48,"main"],[13,3,15,26,48,"main"],[14,3,15,26,48,"main"],[19,3,15,26,48,"main"],[20,3,15,26,48,"main"],[21,3,15,26,48,"main"],[22,3,15,26,48,"main"],[23,3,15,26,48,"main"],[24,3,15,26,48,"main"],[25,3,15,26,48,"main"],[26,3,15,26,48,"main"],[27,3,15,26,48,"main"],[28,3,15,26,48,"main"],[29,3,15,26,48,"main"],[30,3,15,26,48,"main"],[31,3,15,26,48,"main"],[32,3,15,26,48,"main"],[33,3,15,26,48,"main"],[0,4,255,87,34,"orange"],[1,4,255,87,34,"orange"],[2,4,255,87,34,"orange"],[3,4,255,87,34,"orange"],[4,4,255,87,34,"orange"],[5,4,255,87,34,"orange"],[6,4,255,87,34,"orange"],[10,4,15,26,48,"main"],[11,4,15,26,48,"main"],[12,4,15,26,48,"main"],[13,4,15,26,48,"main"],[14,4,15,26,48,"main"],[19,4,15,26,48,"main"],[20,4,15,26,48,"main"],[21,4,15,26,48,"main"],[22,4,15,26,48,"main"],[23,4,15,26,48,"main"],[24,4,15,26,48,"main"],[25,4,15,26,48,"main"],[26,4,15,26,48,"main"],[27,4,15,26,48,"main"],[28,4,15,26,48,"main"],[29,4,15,26,48,"main"],[30,4,15,26,48,"main"],[31,4,15,26,48,"main"],[32,4,15,26,48,"main"],[33,4,15,26,48,"main"],[34,4,15,26,48,"main"],[1,5,255,87,34,"orange"],[2,5,255,87,34,"orange"],[3,5,255,87,34,"orange"],[4,5,255,87,34,"orange"],[5,5,255,87,34,"orange"],[10,5,15,26,48,"main"],[11,5,15,26,48,"main"],[12,5,15,26,48,"main"],[13,5,15,26,48,"main"],[14,5,15,26,48,"main"],[19,5,15,26,48,"main"],[20,5,15,26,48,"main"],[21,5,15,26,48,"main"],[22,5,15,26,48,"main"],[23,5,15,26,48,"main"],[24,5,15,26,48,"main"],[25,5,15,26,48,"main"],[26,5,15,26,48,"main"],[27,5,15,26,48,"main"],[28,5,15,26,48,"main"],[29,5,15,26,48,"main"],[30,5,15,26,48,"main"],[31,5,15,26,48,"main"],[32,5,15,26,48,"main"],[33,5,15,26,48,"main"],[34,5,15,26,48,"main"],[35,5,15,26,48,"main"],[2,6,255,87,34,"orange"],[3,6,255,87,34,"orange"],[4,6,255,87,34,"orange"],[10,6,15,26,48,"main"],[11,6,15,26,48,"main"],[12,6,15,26,48,"main"],[13,6,15,26,48,"main"],[14,6,15,26,48,"main"],[19,6,15,26,48,"main"],[20,6,15,26,48,"main"],[21,6,15,26,48,"main"],[22,6,15,26,48,"main"],[23,6,15,26,48,"main"],[24,6,15,26,48,"main"],[25,6,15,26,48,"main"],[26,6,15,26,48,"main"],[27,6,15,26,48,"main"],[28,6,15,26,48,"main"],[29,6,15,26,48,"main"],[30,6,15,26,48,"main"],[31,6,15,26,48,"main"],[32,6,15,26,48,"main"],[33,6,15,26,48,"main"],[34,6,15,26,48,"main"],[35,6,15,26,48,"main"],[36,6,15,26,48,"main"],[10,7,15,26,48,"main"],[11,7,15,26,48,"main"],[12,7,15,26,48,"main"],[13,7,15,26,48,"main"],[14,7,15,26,48,"main"],[30,7,15,26,48,"main"],[31,7,15,26,48,"main"],[32,7,15,26,48,"main"],[33,7,15,26,48,"main"],[34,7,15,26,48,"main"],[35,7,15,26,48,"main"],[36,7,15,26,48,"main"],[10,8,15,26,48,"main"],[11,8,15,26,48,"main"],[12,8,15,26,48,"main"],[13,8,15,26,48,"main"],[14,8,15,26,48,"main"],[31,8,15,26,48,"main"],[32,8,15,26,48,"main"],[33,8,15,26,48,"main"],[34,8,15,26,48,"main"],[35,8,15,26,48,"main"],[36,8,15,26,48,"main"],[37,8,15,26,48,"main"],[10,9,15,26,48,"main"],[11,9,15,26,48,"main"],[12,9,15,26,48,"main"],[13,9,15,26,48,"main"],[14,9,15,26,48,"main"],[32,9,15,26,48,"main"],[33,9,15,26,48,"main"],[34,9,15,26,48,"main"],[35,9,15,26,48,"main"],[36,9,15,26,48,"main"],[37,9,15,26,48,"main"],[10,10,15,26,48,"main"],[11,10,15,26,48,"main"],[12,10,15,26,48,"main"],[13,10,15,26,48,"main"],[14,10,15,26,48,"main"],[32,10,15,26,48,"main"],[33,10,15,26,48,"main"],[34,10,15,26,48,"main"],[35,10,15,26,48,"main"],[36,10,15,26,48,"main"],[37,10,15,26,48,"main"],[10,11,15,26,48,"main"],[11,11,15,26,48,"main"],[12,11,15,26,48,"main"],[13,11,15,26,48,"main"],[14,11,15,26,48,"main"],[33,11,15,26,48,"main"],[34,11,15,26,48,"main"],[35,11,15,26,48,"main"],[36,11,15,26,48,"main"],[37,11,15,26,48,"main"],[10,12,15,26,48,"main"],[11,12,15,26,48,"main"],[12,12,15,26,48,"main"],[13,12,15,26,48,"main"],[14,12,15,26,48,"main"],[33,12,15,26,48,"main"],[34,12,15,26,48,"main"],[35,12,15,26,48,"main"],[36,12,15,26,48,"main"],[37,12,15,26,48,"main"],[10,13,15,26,48,"main"],[11,13,15,26,48,"main"],[12,13,15,26,48,"main"],[13,13,15,26,48,"main"],[14,13,15,26,48,"main"],[33,13,15,26,48,"main"],[34,13,15,26,48,"main"],[35,13,15,26,48,"main"],[36,13,15,26,48,"main"],[37,13,15,26,48,"main"],[10,14,15,26,48,"main"],[11,14,15,26,48,"main"],[12,14,15,26,48,"main"],[13,14,15,26,48,"main"],[14,14,15,26,48,"main"],[33,14,15,26,48,"main"],[34,14,15,26,48,"main"],[35,14,15,26,48,"main"],[36,14,15,26,48,"main"],[37,14,15,26,48,"main"],[10,15,15,26,48,"main"],[11,15,15,26,48,"main"],[12,15,15,26,48,"main"],[13,15,15,26,48,"main"],[14,15,15,26,48,"main"],[33,15,15,26,48,"main"],[34,15,15,26,48,"main"],[35,15,15,26,48,"main"],[36,15,15,26,48,"main"],[37,15,15,26,48,"main"],[10,16,15,26,48,"main"],[11,16,15,26,48,"main"],[12,16,15,26,48,"main"],[13,16,15,26,48,"main"],[14,16,15,26,48,"main"],[33,16,15,26,48,"main"],[34,16,15,26,48,"main"],[35,16,15,26,48,"main"],[36,16,15,26,48,"main"],[37,16,15,26,48,"main"],[10,17,15,26,48,"main"],[11,17,15,26,48,"main"],[12,17,15,26,48,"main"],[13,17,15,26,48,"main"],[14,17,15,26,48,"main"],[33,17,15,26,48,"main"],[34,17,15,26,48,"main"],[35,17,15,26,48,"main"],[36,17,15,26,48,"main"],[37,17,15,26,48,"main"],[10,18,15,26,48,"main"],[11,18,15,26,48,"main"],[12,18,15,26,48,"main"],[13,18,15,26,48,"main"],[14,18,15,26,48,"main"],[33,18,15,26,48,"main"],[34,18,15,26,48,"main"],[35,18,15,26,48,"main"],[36,18,15,26,48,"main"],[37,18,15,26,48,"main"],[10,19,15,26,48,"main"],[11,19,15,26,48,"main"],[12,19,15,26,48,"main"],[13,19,15,26,48,"main"],[14,19,15,26,48,"main"],[33,19,15,26,48,"main"],[34,19,15,26,48,"main"],[35,19,15,26,48,"main"],[36,19,15,26,48,"main"],[37,19,15,26,48,"main"],[10,20,15,26,48,"main"],[11,20,15,26,48,"main"],[12,20,15,26,48,"main"],[13,20,15,26,48,"main"],[14,20,15,26,48,"main"],[33,20,15,26,48,"main"],[34,20,15,26,48,"main"],[35,20,15,26,48,"main"],[36,20,15,26,48,"main"],[37,20,15,26,48,"main"],[10,21,15,26,48,"main"],[11,21,15,26,48,"main"],[12,21,15,26,48,"main"],[13,21,15,26,48,"main"],[14,21,15,26,48,"main"],[33,21,15,26,48,"main"],[34,21,15,26,48,"main"],[35,21,15,26,48,"main"],[36,21,15,26,48,"main"],[37,21,15,26,48,"main"],[10,22,15,26,48,"main"],[11,22,15,26,48,"main"],[12,22,15,26,48,"main"],[13,22,15,26,48,"main"],[14,22,15,26,48,"main"],[33,22,15,26,48,"main"],[34,22,15,26,48,"main"],[35,22,15,26,48,"main"],[36,22,15,26,48,"main"],[37,22,15,26,48,"main"],[10,23,15,26,48,"main"],[11,23,15,26,48,"main"],[12,23,15,26,48,"main"],[13,23,15,26,48,"main"],[14,23,15,26,48,"main"],[33,23,15,26,48,"main"],[34,23,15,26,48,"main"],[35,23,15,26,48,"main"],[36,23,15,26,48,"main"],[37,23,15,26,48,"main"],[10,24,15,26,48,"main"],[11,24,15,26,48,"main"],[12,24,15,26,48,"main"],[13,24,15,26,48,"main"],[14,24,15,26,48,"main"],[33,24,15,26,48,"main"],[34,24,15,26,48,"main"],[35,24,15,26,48,"main"],[36,24,15,26,48,"main"],[37,24,15,26,48,"main"],[10,25,15,26,48,"main"],[11,25,15,26,48,"main"],[12,25,15,26,48,"main"],[13,25,15,26,48,"main"],[14,25,15,26,48,"main"],[33,25,15,26,48,"main"],[34,25,15,26,48,"main"],[35,25,15,26,48,"main"],[36,25,15,26,48,"main"],[37,25,15,26,48,"main"],[10,26,15,26,48,"main"],[11,26,15,26,48,"main"],[12,26,15,26,48,"main"],[13,26,15,26,48,"main"],[14,26,15,26,48,"main"],[33,26,15,26,48,"main"],[34,26,15,26,48,"main"],[35,26,15,26,48,"main"],[36,26,15,26,48,"main"],[37,26,15,26,48,"main"],[10,27,15,26,48,"main"],[11,27,15,26,48,"main"],[12,27,15,26,48,"main"],[13,27,15,26,48,"main"],[14,27,15,26,48,"main"],[33,27,15,26,48,"main"],[34,27,15,26,48,"main"],[35,27,15,26,48,"main"],[36,27,15,26,48,"main"],[37,27,15,26,48,"main"],[10,28,15,26,48,"main"],[11,28,15,26,48,"main"],[12,28,15,26,48,"main"],[13,28,15,26,48,"main"],[14,28,15,26,48,"main"],[33,28,15,26,48,"main"],[34,28,15,26,48,"main"],[35,28,15,26,48,"main"],[36,28,15,26,48,"main"],[37,28,15,26,48,"main"],[10,29,15,26,48,"main"],[11,29,15,26,48,"main"],[12,29,15,26,48,"main"],[13,29,15,26,48,"main"],[14,29,15,26,48,"main"],[33,29,15,26,48,"main"],[34,29,15,26,48,"main"],[35,29,15,26,48,"main"],[36,29,15,26,48,"main"],[37,29,15,26,48,"main"],[10,30,15,26,48,"main"],[11,30,15,26,48,"main"],[12,30,15,26,48,"main"],[13,30,15,26,48,"main"],[14,30,15,26,48,"main"],[33,30,15,26,48,"main"],[34,30,15,26,48,"main"],[35,30,15,26,48,"main"],[36,30,15,26,48,"main"],[37,30,15,26,48,"main"],[10,31,15,26,48,"main"],[11,31,15,26,48,"main"],[12,31,15,26,48,"main"],[13,31,15,26,48,"main"],[14,31,15,26,48,"main"],[33,31,15,26,48,"main"],[34,31,15,26,48,"main"],[35,31,15,26,48,"main"],[36,31,15,26,48,"main"],[37,31,15,26,48,"main"],[10,32,15,26,48,"main"],[11,32,15,26,48,"main"],[12,32,15,26,48,"main"],[13,32,15,26,48,"main"],[14,32,15,26,48,"main"],[33,32,15,26,48,"main"],[34,32,15,26,48,"main"],[35,32,15,26,48,"main"],[36,32,15,26,48,"main"],[37,32,15,26,48,"main"],[10,33,15,26,48,"main"],[11,33,15,26,48,"main"],[12,33,15,26,48,"main"],[13,33,15,26,48,"main"],[14,33,15,26,48,"main"],[33,33,15,26,48,"main"],[34,33,15,26,48,"main"],[35,33,15,26,48,"main"],[36,33,15,26,48,"main"],[37,33,15,26,48,"main"],[10,34,15,26,48,"main"],[11,34,15,26,48,"main"],[12,34,15,26,48,"main"],[13,34,15,26,48,"main"],[14,34,15,26,48,"main"],[33,34,15,26,48,"main"],[34,34,15,26,48,"main"],[35,34,15,26,48,"main"],[36,34,15,26,48,"main"],[37,34,15,26,48,"main"],[10,35,15,26,48,"main"],[11,35,15,26,48,"main"],[12,35,15,26,48,"main"],[13,35,15,26,48,"main"],[14,35,15,26,48,"main"],[33,35,15,26,48,"main"],[34,35,15,26,48,"main"],[35,35,15,26,48,"main"],[36,35,15,26,48,"main"],[37,35,15,26,48,"main"],[10,36,15,26,48,"main"],[11,36,15,26,48,"main"],[12,36,15,26,48,"main"],[13,36,15,26,48,"main"],[14,36,15,26,48,"main"],[33,36,15,26,48,"main"],[34,36,15,26,48,"main"],[35,36,15,26,48,"main"],[36,36,15,26,48,"main"],[37,36,15,26,48,"main"],[10,37,15,26,48,"main"],[11,37,15,26,48,"main"],[12,37,15,26,48,"main"],[13,37,15,26,48,"main"],[14,37,15,26,48,"main"],[33,37,15,26,48,"main"],[34,37,15,26,48,"main"],[35,37,15,26,48,"main"],[36,37,15,26,48,"main"],[37,37,15,26,48,"main"],[10,38,15,26,48,"main"],[11,38,15,26,48,"main"],[12,38,15,26,48,"main"],[13,38,15,26,48,"main"],[14,38,15,26,48,"main"],[33,38,15,26,48,"main"],[34,38,15,26,48,"main"],[35,38,15,26,48,"main"],[36,38,15,26,48,"main"],[37,38,15,26,48,"main"],[10,39,15,26,48,"main"],[11,39,15,26,48,"main"],[12,39,15,26,48,"main"],[13,39,15,26,48,"main"],[14,39,15,26,48,"main"],[33,39,15,26,48,"main"],[34,39,15,26,48,"main"],[35,39,15,26,48,"main"],[36,39,15,26,48,"main"],[37,39,15,26,48,"main"],[10,40,15,26,48,"main"],[11,40,15,26,48,"main"],[12,40,15,26,48,"main"],[13,40,15,26,48,"main"],[14,40,15,26,48,"main"],[33,40,15,26,48,"main"],[34,40,15,26,48,"main"],[35,40,15,26,48,"main"],[36,40,15,26,48,"main"],[37,40,15,26,48,"main"],[10,41,15,26,48,"main"],[11,41,15,26,48,"main"],[12,41,15,26,48,"main"],[13,41,15,26,48,"main"],[14,41,15,26,48,"main"],[33,41,15,26,48,"main"],[34,41,15,26,48,"main"],[35,41,15,26,48,"main"],[36,41,15,26,48,"main"],[37,41,15,26,48,"main"]];

  // ==========================================
  // 2. Web Audio API 物理音效合成器
  // ==========================================
  class SoundEngine {
    constructor() {
      this.ctx = null;
      this.enabled = true;
    }

    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          this.ctx = new AudioCtx();
        }
      }
      if (this.ctx && this.ctx.state === "suspended") {
        this.ctx.resume();
      }
    }

    play(name) {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;

      const t = this.ctx.currentTime;

      if (name === "bulletShot") {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(880, t);
        osc.frequency.exponentialRampToValueAtTime(140, t + 0.18);
        gain.gain.setValueAtTime(0.25, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t);
        osc.stop(t + 0.19);
      } else if (name === "bulletHit") {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(320, t);
        osc.frequency.exponentialRampToValueAtTime(35, t + 0.22);
        gain.gain.setValueAtTime(0.35, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.22);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t);
        osc.stop(t + 0.23);

        const noiseBuffer = this.ctx.createBuffer(1, this.ctx.sampleRate * 0.1, this.ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < noiseBuffer.length; i++) {
          output[i] = (Math.random() * 2 - 1) * Math.exp(-i / (this.ctx.sampleRate * 0.02));
        }
        const noise = this.ctx.createBufferSource();
        noise.buffer = noiseBuffer;
        const noiseGain = this.ctx.createGain();
        noiseGain.gain.setValueAtTime(0.15, t);
        noiseGain.gain.linearRampToValueAtTime(0.001, t + 0.1);
        noise.connect(noiseGain);
        noiseGain.connect(this.ctx.destination);
        noise.start(t);
      } else if (name === "open" || name === "close") {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(name === "open" ? 520 : 380, t);
        osc.frequency.exponentialRampToValueAtTime(name === "open" ? 780 : 260, t + 0.08);
        gain.gain.setValueAtTime(0.08, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.08);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t);
        osc.stop(t + 0.09);
      } else if (name === "sort" || name === "drop") {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(340, t);
        osc.frequency.exponentialRampToValueAtTime(680, t + 0.25);
        gain.gain.setValueAtTime(0.15, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t);
        osc.stop(t + 0.26);
      } else if (name === "takeoff") {
        // 1. 涡轮喷射加速音 (Turbine acceleration whistle)
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(180, t);
        osc.frequency.exponentialRampToValueAtTime(1400, t + 0.9);
        gain.gain.setValueAtTime(0.02, t);
        gain.gain.linearRampToValueAtTime(0.22, t + 0.35);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.95);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t);
        osc.stop(t + 0.98);

        // 2. 喷气尾焰白噪音气流 (Exhaust airflow hiss)
        const dur = 0.95;
        const noiseBuffer = this.ctx.createBuffer(1, Math.floor(this.ctx.sampleRate * dur), this.ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < noiseBuffer.length; i++) {
          output[i] = (Math.random() * 2 - 1) * Math.min(1, i / (this.ctx.sampleRate * 0.25));
        }
        const noise = this.ctx.createBufferSource();
        noise.buffer = noiseBuffer;
        const filter = this.ctx.createBiquadFilter();
        filter.type = "bandpass";
        filter.frequency.setValueAtTime(600, t);
        filter.frequency.exponentialRampToValueAtTime(3600, t + dur);
        filter.Q.setValueAtTime(2.5, t);
        const noiseGain = this.ctx.createGain();
        noiseGain.gain.setValueAtTime(0.05, t);
        noiseGain.gain.linearRampToValueAtTime(0.25, t + 0.35);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, t + dur);
        noise.connect(filter);
        filter.connect(noiseGain);
        noiseGain.connect(this.ctx.destination);
        noise.start(t);
      }
    }
  }

  const sound = new SoundEngine();
  window.rowsSound = sound;

  // ==========================================
  // 3. 辅助数学计算与物理残影
  // ==========================================
  const easeSmooth = (e) => e * e * (3 - 2 * e);
  const dustLag = (e) => e * (0.4 + 1.15 * Math.pow(Math.random(), 0.7));
  const wanderAmp = (w, h) => Math.max(1.6, 0.035 * Math.max(w, h));
  const wanderFreq = () => 4 + 6 * Math.random();

  const STREAK_THRESHOLDS = [2.15, 3.85, 5.55, 7];
  const streakBin = (e) => (e < 3 ? 0 : e < 4.7 ? 1 : e < 6.4 ? 2 : 3);
  const streakScale = (e) => Math.max(0.3, 1.15 / (1.15 + 0.55 * (STREAK_THRESHOLDS[e] - 1.15)));

  function addStreak(streaks, bin, x, y, dx, dy) {
    let s = streaks[bin];
    if (!s) {
      s = streaks[bin] = {
        full: new Path2D(),
        mid: new Path2D(),
        head: new Path2D()
      };
    }
    s.full.moveTo(x - dx, y - dy);
    s.full.lineTo(x, y);
    s.mid.moveTo(x - 0.62 * dx, y - 0.62 * dy);
    s.mid.lineTo(x, y);
    s.head.moveTo(x - 0.3 * dx, y - 0.3 * dy);
    s.head.lineTo(x, y);
  }

  function strokeStreaks(ctx, streaks, colorRgb, alphaMul, strokeWidth) {
    ctx.lineCap = "round";
    for (let i = 0; i < streaks.length; i++) {
      const s = streaks[i];
      if (!s) continue;
      const r = alphaMul * streakScale(i);
      ctx.lineWidth = strokeWidth * 1.5;
      ctx.strokeStyle = `rgba(${colorRgb}, ${0.25 * r})`;
      ctx.stroke(s.full);
      ctx.lineWidth = strokeWidth * 1.1;
      ctx.strokeStyle = `rgba(${colorRgb}, ${0.45 * r})`;
      ctx.stroke(s.mid);
      ctx.lineWidth = strokeWidth * 0.8;
      ctx.strokeStyle = `rgba(${colorRgb}, ${0.75 * r})`;
      ctx.stroke(s.head);
    }
  }

  // ==========================================
  // 4. 17 标志粒子动力学引擎
  // ==========================================
  function create17Assembly(targetCanvas, rawPoints, pw, ph, options = {}) {
    const ctx = targetCanvas.getContext("2d");
    if (!ctx) return null;

    const scaleFactor = options.scaleFactor || 1;
    const params = {
      assembleMs: 620,
      staggerMs: 240,
      gatherSpread: 3.2,
      followLag: 10,
      scaleFactor: scaleFactor,
      ...options.params
    };

    // 质点平铺覆盖大小
    const particlePixelSize = Math.max(1.6, scaleFactor + 0.35);

    const maxDim = Math.max(pw, ph) * scaleFactor;
    const spread = maxDim * params.gatherSpread;
    const centerX = (pw * scaleFactor - 1) / 2;
    const centerY = (ph * scaleFactor - 1) / 2;

    const particles = [];

    for (const pt of rawPoints) {
      const x = pt[0] * scaleFactor;
      const y = pt[1] * scaleFactor;
      const pr = pt[2];
      const pg = pt[3];
      const pb = pt[4];
      const group = pt[5]; // "orange" | "main"

      const angle = Math.random() * Math.PI * 2;
      const radius = spread * (0.35 + 0.65 * Math.random());
      const sx = centerX + Math.cos(angle) * radius * 1.15;
      const sy = centerY + Math.sin(angle) * radius * 0.7 - 0.18 * spread;

      const midX = (sx + x) / 2;
      const midY = (sy + y) / 2;
      const dx = x - sx;
      const dy = y - sy;
      const dist = Math.hypot(dx, dy) || 1;
      const curveK = (Math.random() - 0.5) * 0.55;

      particles.push({
        hx: x,
        hy: y,
        sx: sx,
        sy: sy,
        cx: midX + (-dy / dist) * dist * curveK,
        cy: midY + (dx / dist) * dist * curveK,
        p: options.settled ? 1 : 0,
        rate: 0.92 + 0.28 * Math.random(),
        delay: Math.random() * params.staggerMs,
        born: options.settled,
        lx: options.originX,
        ly: options.originY,
        lagK: dustLag(params.followLag),
        wf: wanderFreq(),
        wp: Math.random() * Math.PI * 2,
        r: pr,
        g: pg,
        b: pb,
        group: group,
        ax: x,
        ay: y,
        fm: 0,
        mx: 0,
        my: 0,
        bx: 0,
        by: 0,
        bvx: 0,
        bvy: 0,
        px: NaN,
        py: NaN
      });
    }

    if (!particles.length) return null;

    let originX = options.originX;
    let originY = options.originY;
    let animFrame = 0;
    let isRunning = false;
    let isDisposed = false;
    let pointer = null;
    let bullet = null;
    let startTime = options.settled ? performance.now() : -1;
    let lastTime = 0;
    let isAssembled = options.settled;

    const pullRadius = 0.65 * maxDim;
    const maxPullDist = Math.max(6, 0.17 * maxDim);
    const blastRadius = 0.65 * maxDim;
    const blastForce = 48 * maxDim;
    const bulletRadius = Math.max(1.3, 0.028 * maxDim);
    const bulletTrailLen = 1.2 * maxDim;
    const hitThresholdSq = Math.pow(bulletRadius + 0.8, 2);

    let altShape = null;
    let morphTarget = 0;
    let isDarkMode = options.isDark || false;
    const wanderIntensity = wanderAmp(pw * scaleFactor, ph * scaleFactor);
    const lagSpread = 1.2 * maxDim;
    let globalTime = 0;

    function triggerAssemblyDone() {
      if (!isAssembled) {
        isAssembled = true;
        options.onAssembled && options.onAssembled();
      }
    }

    function requestFrame() {
      if (!isRunning && !isDisposed) {
        isRunning = true;
        lastTime = performance.now();
        animFrame = requestAnimationFrame(updateLoop);
      }
    }

    function stopFrame() {
      isRunning = false;
      if (animFrame) {
        cancelAnimationFrame(animFrame);
        animFrame = 0;
      }
    }

    function updateLoop(now) {
      if (isDisposed) return;
      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;
      globalTime = now;

      const elapsed = startTime < 0 ? -1 : now - startTime;
      const assembleSpeed = 1000 / params.assembleMs;

      // 1. 子弹发射与爆炸
      if (bullet) {
        if (bullet.hit) {
          bullet = null;
        } else {
          bullet.px = bullet.x;
          bullet.py = bullet.y;

          const distToTarget = Math.hypot(bullet.tx - bullet.x, bullet.ty - bullet.y);
          const stepDist = Math.hypot(bullet.vx, bullet.vy) * dt;

          const nextX = stepDist >= distToTarget ? bullet.tx : bullet.x + bullet.vx * dt;
          const nextY = stepDist >= distToTarget ? bullet.ty : bullet.y + bullet.vy * dt;

          const segX = nextX - bullet.px;
          const segY = nextY - bullet.py;
          const segLenSq = segX * segX + segY * segY;

          let hitTime = Infinity;

          if (segLenSq > 1e-4) {
            for (const p of particles) {
              if (!p.born || Number.isNaN(p.px)) continue;
              const pxFromBullet = p.px - bullet.px;
              const pyFromBullet = p.py - bullet.py;
              const proj = Math.max(0, Math.min(1, (pxFromBullet * segX + pyFromBullet * segY) / segLenSq));
              const perpX = pxFromBullet - segX * proj;
              const perpY = pyFromBullet - segY * proj;
              if (perpX * perpX + perpY * perpY <= hitThresholdSq && proj < hitTime) {
                hitTime = proj;
              }
            }
          }

          if (hitTime !== Infinity || stepDist >= distToTarget) {
            bullet.x = hitTime !== Infinity ? bullet.px + segX * hitTime : nextX;
            bullet.y = hitTime !== Infinity ? bullet.py + segY * hitTime : nextY;
            bullet.hit = true;

            options.onImpact && options.onImpact();

            const bSpeed = Math.hypot(bullet.vx, bullet.vy) || 1;
            const bDirX = bullet.vx / bSpeed;
            const bDirY = bullet.vy / bSpeed;
            const randPhase1 = Math.random() * Math.PI * 2;
            const randPhase2 = Math.random() * Math.PI * 2;
            const randPhase3 = Math.random() * Math.PI * 2;

            for (const p of particles) {
              if (!p.born || Number.isNaN(p.px)) continue;
              const pdx = p.px - bullet.x;
              const pdy = p.py - bullet.y;
              const pdist = Math.hypot(pdx, pdy);
              const pAngle = pdist > 0.001 ? Math.atan2(pdy, pdx) : Math.random() * Math.PI * 2;
              const effRadius =
                blastRadius *
                (1 +
                  0.3 * Math.sin(2 * pAngle + randPhase1) +
                  0.22 * Math.sin(3 * pAngle + randPhase2) +
                  0.14 * Math.sin(5 * pAngle + randPhase3)) *
                (0.8 + 0.4 * Math.random());

              if (pdist >= effRadius) continue;

              const force = blastForce * Math.pow(1 - pdist / effRadius, 0.7) * (0.55 + 0.9 * Math.random());
              const angleNoise = (Math.random() - 0.5) * 1.1;

              p.bvx += Math.cos(pAngle + angleNoise) * force + bDirX * force * 0.6;
              p.bvy += Math.sin(pAngle + angleNoise) * force + bDirY * force * 0.6;
            }
          } else {
            bullet.x = nextX;
            bullet.y = nextY;
          }
        }
      }

      // 2. 粒子物理循环
      let activeCount = bullet ? 1 : 0;

      for (const p of particles) {
        if (!p.born) {
          if (elapsed >= 0 && elapsed >= p.delay) {
            p.born = true;
          } else {
            activeCount++;
            continue;
          }
        }

        if (p.p < 1) {
          p.p = Math.min(1, p.p + assembleSpeed * p.rate * dt);
          if (p.p < 1) activeCount++;
        }

        if (p.bx !== 0 || p.by !== 0 || p.bvx !== 0 || p.bvy !== 0) {
          p.bvx -= (24 * p.bx + 6.3 * p.bvx) * dt;
          p.bvy -= (24 * p.by + 6.3 * p.bvy) * dt;
          p.bx += p.bvx * dt;
          p.by += p.bvy * dt;

          if (Math.abs(p.bx) < 0.06 && Math.abs(p.by) < 0.06 && Math.abs(p.bvx) < 1.2 && Math.abs(p.bvy) < 1.2) {
            p.bx = 0;
            p.by = 0;
            p.bvx = 0;
            p.bvy = 0;
          } else {
            activeCount++;
          }
        }

        const targetMorph = altShape ? morphTarget : 0;
        if (p.fm !== targetMorph) {
          const mRate = 4.35 * p.rate * dt;
          p.fm = targetMorph === 1 ? Math.min(1, p.fm + mRate) : Math.max(0, p.fm - mRate);
          if (p.fm !== targetMorph) activeCount++;
        }

        const lagAlpha = Math.min(1, p.lagK * dt);
        p.lx += (originX - p.lx) * lagAlpha;
        p.ly += (originY - p.ly) * lagAlpha;
        if (Math.abs(originX - p.lx) > 0.35 || Math.abs(originY - p.ly) > 0.35) {
          activeCount++;
        } else {
          p.lx = originX;
          p.ly = originY;
        }

        let pullTargetX = 0;
        let pullTargetY = 0;
        if (pointer && p.p > 0.5) {
          const morphEase = easeSmooth(p.fm);
          const currBaseX = p.lx + p.hx + (p.ax - p.hx) * morphEase;
          const currBaseY = p.ly + p.hy + (p.ay - p.hy) * morphEase;
          const ptrDx = pointer.x - currBaseX;
          const ptrDy = pointer.y - currBaseY;
          const ptrDist = Math.hypot(ptrDx, ptrDy);

          if (ptrDist > 0.001 && ptrDist < pullRadius) {
            const normDist = 1 - ptrDist / pullRadius;
            const pullAmount = Math.min(maxPullDist * normDist * Math.sqrt(normDist), 0.65 * ptrDist);
            pullTargetX = (ptrDx / ptrDist) * pullAmount;
            pullTargetY = (ptrDy / ptrDist) * pullAmount;
          }
        }

        if (p.mx !== pullTargetX || p.my !== pullTargetY) {
          const ptrRate = Math.min(1, 9 * p.rate * dt);
          p.mx += (pullTargetX - p.mx) * ptrRate;
          p.my += (pullTargetY - p.my) * ptrRate;
          if (Math.abs(p.mx - pullTargetX) < 0.04 && Math.abs(p.my - pullTargetY) < 0.04) {
            p.mx = pullTargetX;
            p.my = pullTargetY;
          }
          if (p.mx !== 0 || p.my !== 0 || pullTargetX !== 0 || pullTargetY !== 0) {
            activeCount++;
          }
        }
      }

      // 3. 渲染
      renderParticles(ctx, targetCanvas);

      if (!isAssembled && startTime >= 0) {
        let allBornAndReady = true;
        for (const p of particles) {
          if (!p.born || p.p < 1) {
            allBornAndReady = false;
            break;
          }
        }
        if (allBornAndReady) triggerAssemblyDone();
      }

      if (activeCount > 0 || pointer) {
        animFrame = requestAnimationFrame(updateLoop);
      } else {
        stopFrame();
      }
    }

    function renderParticles(ctx, tCanvas) {
      ctx.clearRect(0, 0, tCanvas.width, tCanvas.height);

      // 确保橙色粒子压在黑色粒子图层下方 (先绘制 orange，后绘制 main 覆盖在上层)
      const groups = ["orange", "main"];
      const streakMap = { main: [], orange: [] };

      for (const g of groups) {
        for (const p of particles) {
          if (p.group !== g || !p.born) continue;

          const ep = easeSmooth(p.p);
          const ip = 1 - ep;
          const em = easeSmooth(p.fm);

          const targetX = p.hx + (p.ax - p.hx) * em;
          const targetY = p.hy + (p.ay - p.hy) * em;

          let wanderX = 0;
          let wanderY = 0;
          const lagDist = Math.hypot(p.lx - originX, p.ly - originY);
          if (lagDist > 1.5) {
            const wanderFactor = Math.min(1, lagDist / lagSpread) * wanderIntensity;
            const wTime = 0.001 * globalTime * p.wf + p.wp;
            wanderX = Math.cos(wTime) * wanderFactor;
            wanderY = Math.sin(1.27 * wTime + 0.9 * p.wp) * wanderFactor;
          }

          const drawX = p.lx + ip * ip * p.sx + 2 * ip * ep * p.cx + ep * ep * targetX + p.mx + p.bx + wanderX;
          const drawY = p.ly + ip * ip * p.sy + 2 * ip * ep * p.cy + ep * ep * targetY + p.my + p.by + wanderY;

          const moveX = drawX - p.px;
          const moveY = drawY - p.py;
          const moveDist = Math.hypot(moveX, moveY);

          // 颜色计算：
          // 浅色模式：主色为原底色深蓝/黑 rgb(15, 26, 48)，橙色为 rgb(255, 87, 34)
          // 暗色模式：主色自适应为高亮亮蓝白 rgb(225, 232, 248)
          const targetMainR = isDarkMode ? 225 : 15;
          const targetMainG = isDarkMode ? 232 : 26;
          const targetMainB = isDarkMode ? 248 : 48;

          let curR = p.r;
          let curG = p.g;
          let curB = p.b;

          if (g === "main") {
            if (isDarkMode) {
              curR = targetMainR;
              curG = targetMainG;
              curB = targetMainB;
            }
          } else if (g === "orange") {
            // 形变为小房子时，橙色平滑同化并压入深色底层
            if (p.fm > 0) {
              const emColor = easeSmooth(p.fm);
              curR = Math.round(p.r + (targetMainR - p.r) * emColor);
              curG = Math.round(p.g + (targetMainG - p.g) * emColor);
              curB = Math.round(p.b + (targetMainB - p.b) * emColor);
            }
          }

          if (moveDist >= 1.3) {
            const sLen = Math.min(moveDist, 7) / moveDist;
            addStreak(streakMap[g], streakBin(Math.min(moveDist, 7)), drawX, drawY, moveX * sLen, moveY * sLen);
          } else {
            ctx.fillStyle = `rgba(${curR}, ${curG}, ${curB}, 1)`;
            if (g === "orange" && p.fm < 0.2) {
              const rad = particlePixelSize * 0.54;
              ctx.beginPath();
              ctx.arc(drawX + rad, drawY + rad, rad, 0, Math.PI * 2);
              ctx.fill();
            } else {
              ctx.fillRect(drawX, drawY, particlePixelSize, particlePixelSize);
            }
          }

          p.px = drawX;
          p.py = drawY;
        }

        const colorStr = g === "orange" ? "255, 87, 34" : (isDarkMode ? "225, 232, 248" : "15, 26, 48");
        strokeStreaks(ctx, streakMap[g], colorStr, 1, particlePixelSize);
      }

      // 子弹拖尾
      if (bullet) {
        let bdx = bullet.x - bullet.px;
        let bdy = bullet.y - bullet.py;
        const bLen = Math.hypot(bdx, bdy);

        if (bLen > 0.5) {
          if (bLen > bulletTrailLen) {
            bdx *= bulletTrailLen / bLen;
            bdy *= bulletTrailLen / bLen;
          }

          ctx.lineCap = "round";
          ctx.lineWidth = 1.9 * bulletRadius;
          ctx.strokeStyle = "rgba(255, 87, 34, 0.2)";
          ctx.beginPath();
          ctx.moveTo(bullet.x - bdx, bullet.y - bdy);
          ctx.lineTo(bullet.x, bullet.y);
          ctx.stroke();

          ctx.lineWidth = 1.3 * bulletRadius;
          ctx.strokeStyle = "rgba(255, 87, 34, 0.4)";
          ctx.beginPath();
          ctx.moveTo(bullet.x - 0.55 * bdx, bullet.y - 0.55 * bdy);
          ctx.lineTo(bullet.x, bullet.y);
          ctx.stroke();

          ctx.lineWidth = 0.85 * bulletRadius;
          ctx.strokeStyle = "rgba(255, 87, 34, 0.7)";
          ctx.beginPath();
          ctx.moveTo(bullet.x - 0.26 * bdx, bullet.y - 0.26 * bdy);
          ctx.lineTo(bullet.x, bullet.y);
          ctx.stroke();
        }

        if (!bullet.hit) {
          ctx.fillStyle = "#ff5722";
          ctx.beginPath();
          ctx.arc(bullet.x, bullet.y, bulletRadius, 0, 2 * Math.PI);
          ctx.fill();
        }
      }
    }

    // ==========================================
    // 目标变体形状：极简小房子图标 (屋顶 + 细缝 + 半圆底座)
    // ==========================================
    function setupHouseShape() {
      const housePoints = [];
      const aw = Math.round(pw * scaleFactor);
      const ah = Math.round(ph * scaleFactor);

      for (let y = 0; y < ah; y++) {
        for (let x = 0; x < aw; x++) {
          const nx = (x / aw) * 38;
          const ny = (y / ah) * 42;

          // 1. Roof (屋顶: 顶部微倒圆，斜边向下平缓延伸，底部水平切线)
          let isRoof = false;
          if (ny >= 7.0 && ny <= 18.0) {
            const roofH = 11.0;
            const progress = (ny - 7.0) / roofH;
            const maxW = 3.2 + progress * 10.8; // 从顶点宽 3.2 延伸到底宽 14.0
            isRoof = Math.abs(nx - 19) <= maxW;
          }

          // 2. Body (底座: 平顶，顶部微倒角，下部深 U 形圆角碗状)
          let isBody = false;
          if (ny >= 21.0 && ny <= 36.5) {
            const topCornerRound = ny < 23.0 ? (23.0 - ny) * 0.8 : 0;
            const bodyMaxW = 11.6 - topCornerRound;

            if (ny <= 26.5) {
              isBody = Math.abs(nx - 19) <= bodyMaxW;
            } else {
              const dx = Math.abs(nx - 19) / 11.6;
              const dy = (ny - 26.5) / 10.0;
              isBody = (dx * dx + dy * dy) <= 1.0;
            }
          }

          if (isRoof || isBody) {
            housePoints.push([x, y]);
          }
        }
      }

      if (housePoints.length > 0) {
        altShape = true;
        const sortedHouse = [...housePoints]
          .sort((a, b) => (a[1] * 100 + a[0]) - (b[1] * 100 + b[0]));

        // 1. 黑色/主色粒子完整构建小房子的完整轮廓与实体（屋顶+底座）
        const mainParticles = particles.filter(p => p.group === "main")
          .sort((a, b) => (a.hy * 100 + a.hx) - (b.hy * 100 + b.hx));

        for (let i = 0; i < mainParticles.length; i++) {
          const hIdx = Math.min(sortedHouse.length - 1, Math.floor((i / mainParticles.length) * sortedHouse.length));
          const [ax, ay] = sortedHouse[hIdx];
          mainParticles[i].ax = ax;
          mainParticles[i].ay = ay;
        }

        // 2. 橙色粒子压在黑色底层内部，完全被黑色粒子图层覆盖
        const orangeParticles = particles.filter(p => p.group === "orange");
        for (let i = 0; i < orangeParticles.length; i++) {
          const hIdx = Math.min(sortedHouse.length - 1, Math.floor(((i + 15) / (orangeParticles.length + 30)) * sortedHouse.length));
          const [ax, ay] = sortedHouse[hIdx];
          orangeParticles[i].ax = ax;
          orangeParticles[i].ay = ay;
        }
      }
    }

    setupHouseShape();

    return {
      start() {
        if (!isDisposed && startTime < 0) {
          startTime = performance.now();
          requestFrame();
        }
      },
      restart() {
        if (isDisposed) return;
        startTime = performance.now();
        isAssembled = false;
        for (const p of particles) {
          p.p = 0;
          p.born = false;
        }
        requestFrame();
      },
      setOrigin(x, y, snap = false) {
        if (isDisposed) return;
        originX = x;
        originY = y;
        if (snap) {
          for (const p of particles) {
            p.lx = x;
            p.ly = y;
          }
        }
        requestFrame();
      },
      setPointer(p) {
        if (isDisposed) return;
        if (p || pointer) {
          pointer = p;
          requestFrame();
        }
      },
      shoot(targetX, targetY) {
        if (isDisposed) return;
        const w = targetCanvas.width;
        const h = targetCanvas.height;
        const pad = 0.4 * maxDim;

        const edge = Math.floor(4 * Math.random());
        const randPos = Math.random();
        const startX = edge === 0 ? randPos * w : edge === 1 ? w + pad : edge === 2 ? randPos * w : -pad;
        const startY = edge === 0 ? -pad : edge === 1 ? randPos * h : edge === 2 ? h + pad : randPos * h;

        const dist = Math.hypot(targetX - startX, targetY - startY) || 1;
        const speed = Math.hypot(w, h) / 0.22;

        bullet = {
          x: startX,
          y: startY,
          px: startX,
          py: startY,
          vx: ((targetX - startX) / dist) * speed,
          vy: ((targetY - startY) / dist) * speed,
          tx: targetX,
          ty: targetY,
          hit: false
        };

        requestFrame();
      },
      morphTo(target) {
        if (!isDisposed && morphTarget !== target) {
          morphTarget = target;
          requestFrame();
        }
      },
      setTheme(dark) {
        if (isDisposed || isDarkMode === dark) return;
        isDarkMode = dark;
        requestFrame();
      },
      dispose() {
        isDisposed = true;
        stopFrame();
      }
    };
  }

  // ==========================================
  // 5. 页面控制器
  // ==========================================
  class CustomLogoApp {
    constructor() {
      this.canvas = document.getElementById("logo-assembly-canvas");
      this.homeAnchor = document.getElementById("home-logo-anchor");
      this.cornerAnchor = document.getElementById("corner-logo-anchor");
      this.themeToggle = document.getElementById("btn-theme-toggle");
      this.soundToggle = document.getElementById("btn-sound-toggle");
      this.themeLabel = document.getElementById("theme-label");
      this.soundLabel = document.getElementById("sound-label");

      this.dpr = Math.min(window.devicePixelRatio || 1, 2);
      this.assembly = null;

      this.logoWidth = 38;
      this.logoHeight = 42;
      this.scrollProgress = 0;
      this.isCornerHovered = false;
      this.isReturningTop = false;

      this.homePos = { left: 0, top: 0 };
      this.cornerPos = { left: 40, top: 14 };
      this.currentPos = { left: 0, top: 0 };

      this.init();
    }

    init() {
      this.handleResize();
      this.setupAssembly();
      this.bindEvents();

      // 即刻启动粒子聚拢动画，消弭进入时的空白停顿
      requestAnimationFrame(() => {
        if (this.assembly) this.assembly.start();
      });
    }

    setupAssembly(isSettled = false) {
      this.updatePositions();
      const [curX, curY] = this.computeCurrentLogoPos();
      this.currentPos.left = curX;
      this.currentPos.top = curY;

      if (this.assembly) {
        this.assembly.dispose();
      }

      const isDark = document.documentElement.getAttribute("data-theme") === "dark";

      this.assembly = create17Assembly(this.canvas, GLYPH_17_POINTS, 38, 42, {
        originX: this.currentPos.left * this.dpr,
        originY: this.currentPos.top * this.dpr,
        scaleFactor: this.dpr,
        settled: isSettled,
        isDark: isDark,
        onImpact: () => sound.play("bulletHit")
      });

      if (this.assembly && isSettled) {
        this.assembly.start();
      }
    }

    updatePositions() {
      if (this.homeAnchor) {
        const r = this.homeAnchor.getBoundingClientRect();
        this.homePos.left = r.left + window.scrollX;
        this.homePos.top = r.top + window.scrollY;
        this.logoWidth = r.width || 38;
        this.logoHeight = r.height || 42;
      }
      if (this.cornerAnchor) {
        const cr = this.cornerAnchor.getBoundingClientRect();
        this.cornerPos.left = cr.left;
        this.cornerPos.top = cr.top;
      }
    }

    handleResize() {
      this.dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      this.canvas.width = Math.round(w * this.dpr);
      this.canvas.height = Math.round(h * this.dpr);
      this.canvas.style.width = `${w}px`;
      this.canvas.style.height = `${h}px`;
      this.updatePositions();

      const [curX, curY] = this.computeCurrentLogoPos();
      this.currentPos.left = curX;
      this.currentPos.top = curY;

      if (!this.assembly) {
        this.setupAssembly(false);
      } else {
        // 即时同步粒子原点并重新渲染，不销毁粒子实体
        this.assembly.setOrigin(curX * this.dpr, curY * this.dpr, true);
      }
    }

    computeCurrentLogoPos() {
      const scrollY = window.scrollY;
      const heroX = this.homePos.left - window.scrollX;
      const heroY = this.homePos.top - window.scrollY;

      const cornerX = this.cornerPos.left;
      const cornerY = this.cornerPos.top;

      let targetProgress = scrollY > 160 ? 1 : scrollY < 20 ? 0 : (scrollY - 20) / 140;
      if (this.isReturningTop) targetProgress = 0;

      this.scrollProgress += (targetProgress - this.scrollProgress) * 0.18;
      if (Math.abs(targetProgress - this.scrollProgress) < 0.001) {
        this.scrollProgress = targetProgress;
      }

      const t = easeSmooth(this.scrollProgress);

      let curX = heroX + (cornerX - heroX) * t;
      let curY = heroY + (cornerY - heroY) * t;

      const dx = cornerX - heroX;
      const dy = cornerY - heroY;
      const dist = Math.hypot(dx, dy);
      if (dist > 1) {
        let perpX = -dy / dist;
        let perpY = dx / dist;
        if (Math.abs(dy) >= Math.abs(dx) ? perpX < 0 : perpY < 0) {
          perpX = -perpX;
          perpY = -perpY;
        }
        const arcHeight = Math.min(0.16 * dist, 80) * Math.sin(Math.PI * t);
        curX += perpX * arcHeight;
        curY += perpY * arcHeight;
      }

      return [curX, curY];
    }

    bindEvents() {
      window.addEventListener("resize", () => {
        this.handleResize();
      });

      let ticking = false;
      const updateOnScroll = () => {
        const [x, y] = this.computeCurrentLogoPos();
        this.currentPos.left = x;
        this.currentPos.top = y;

        if (this.assembly) {
          this.assembly.setOrigin(x * this.dpr, y * this.dpr);
        }

        const sY = window.scrollY;
        if (Math.abs(this.scrollProgress - (sY > 160 ? 1 : sY < 20 ? 0 : (sY - 20) / 140)) > 0.001) {
          requestAnimationFrame(updateOnScroll);
        } else {
          ticking = false;
        }
      };

      window.addEventListener(
        "scroll",
        () => {
          if (!ticking) {
            ticking = true;
            requestAnimationFrame(updateOnScroll);
          }
        },
        { passive: true }
      );

      window.addEventListener("pointermove", (e) => {
        if (!this.assembly) return;

        const lx = this.currentPos.left;
        const ly = this.currentPos.top;
        const lw = this.logoWidth;
        const lh = this.logoHeight;

        const isNear =
          e.clientX >= lx - 44 && e.clientX <= lx + lw + 44 && e.clientY >= ly - 44 && e.clientY <= ly + lh + 44;

        const isDirectHit =
          e.clientX >= lx - 12 && e.clientX <= lx + lw + 12 && e.clientY >= ly - 12 && e.clientY <= ly + lh + 12;

        const isCorner = this.scrollProgress > 0.6;
        if (isCorner && isDirectHit) {
          if (!this.isCornerHovered) {
            this.isCornerHovered = true;
            this.assembly.morphTo(1);
            sound.play("open");
            document.body.style.cursor = "pointer";
          }
        } else {
          if (this.isCornerHovered) {
            this.isCornerHovered = false;
            this.assembly.morphTo(0);
            sound.play("close");
            document.body.style.cursor = "";
          }
        }

        if (isNear && !this.isCornerHovered) {
          this.assembly.setPointer({
            x: e.clientX * this.dpr,
            y: e.clientY * this.dpr
          });
        } else {
          this.assembly.setPointer(null);
        }
      });

      window.addEventListener("click", (e) => {
        if (
          e.target.closest(".nav-btn") ||
          e.target.closest(".nav-control-btn") ||
          e.target.closest(".btn") ||
          e.target.closest(".icon-btn") ||
          e.target.closest(".kbd-pill-btn") ||
          e.target.closest(".console-tab") ||
          e.target.closest(".site-link")
        ) return;

        const lx = this.currentPos.left;
        const ly = this.currentPos.top;
        const lw = this.logoWidth;
        const lh = this.logoHeight;

        const isLogoClick =
          e.clientX >= lx - 14 && e.clientX <= lx + lw + 14 && e.clientY >= ly - 14 && e.clientY <= ly + lh + 14;

        if (isLogoClick) {
          if (this.scrollProgress > 0.6) {
            sound.play("sort");
            this.isReturningTop = true;
            this.assembly.morphTo(0);
            window.scrollTo({ top: 0, behavior: "smooth" });
            setTimeout(() => {
              this.isReturningTop = false;
            }, 600);
          } else {
            sound.play("bulletShot");
            this.assembly.shoot(e.clientX * this.dpr, e.clientY * this.dpr);
          }
        }
      });

      document.getElementById("btn-shoot-test")?.addEventListener("click", () => {
        const lx = this.currentPos.left + this.logoWidth / 2;
        const ly = this.currentPos.top + this.logoHeight / 2;
        sound.play("bulletShot");
        this.assembly.shoot(lx * this.dpr, ly * this.dpr);
      });

      document.getElementById("btn-reassemble-test")?.addEventListener("click", () => {
        sound.play("open");
        this.assembly.restart();
      });

      document.getElementById("btn-scroll-down-test")?.addEventListener("click", () => {
        window.scrollTo({ top: 480, behavior: "smooth" });
      });

      document.getElementById("btn-back-to-top")?.addEventListener("click", () => {
        sound.play("sort");
        window.scrollTo({ top: 0, behavior: "smooth" });
      });

      this.themeToggle?.addEventListener("click", () => {
        const curTheme = document.documentElement.getAttribute("data-theme");
        const nextTheme = curTheme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", nextTheme);
        localStorage.setItem("site-theme", nextTheme);
        if (this.themeLabel) this.themeLabel.textContent = nextTheme === "dark" ? "Dark" : "Light";
        if (this.assembly) {
          this.assembly.setTheme(nextTheme === "dark");
        }
      });

      // 监听跨页面主题变更实时同步
      window.addEventListener("storage", (e) => {
        if (e.key === "site-theme" && e.newValue) {
          document.documentElement.setAttribute("data-theme", e.newValue);
          if (this.themeLabel) this.themeLabel.textContent = e.newValue === "dark" ? "Dark" : "Light";
          if (this.assembly) {
            this.assembly.setTheme(e.newValue === "dark");
          }
        }
      });

      this.soundToggle?.addEventListener("click", () => {
        sound.enabled = !sound.enabled;
        this.soundLabel.textContent = sound.enabled ? "Sound: ON" : "Sound: OFF";
        this.soundToggle.classList.toggle("sound-active", sound.enabled);
        this.soundToggle.classList.toggle("sound-on", sound.enabled);
      });

      // 绑定 Rows.gg 官方 1:1「全部项目」蓄力发射交互
      const moreBtn = document.getElementById("btn-view-all-projects");
      if (moreBtn) {
        moreBtn.addEventListener("click", (e) => {
          if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
          e.preventDefault();
          const href = moreBtn.getAttribute("href") || "projects.html";
          triggerRowsDemoArrow(moreBtn, href);
        });
      }
    }
  }

  // ==========================================
  // 5. Rows.gg 官方 1:1 极简精工蓄力发射引擎 (Recoil -> Shake -> Shake2 -> Fire)
  // ==========================================
  function triggerRowsDemoArrow(btnEl, targetHref) {
    if (!btnEl || btnEl.dataset.charging === "true") return;
    btnEl.dataset.charging = "true";

    const arrowEl = btnEl.querySelector(".rows-demo-arrow") || btnEl;
    const timeouts = [];

    if (sound) sound.play("open");

    // 0ms -> 蓄力拉弓态 (-5px 微回拉，尾部紧绷缩进)
    btnEl.setAttribute("data-charge", "recoil");

    // 280ms -> 蓄力微震 (Soft Tension Shake)
    timeouts.push(window.setTimeout(() => {
      btnEl.setAttribute("data-charge", "shake");
    }, 280));

    // 620ms -> 临界高频剧震 (Hard Tension Shake)
    timeouts.push(window.setTimeout(() => {
      btnEl.setAttribute("data-charge", "shake2");
      if (sound) sound.play("sort");
    }, 620));

    // 1020ms (整整 1.0 秒沉浸蓄力后) -> 破空起飞发射！
    timeouts.push(window.setTimeout(() => {
      btnEl.setAttribute("data-charge", "fire");

      const rect = arrowEl.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      // 创建固定层飞行箭头
      const flyArrow = document.createElement("span");
      flyArrow.setAttribute("aria-hidden", "true");
      flyArrow.className = "demoArrowFly";
      flyArrow.style.left = `${rect.left}px`;
      flyArrow.style.top = `${rect.top}px`;
      flyArrow.style.color = document.documentElement.getAttribute("data-theme") === "dark" ? "#ededed" : "#1a191d";
      flyArrow.innerHTML = '<svg width="28" height="13" viewBox="0 0 28 13" fill="none" aria-hidden="true"><path d="M1 6.5h24" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M21 3 25 6.5 21 10" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';

      // 创建全屏独立微尘重力物理画布
      const trailCanvas = document.createElement("canvas");
      trailCanvas.className = "demoArrowTrail";
      trailCanvas.width = Math.ceil(window.innerWidth * dpr);
      trailCanvas.height = Math.ceil(window.innerHeight * dpr);
      trailCanvas.style.width = `${window.innerWidth}px`;
      trailCanvas.style.height = `${window.innerHeight}px`;

      const ctx = trailCanvas.getContext("2d");
      document.body.appendChild(trailCanvas);
      document.body.appendChild(flyArrow);

      if (sound) sound.play("bulletShot");

      const flyDist = window.innerWidth - rect.left + 96;
      const arrowMidY = rect.top + rect.height / 2;

      const particles = [];
      let startTime = performance.now();
      let lastTime = startTime;
      let particleAcc = 0;
      let animId = 0;

      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      const dotColor = isDark ? "237, 237, 237" : "26, 25, 29";

      function updateFlight(now) {
        const dt = Math.min(0.04, (now - lastTime) / 1000);
        lastTime = now;

        const u = Math.min(1, (now - startTime) / 560);
        const m = 1 - Math.pow(1 - u, 2.4); // 官方指数冲刺动力学
        const currentPosX = rect.left + flyDist * m;

        flyArrow.style.transform = `translate3d(${flyDist * m}px, 0, 0)`;

        // 喷射 Rows.gg 精致微尘 (0.45px ~ 1.3px 极细颗粒)
        if (u < 0.9) {
          for (particleAcc += 420 * dt; particleAcc >= 1;) {
            particleAcc -= 1;
            const count = 2 + (Math.random() * 3 | 0);
            for (let i = 0; i < count; i++) {
              particles.push({
                x: currentPosX + 14 * Math.random(),
                y: arrowMidY + (Math.random() - 0.5) * 7,
                vx: -20 - 160 * Math.random(),
                vy: (Math.random() - 0.5) * 90,
                life: 0.55 + 0.7 * Math.random(),
                size: 0.45 + 0.85 * Math.random()
              });
            }
          }
        }

        // 动力学：重力加速度 (1100px/s²) + 气流阻尼
        for (const p of particles) {
          p.vy += 1100 * dt;
          p.vx *= (1 - 1.4 * dt);
          p.x += p.vx * dt;
          p.y += p.vy * dt;
          p.life -= 1.05 * dt;
        }

        // 清理消散微尘
        for (let i = particles.length - 1; i >= 0; i--) {
          if (particles[i].life <= 0) {
            particles.splice(i, 1);
          }
        }

        // 渲染微尘点阵
        if (ctx) {
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
          ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
          for (const p of particles) {
            const alpha = Math.max(0, Math.min(1, p.life));
            ctx.fillStyle = `rgba(${dotColor}, ${0.55 * alpha})`;
            ctx.fillRect(p.x, p.y, p.size, p.size);
          }
        }

        if (u < 1 || particles.length > 0) {
          animId = requestAnimationFrame(updateFlight);
        } else {
          flyArrow.remove();
          trailCanvas.remove();
        }
      }

      animId = requestAnimationFrame(updateFlight);

      // 创建或获取全屏转场幕布 (White / Background Curtain)
      let curtain = document.querySelector(".page-transition-curtain");
      if (!curtain) {
        curtain = document.createElement("div");
        curtain.className = "page-transition-curtain";
        document.body.appendChild(curtain);
      }

      // 当箭头飞到中途 (200ms 后)，屏幕极度平滑地渐变为白色/底色
      window.setTimeout(() => {
        curtain.classList.add("is-active");
      }, 200);

      // 480ms 后（当整屏已被纯净底色柔和笼罩、箭头已飞出视口），无缝跳转页面
      window.setTimeout(() => {
        window.location.href = targetHref;
      }, 480);

    }, 1020));
  }

  window.triggerRowsDemoArrow = triggerRowsDemoArrow;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => new CustomLogoApp());
  } else {
    new CustomLogoApp();
  }
})();
