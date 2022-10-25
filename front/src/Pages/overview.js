import React from "react";
import Rating from "../Component/rating";
import Rating2 from "../Component/rating2";

const Overview = () => {
  return (
    <div className="d-flex d-flex-colomn justify-content-between">
      <div>
        <div style={{ width: "400px", height: "50px", padding: "5px" }}>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Rating</th>
                <th scope="col">Rating Count</th>
                <th scope="col">Distribution</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <Rating />
                </th>
                <td>279</td>
                <td>68%</td>
                <td>
                  <button className="btn btn-outline-primary">see all</button>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <Rating />
                </th>
                <td>53</td>
                <td>13%</td>
                <td>
                  <button className="btn btn-outline-primary">see all</button>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <Rating2 />
                </th>
                <td>23 </td>
                <td>6%</td>
                <td>
                  <button className="btn btn-outline-primary">see all</button>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <Rating />
                </th>
                <td>68 </td>
                <td>89%</td>
                <td>
                  <button className="btn btn-outline-primary">see all</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br></br>
        <div
          className="d-flex flex-row justify-content-end"
          style={{ marginTop: "230px" }}
        >
          <h5>Aspect</h5>
          <div style={{ marginTop: "50px" }}>
            <span>
              <button className="btn btn-secondary">battery</button>
            </span>
            <span>
              <button className="btn btn-secondary">screen</button>
            </span>
            <span>
              <button className="btn btn-secondary">Camera</button>
            </span>
            <span>
              <button className="btn btn-secondary">Touch pad</button>
            </span>
          </div>
        </div>
      </div>
      <div style={{ width: "700px", height: "100px", padding: "20px" }}>
        <h5>
          Top Helpful Review <Rating />
        </h5>
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
      </div>
    </div>
  );
};

export default Overview;
