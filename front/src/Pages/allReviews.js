import React from "react";
import Rating from "../Component/rating";

const AllReviews = () => {
  return (
    <div>
      <div style={{ height: "100px", padding: "20px" }}>
        <h5>Review 1</h5>
        <div className="d-flex justify-content-end">
          <Rating />
        </div>
        <p>
          By PLIMMER, Reviewed in the United States on January 23, 2019 I HAVE
          MY NEW KINDLE PAPERWHITE NOW FOR A FEW WEEKS. IF I WAS EXPECTING SOME
          STARTLING IMPROVEMENTS OVER MY FOUR YEAR OLD KINDLE, I GOT A ZERO. THE
          NEW ONE BOASTS A SCREEN DEFINITION OF 300 DPI VS 167 FOR THE OLD ONE -
          I CAN'T TELL ANY DIFFERENCE. THE NEW MEMORY IS 8 GB VS 1.5 GB FOR THE
          OLD ONE - SINCE I NEVER LOADED MORE THAN 0.5 GB ON THE OLD ONE, THE
          NEW 8 GB IS SUPERFLUOS FOR MY NEEDS. PART OF THE REASON FOR THE LOW
          STORAGE I USE IS THE SUPERB AMAZON "CLOUD" STORAGE SYSTEM; SO THAT
          THINGS I AM NOT CURRENTLY WORKING WITH I SEND THEM TO "CLOUD". THEN
          THERE IS THE WATERFPROOFING - SINCE I NEVER GOT THE FOUR YEAR OLD ONE
          WET, AGAIN ANOTHER SUPERFLUOUS ITEM. THEN THERE IS THE SCREEN LIGHTING
          - AGAIN I CAN'T TELL ANY DIFFERENCE BETWEEN THE NEW AND THE OLD.HAVING
          SAID ALL THIS I MUST SAY THE NEW AND THE OLD KINDLE'S PROVIDE SUPERB
          READING CONVENIENCE AND I HAVE NO HESITATION IN HIGHLY RECOMMENDING
          THEM. THINK CAREFULLY ABOUT YOUR NEEDS WHEN BUYING A KINDLE
          PAPERWHITE, AS THE CHEAPER MODELS STILL PROVIDE A SUPERB READING
          EXPERIENCE. 449 people found this review helpful
        </p>
        <h5>Review 2</h5>
        <div className="d-flex justify-content-end">
          <Rating />
        </div>
        <p>
          You get what you pay for By GameTheory, Reviewed in the United States
          on September 18, 2022 It's cheap, easy, small, and it does what I need
          it to do. You want to browse the web and do word processing? This is
          your machine, nothing spectacular, but it doesn't need to be. This is
          your 'extra' laptop, the one you set in a room you don't use often or
          take with you somewhere because it doesn't matter if it breaks or not.
          I'd say get it if you find that useful. 30 people found this helpful
        </p>
      </div>
    </div>
  );
};

export default AllReviews;
