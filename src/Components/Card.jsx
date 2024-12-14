import React from "react";
import { Link } from "react-router-dom";

const Card = ({ Title, Summary, URL, Tools, Lib, RTNIT }) => {
  return (
    <>
      <div>
        <div className="card bg-base-300 w-80 mt-5 shadow-xl">
          <div className="card-body">
            <h2 className="card-title font-bold text-2xl">{Title}</h2>
            <p>{Summary}</p>
            <a
              className="opacity-25 mt-2 flex items-center flex-row"
              href={URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              open
              <i className="material-icons text-sm">arrow_forward_ios</i>
            </a>

            <div className="card-actions justify-end mt-2 opacity-75">
              <Link
                className="btn btn-primary btn-outline"
                to="ToLib"
                state={{ tools: Tools, ReturnIT: RTNIT }}
              >
                Tools
              </Link>
              <Link
                className="btn btn-outline"
                to="ToLib"
                state={{ Libraries: Lib, ReturnIT: RTNIT }}
              >
                Libraries
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;