import { useSupabase } from "../../Providers/SupabaseProvider"
import { useEffect, useState } from "react"
import { FlushArray } from "../../Utils/FlushArray"
import { Link } from "react-router-dom"
import { RandomPostersContainer } from "./RandomPosters.style"

export const RandomPosters = () => {
    const { supabase } = useSupabase()
    const [posters, setPosters] = useState([])

    const getData = async () => {
        if (supabase) {
          const { data, error } = await supabase.from("posters").select("*");
          if (error) {
            console.error("Error fetching posters", error);
          } else {
            setPosters(FlushArray(data).slice(0, 2))
          }
        }
      };
      useEffect(() => {
        getData()
      }, [supabase])

      return (
<RandomPostersContainer>
  <h2>Udvalgte plakater</h2>
  {posters &&
    posters.map((poster) => {
      return (
        <div key={poster.id} className="poster-item">
          <figure>
            <Link to={`/posters/details/${poster.slug}`}>
              <img src={poster.image} alt="" className="poster-image" />
            </Link>
          </figure>
          <div>
            <h4>{poster.name}</h4>
            <p
              className="description"
              dangerouslySetInnerHTML={{
                __html: poster.description ? poster.description.substr(0, 120) : '',
              }}
            ></p>
            <p>DKK {poster.price},00</p>
            <Link to={`/posters/details/${poster.slug}`}>Læs mere</Link>
          </div>
        </div>
      );
    })}
</RandomPostersContainer>

      )
    }