import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import "./TrackerBar.css";

const TrackerBar = () => {
  const [updates, setUpdates] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://mazitekgh.com/covid19/v1/")
      .then((res) => res.json())
      .then((response) => {
        // console.log(response);
        let coronaData = {
          newCases: response.ghana.existing,
          confirmedCases: response.ghana.confirmed,
          recoveries: response.ghana.recovered,
          fatalities: response.ghana.deaths,
          date: response.ghana.date,
          time: response.ghana.time,
        };
        setUpdates(coronaData);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const { newCases, recoveries, fatalities, confirmedCases } = updates;

  var nf = new Intl.NumberFormat();
  // nf.format(number); // "1,234,567,890"
  return (
    <footer>
      {loading ? (
        <div className="spinnerContainer">
          <Spinner />
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>{newCases ? newCases : "0"}</th>
              <th>{nf.format(recoveries)}</th>
              <th>{fatalities}</th>
              <th>{nf.format(confirmedCases)}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>New Cases</td>
              <td>Recoveries</td>
              <td>Deaths</td>
              <td>Confirmed Cases</td>
            </tr>
          </tbody>
        </table>
      )}
    </footer>
  );
};

export default TrackerBar;
