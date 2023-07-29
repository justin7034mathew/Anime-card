import React from "react";
import "./HomeCard.css";

const HomeCard = (props) => {
  console.log(props);
  return (
    <div className="card-wrapper">
      <div className="card-first">
        <img
          className="card-img-top"
          src={props.AnimeImage}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{props.tittle}</h5>
          <p className="card-text">
            Adapted from a comic by Masashi Kishimoto, this animated hit follows
            the adventures of Naruto Uzumaki, a boy who is determined to become
            a Hokage,...
          </p>
          <a href="#" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
      <div className="card-second">
        <img
          className="card-img-top"
          src={props.AnimeImagetwo}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{props.Cardtittle}</h5>
          <p className="card-text">
            When man-eating Titans first appeared 100 years ago, humans found
            safety behind massive walls that stopped the giants in their tracks.
            But the safety they have had for so long is t...
          </p>
          <a href="#" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
      <div className="card-third">
        <img
          className="card-img-top"
          src={props.AnimeImagethree}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{props.Cardtittlethree}</h5>
          <p className="card-text">
          Zombie Land Saga  is an anime television series produced by MAPPA,
           Avex Pictures and Cygames. The series aired in Japan between October and December 2018.
          </p>
          <a href="#" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
