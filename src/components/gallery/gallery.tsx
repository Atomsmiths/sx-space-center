import React from "react";

import classes from "./gallery.module.css";

const Gallery: React.FC<{ imagesLinks: string[] }> = ({ imagesLinks }) => {
  const scrollContainer = React.useRef<null | HTMLDivElement>(null);

  function scrollToDirection(
    scrollContainer: HTMLElement,
    scrollValue: number,
  ): void {
    return scrollContainer.scrollBy({
      left: scrollValue,
      behavior: "smooth",
    });
  }

  return (
    <div className="w-11/12 overflow-hidden mx-auto mt-24">
      <h4 className="text-xl mb-8">Gallery</h4>
      <div className="transform">
        <div
          ref={scrollContainer}
          id="scroll"
          className={
            "flex gap-20 overflow-x-scroll w-full min-w-full " +
            classes.scrollContainer
          }
        >
          {imagesLinks.map((image, index) => {
            if (image) {
              return (
                <img
                  key={index}
                  src={image}
                  alt=""
                  className="object-cover cursor-pointer w-130 h-auto rounded-sm"
                />
              );
            }
          })}
        </div>

        <div
          className="fixed right-0 top-0 w-20 h-full bg-gradient-to-l from-overlay text-center "
          onClick={() => {
            if (scrollContainer.current) {
              scrollToDirection(
                scrollContainer.current,
                (scrollContainer.current.scrollWidth -
                  scrollContainer.current.offsetWidth) /
                  2,
              );
            }
          }}
        >
          L
        </div>
        <div
          className="fixed left-0 top-0 w-20 h-full bg-gradient-to-r from-overlay text-center "
          onClick={() => {
            if (scrollContainer.current) {
              scrollToDirection(
                scrollContainer.current,
                -(
                  scrollContainer.current.scrollWidth -
                  scrollContainer.current.offsetWidth
                ) / 2,
              );
            }
          }}
        >
          R
        </div>
      </div>
    </div>
  );
};

export { Gallery };
