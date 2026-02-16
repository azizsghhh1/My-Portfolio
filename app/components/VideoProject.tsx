// app/components/VideoProject.tsx
interface VideoProjectProps {
  src: string;
}

export default function VideoProject({ src }: VideoProjectProps) {
  return (
    <video
      src={src}          // pass the video source
      controls           // play/pause controls
      className="rounded-lg w-full h-auto"
      autoPlay={false}   // do not auto-play
      loop
      muted
    >
      Your browser does not support the <code>video</code> element.
    </video>
  );
}
