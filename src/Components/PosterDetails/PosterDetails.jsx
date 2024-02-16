import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PosterDetailsContainer, ConfirmationMessage } from "./PosterDetails.style";
import { useForm } from "react-hook-form";
import { useSupabase } from "../../Providers/SupabaseProvider";

export const PosterDetails = () => {
  const { supabase } = useSupabase();
  const [poster, setPoster] = useState([]);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const { posterSlug } = useParams();
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();

  const getData = async () => {
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from("posters")
          .select("*")
          .eq("slug", posterSlug)
          .limit(1)
          .single();

        if (error) {
          console.error("Error fetching posters", error);
        } else {
          setPoster(data);
          // Set poster_id in the form after fetching data
          setValue('poster_id', data.id);
        }
      } catch (error) {
        console.error("Error fetching posters", error);
      }
    }
  };

  useEffect(() => {
    getData()
  }, [posterSlug, supabase]);

  const add2Cart = async (data) => {
    console.log("Data received in add2Cart:", data);
    if (supabase) {
      const authUser = await supabase?.auth.getUser();
      const user = authUser?.data?.user;
  
      if (user) {
        // Validate that quantity is not negative
        if (data.quantity <= 0) {
          console.error("Quantity must be a positive number");
          return;
        }
  
        // Ensure that poster_id is present in the form data
        if (!data.poster_id) {
          console.error("Poster ID is missing");
          return;
        }
  
        // Validate that poster_id is a valid bigint
        const posterId = parseInt(data.poster_id, 10);
        if (isNaN(posterId) || posterId <= 0) {
          console.error("Invalid poster ID");
          return;
        }
  
        const { data: cart, error } = await supabase
          .from("cart")
          .insert([
            {
              user_id: user.id,
              poster_id: posterId,
              quantity: data.quantity,
            },
          ]);
  
        if (error) {
          console.error("Error adding to cart", error);
        } else {
          console.log("Added to cart", cart);
          setConfirmationMessage("Lagt i kurv!");
        }
      } else {
        console.error("User not authenticated");
        setConfirmationMessage("Item added to cart!");
      }
    }
  };
  
  return (
    <PosterDetailsContainer>
      <div>
        <figure>
          <img src={poster.image} alt={poster.name} />
        </figure>
      </div>
      <div>
        <h2>{poster.name}</h2>
        <p dangerouslySetInnerHTML={{ __html: poster.description }}></p>
        <p>
          Mål: {poster.width} x {poster.height} cm
        </p>
        <p>Varenummer: {poster.id}</p>
        <p>Pris: {poster.price},00 DKK</p>
        <p>Antal på lager: {poster.stock} DKK</p>

        <form onSubmit={handleSubmit(add2Cart)}>
          <input type="hidden" defaultValue={poster.id || ""} {...register('poster_id')} />
          <input type="number"{...register('quantity', { required: true, min: 1 })}
          onInput={(e) => {e.target.value = Math.abs(e.target.value); // Set the input value to its absolute (non-negative) value
            }}
          />

          <button>Læg i kurv</button>
        </form>
        {confirmationMessage && <ConfirmationMessage>{confirmationMessage}</ConfirmationMessage>}
      </div>
    </PosterDetailsContainer>
  )
}
