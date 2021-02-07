/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect, useRef } from "react";
import { InView } from "react-intersection-observer";
const pathCss = css`
  width: 100%;
  height: 500vh;
`;

const videoCss = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

const bottomDetectorCss = css`
  position: absolute;
  width: 1px;
  height: 1px;
  top: 490vh;
  left: 20px;
`;

const topDetectorCss = css`
  position: absolute;
  top: 2px;
  width: 1px;
  height: 1px;
`;

const navButtonCss = css`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20px;
  opacity: 0.75;
  padding: 15px 30px;
  border-width: 0;
  border-radius: 5px;
  pointer-events: all;
  transition: opacity 0.5s, box-shadow 0.6s;
  font-weight: 700;
  font-size: 20px;
  background-color: white;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 25px #ffffff;
  }
`;

const hiddenCss = css`
  opacity: 0;
  pointer-events: none;
`;

const NavButton = ({ buttonCss, detectorCss, onClick, children }) => {
  return (
    <InView>
      {({ inView, ref }) => {
        return (
          <>
            <button
              css={[navButtonCss, buttonCss, !inView && hiddenCss]}
              onClick={onClick}
            >
              {children}
            </button>
            <div ref={ref} css={detectorCss}></div>
          </>
        );
      }}
    </InView>
  );
};

const NavScrollTrigger = ({ detectorCss, onTrigger }) => (
  <InView
    as="div"
    onChange={(inView, entry) => inView && onTrigger()}
    css={detectorCss}
  ></InView>
);

export default function Path({ video, onPathEnd, tourGraph }) {
  const [videoLink, setVideoLink] = useState(null);
  const [progScalar, setProgScalar] = useState(0);
  const videoRef = useRef(null);

  function importVideo() {
    import(`../assets/${video}`).then((res) => setVideoLink(res.default));
  }

  function trackScroll() {
    let scrollUpdated = true;
    let frame = -1;
    const onScroll = () => {
      if (scrollUpdated) {
        frame = requestAnimationFrame(() => {
          videoRef.current &&
            (videoRef.current.currentTime = window.scrollY * progScalar);
          scrollUpdated = true;
        });
      }
      scrollUpdated = false;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
      cancelAnimationFrame(frame);
    };
  }

  function setupVideo() {
    if (!videoRef.current) return;
    const setVidProps = () => {
      videoRef.current.removeEventListener("loadeddata", setVidProps);
      setProgScalar(
        videoRef.current.duration /
          (document.body.scrollHeight - window.innerHeight)
      );
    };
    videoRef.current.addEventListener("loadeddata", setVidProps);
  }
  useEffect(importVideo, [video]);
  useEffect(setupVideo, [videoLink]);
  useEffect(trackScroll, [progScalar]);

  return (
    <section css={pathCss}>
      <video
        src={videoLink}
        ref={videoRef}
        css={videoCss}
        type="video/mp4"
      ></video>

      <NavButton detectorCss={topDetectorCss} onClick={() => onPathEnd(false)}>
        Go back
      </NavButton>

      <NavScrollTrigger
        detectorCss={bottomDetectorCss}
        onTrigger={() => onPathEnd(true)}
      />
    </section>
  );
}
