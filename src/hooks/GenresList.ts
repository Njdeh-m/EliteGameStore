
import useData from "./FetchData";

export interface Genres {
  id: number;
  name: string;
  image_background : string;

}



const useGenres = () => useData<Genres>('/genres');

export default useGenres;

  
