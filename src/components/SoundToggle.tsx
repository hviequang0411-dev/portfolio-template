import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const SoundToggle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const timerRef = useRef<number | null>(null);
  const isPlayingRef = useRef(false);

  // Chords for peaceful ambient music: [root, 3rd, 5th, 7th/9th]
  const chords = [
    [130.81, 164.81, 196.0, 246.94, 293.66], // Cmaj9
    [110.0, 130.81, 164.81, 196.0, 246.94],  // Am9
    [87.31, 130.81, 174.61, 220.0, 329.63],   // Fmaj7
    [98.0, 146.83, 196.0, 246.94, 329.63],    // G6
  ];

  const playChord = (chordNotes: number[], ctx: AudioContext, destination: GainNode) => {
    chordNotes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const noteGain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = i === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      // Low pass filter for soft, warm lofi ambient sound
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450 + i * 40, ctx.currentTime);
      filter.Q.setValueAtTime(1, ctx.currentTime);

      // Soft envelope
      const now = ctx.currentTime;
      const attack = 1.8;
      const hold = 2.5;
      const release = 2.5;
      const totalTime = attack + hold + release;

      noteGain.gain.setValueAtTime(0.001, now);
      noteGain.gain.exponentialRampToValueAtTime(0.04 / (i + 1), now + attack);
      noteGain.gain.setValueAtTime(0.04 / (i + 1), now + attack + hold);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + totalTime);

      osc.connect(filter);
      filter.connect(noteGain);
      noteGain.connect(destination);

      osc.start(now);
      osc.stop(now + totalTime + 0.1);
    });
  };

  const startAmbientLoop = () => {
    if (!audioCtxRef.current) {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtxClass();
    }

    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    if (!masterGainRef.current) {
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.connect(ctx.destination);
      masterGainRef.current = masterGain;
    }

    // Fade in master volume softly
    masterGainRef.current.gain.linearRampToValueAtTime(0.2, ctx.currentTime + 1.5);

    let chordIndex = 0;
    const loopChord = () => {
      if (!isPlayingRef.current) return;
      if (audioCtxRef.current && masterGainRef.current) {
        playChord(chords[chordIndex], audioCtxRef.current, masterGainRef.current);
        chordIndex = (chordIndex + 1) % chords.length;
      }
      timerRef.current = window.setTimeout(loopChord, 5200);
    };

    isPlayingRef.current = true;
    loopChord();
  };

  const stopAmbientLoop = () => {
    isPlayingRef.current = false;
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (audioCtxRef.current && masterGainRef.current) {
      const ctx = audioCtxRef.current;
      masterGainRef.current.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 1.2);
    }
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopAmbientLoop();
      setIsPlaying(false);
    } else {
      startAmbientLoop();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    return () => {
      stopAmbientLoop();
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <button
      type="button"
      onClick={toggleSound}
      className={`relative flex items-center gap-2 px-3 py-1.5 rounded-xl transition-all duration-300 cursor-pointer text-xs font-mono font-medium active:scale-95 ${
        isPlaying
          ? 'bg-orange-500/15 text-orange-600 dark:text-orange-400 shadow-sm'
          : 'hover:bg-zinc-200/60 dark:hover:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400'
      }`}
      aria-label="Toggle Ambient Audio"
      title={isPlaying ? 'Mute ambient sound' : 'Play relaxing ambient sound'}
    >
      {isPlaying ? (
        <>
          <Volume2 className="h-4 w-4 text-orange-500 flex-shrink-0 animate-pulse" />
          {/* Animated sound wave equalizer */}
          <span className="flex items-end gap-0.5 h-3.5 w-3.5">
            <span className="w-0.5 bg-orange-500 rounded-full animate-[soundWave1_0.9s_ease-in-out_infinite]" />
            <span className="w-0.5 bg-orange-500 rounded-full animate-[soundWave2_1.1s_ease-in-out_infinite]" />
            <span className="w-0.5 bg-orange-500 rounded-full animate-[soundWave3_0.8s_ease-in-out_infinite]" />
          </span>
          <span className="text-[11px] font-semibold text-orange-600 dark:text-orange-400">Audio On</span>
        </>
      ) : (
        <>
          <VolumeX className="h-4 w-4 text-zinc-400 flex-shrink-0" />
          <span className="text-[11px] text-zinc-500 dark:text-zinc-400">Audio Off</span>
        </>
      )}
    </button>
  );
};
export default SoundToggle;
