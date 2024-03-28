import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import ScrollyVideo from "./ScrollyVideo";

interface ScrollyVideoProps {
  src: string;
  transitionSpeed: number;
  frameThreshold: number;
  cover: boolean | true;
  sticky: boolean | true;
  full: boolean | true;
  trackScroll: boolean | true;
  useWebCodecs: boolean | true;
  videoPercentage: number;
  debug: boolean | false;
  // scrollyVideoContainer: HTMLElement;
}

const ScrollyVideoComponent = forwardRef(function ScrollyVideoComponent(
  {
    src,
    transitionSpeed,
    frameThreshold,
    cover,
    sticky,
    full,
    trackScroll,
    useWebCodecs,
    videoPercentage,
    debug,
  }: // scrollyVideoContainer
  ScrollyVideoProps,
  ref
) {
  const containerElement = useRef(null);
  const scrollyVideoRef = useRef(null);
  const [instance, setInstance] = useState(null);

  const videoPercentageRef = useRef(videoPercentage);
  videoPercentageRef.current = videoPercentage;

  // effect for destroy and recreate on props change (except video percentage)
  useEffect(() => {
    if (!containerElement.current) return;

    // if scrollyVideo already exists and any parameter is updated, destroy and recreate.
    // CAREFUL
    // if (scrollyVideoRef.current && scrollyVideoRef.current.destroy) {
    //   scrollyVideoRef.current.destroy();
    // }

    // class ScrollyVideo {
    //   constructor(props: ScrollyVideoProps){}
    // }

    // const scrollyVideo = new ScrollyVideo({
    //   scrollyVideoContainer: containerElement.current,
    //   src,
    //   transitionSpeed,
    //   frameThreshold,
    //   cover,
    //   sticky,
    //   full,
    //   trackScroll,
    //   useWebCodecs,
    //   debug,
    //   videoPercentage: videoPercentageRef.current,
    // });

    // setInstance(scrollyVideo);
    // scrollyVideoRef.current = scrollyVideo;
  }, [src, transitionSpeed, frameThreshold, cover, sticky, full, trackScroll, useWebCodecs, debug]);

  // effect for video percentage change
  useEffect(() => {
    // If we need to update the target time percent
    if (
      scrollyVideoRef.current &&
      typeof videoPercentage === "number" &&
      videoPercentage >= 0 &&
      videoPercentage <= 1
    ) {
      // scrollyVideoRef.current.setTargetTimePercent(videoPercentage);
    }
  }, [videoPercentage]);

  // effect for unmount
  // useEffect(
  //   () => () => {
  //     if (scrollyVideoRef.current && scrollyVideoRef.current.destroy) {
  //       scrollyVideoRef.current.destroy();
  //     }
  //   },
  //   []
  // );

  // useImperativeHandle(
  //   ref,
  //   () => ({
  //     setTargetTimePercent: scrollyVideoRef.current
  //       ? scrollyVideoRef.current.setTargetTimePercent.bind(instance)
  //       : () => {},
  //   }),
  //   [instance]
  // );

  return (
    <div ref={containerElement} data-scrolly-container>
      <ScrollyVideo
        // play between height: "300vh" & frameThreshold to set time playing
        transitionSpeed={8} // Sets the maximum playbackRate for this video default 8
        frameThreshold={0.1} // When to stop the video animation, in seconds, default 0.1
        cover={true} // Forces the video to cover in it's container
        sticky={true} // Whether the video should have position: sticky
        full={true} // Whether the video should take up the entire viewport
        trackScroll={true} // Whether this object should automatically respond to scroll
        useWebCodecs={true}
        videoPercentage={0}
        debug={true}
        src="https://scrollyvideo.js.org/goldengate.mp4"
      />
    </div>
  );
});

export default ScrollyVideoComponent;
