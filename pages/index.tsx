import React, { useContext, useEffect } from "react";
import { apiTvMaze } from "src/api/config";
import { Card } from "src/components/Card";
import { GlobalContext } from "src/store/config";
import { setTvShows } from "src/store/shows";
import { Container, WrapperCards } from "./index.style";

/**
 * A page to show all TV shows
 * @returns JSX.Element
 */
const ShowsList = () => {
  const { store, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    const localTvShows = localStorage.getItem("omena-tv-shows");
    localTvShows
      ? dispatch(setTvShows(JSON.parse(localTvShows)))
      : (async () => {
          const { data } = await apiTvMaze.get(`shows`);
          dispatch(setTvShows(data));
          localStorage.setItem("omena-tv-shows", JSON.stringify(data));
        })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <WrapperCards>
        {store.shows.map((show) => (
          <Card show={show} key={show.id} />
        ))}
      </WrapperCards>
    </Container>
  );
};

export default ShowsList;
