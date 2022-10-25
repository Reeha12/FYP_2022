import React from "react";
import Rating from "../Component/rating";
import Rating3 from "../Component/rating3";
import Rating4 from "../Component/rating4";
import Rating2 from "../Component/rating2";
import Rating1 from "../Component/rating1";
const ReviewAnalysis = () => {
  return (
    <div>
      <div>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Aspect</th>
              <th scope="col">Rating</th>
              <th scope="col">Polarity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">battery</th>
              <td>
                <Rating4 />
              </td>
              <td>Positive</td>
            </tr>
            <tr>
              <th scope="row">Screen</th>
              <td>
                <Rating />
              </td>
              <td>Positive</td>
            </tr>
            <tr>
              <th scope="row">Keyboard</th>
              <td>
                <Rating3 />
              </td>
              <td>Neutral</td>
            </tr>
            <tr>
              <th scope="row">Camera</th>
              <td>
                <Rating2 />
              </td>
              <td>Negative</td>
            </tr>
            <tr>
              <th scope="row">Voice Quality</th>
              <td>
                <Rating />
              </td>
              <td>Positive</td>
            </tr>
            <tr>
              <th scope="row">Camera</th>
              <td>
                <Rating2 />
              </td>
              <td>Negative</td>
            </tr>
            <tr>
              <th scope="row">Camera Resolution</th>
              <td>
                <Rating1 />
              </td>
              <td>Negative</td>
            </tr>
            <tr>
              <th scope="row">Speaker</th>
              <td>
                <Rating4 />
              </td>
              <td>Positive</td>
            </tr>
            <tr>
              <th scope="row">Picture Quality</th>
              <td>
                <Rating />
              </td>
              <td>Positive</td>
            </tr>
            <tr>
              <th scope="row">Mouse</th>
              <td>
                <Rating3 />
              </td>
              <td>Neutral</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReviewAnalysis;
