import { LinkToEpisodeProps } from "src/components/EpisodeList/EpisodeList.interface";
import { formatUrl } from "src/components/EpisodeList/EpisodeList.utils";
import { ModalContext } from "src/hooks/useModal";
import React, { useContext } from "react";
import Link from "next/link";

/**
 * All parameter of a Episode to generate a correctly URL
 *
 * @param number - number
 * @param name - string
 * @param episode - number
 * @param id - number
 * @returns
 */
const LinkToEpisode: React.FC<LinkToEpisodeProps> = ({ number, name, season, id, children }) => {
  const { handleModal } = useContext(ModalContext);

  const urlWithParams = (season: number, episode: number, name: string, id: number) => ({
    pathname: `episode/${id}/${season}/${episode}/${formatUrl(name)}`,
    state: { id },
  });

  return (
    <div onClick={() => handleModal()}>
      <Link href={urlWithParams(season, number, name, id)} key={id}>
        {children}
      </Link>
    </div>
  );
};

export default LinkToEpisode;
