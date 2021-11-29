import React from "react";

const Background: React.FC = () => {
  return (
    <css-doodle>
      {`:doodle {
          @grid: 22x22;
          @size: 105vw 105vh;
          position: fixed;
          z-index: 0;
          overflow: hidden;
        }
        
        :after, :before {
          content: "";
          background: hsla(220, 14%, 96%, 100%);
          @size: @rand(.2rem, .4rem);
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          transform: translate3d(@r(-600px, 600px), @r(-600px, 600px), 0);
          border-radius: 50%;
        }

        @random(.1) {
          :after, :before {
            @size: .1rem;
          }
        }
       
        :after {
          animation-name: bouncingLightsAfter;
          animation-duration: 450s;
        }
        
        :before {
          animation-name: bouncingLightsBefore;
          animation-duration: 300s;
        }        

        @keyframes bouncingLightsBefore {
          0% {
            transform: translate3d(@r(-600px, 600px), @r(-600px, 600px), 0);
            opacity: @r(.3, .6);
          }
        
          50% {
            opacity: @r(.7, 1);
          }
        
          100% {
            transform: translate3d(@r(-600px, 600px), @r(-600px, 600px), 0);
            opacity: @r(0, .2);
          }
        }
        
        @keyframes bouncingLightsAfter {
          0% {
            transform: translate3d(@r(-800px, 800px), @r(-800px, 800px), 0);
            opacity: @r(.3, .6);
          }
        
          50% {
            opacity: @r(.7, 1);
          }
        
          100% {
            transform: translate3d(@r(-900px, 900px), @r(-900px, 900px), 0);
            opacity: @r(0, .2);
          }
        }
        `}
    </css-doodle>
  );
};

export { Background };
