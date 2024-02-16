import { CartListContainer } from "./CartList.style"
import { AiFillDelete } from "react-icons/ai"
import { useSupabase } from "../../Providers/SupabaseProvider"
import { useEffect, useState, useRef } from "react"

export const CartList = () => {
  const deleteTimeoutRef = useRef(null); 
  const { supabase } = useSupabase()
  const [cartData, setCartData] = useState([])

  const getData = async () => {
    if (supabase) {
      const {
        data: {
          session: {
            user: { id: user_id },
          },
        },
      } = await supabase.auth.getSession();

      const { data, error } = await supabase
        .from("cart")
        .select("*, posters(name, price)")
        .eq("user_id", user_id);

      if (error) {
        console.error("Error fetching cart", error);
      } else {
        console.log(data);

        // Exclude items with zero quantity from being added to cartData
        const filteredData = data.filter((item) => item.quantity > 0);
        setCartData(filteredData);
      }
    }
  };

  let sum = cartData.reduce((prev, current) => {
    return prev + +current.posters.price * current.quantity
  }, 0)

  useEffect(() => {
    getData()
  }, [setCartData, supabase])
  
  
//   const handleTrashClick = async (id) => {
//     console.log("Deleting one unit of item with id:", id);

//     if (supabase) {
//       // Fetch the current item from cart
//       const currentItemIndex = cartData.findIndex((item) => item.id === id);

//       if (currentItemIndex === -1) {
//         console.error("Item not found in the cart.");
//         return;
//       }

//       // If quantity is 1, confirm deletion and remove the item
//       if (cartData[currentItemIndex].quantity === 1) {
//         if (window.confirm("Are you sure you want to delete this item?")) {
//           // Remove the item from the local state
//           const newCartData = cartData.filter((item) => item.id !== id);
//           setCartData(newCartData);

//           // Remove the item from the database
//           const { error } = await supabase
//             .from("cart")
//             .delete()
//             .eq("id", id);

//           if (error) {
//             console.error("Error deleting item from cart", error);
//           }
//         }
//       } else {
//         // Decrement quantity locally
//         const newQuantity = Math.max(cartData[currentItemIndex].quantity - 1, 0);

//         if (newQuantity === 0) {
//           // If quantity becomes zero, remove the item from the local state
//           const newCartData = cartData.filter((item) => item.id !== id);
//           setCartData(newCartData);

//           // Remove the item from the database
//           const { error } = await supabase
//             .from("cart")
//             .delete()
//             .eq("id", id);

//           if (error) {
//             console.error("Error deleting item from cart", error);
//           }
//         } else {
//           // Update the local cartData with the new quantity
//           const newCartData = [...cartData];
//           newCartData[currentItemIndex] = {
//             ...newCartData[currentItemIndex],
//             quantity: newQuantity,
//           };
  
//           setCartData(newCartData);
  
//           // Update the database with the new quantity
//           const { error } = await supabase
//             .from("cart")
//             .update({ quantity: newQuantity })
//             .eq("id", id);
  
//           if (error) {
//             console.error("Error updating quantity in cart", error);
//           }
//         }
//       }
//     }
//   };
const handleTrashClick = async (id) => {
    console.log("Deleting one unit of item with id:", id);
  
    if (supabase) {
      // Fetch the current item from cart
      const currentItemIndex = cartData.findIndex((item) => item.id === id);
  
      if (currentItemIndex === -1) {
        console.error("Item not found in the cart.");
        return;
      }
  
      // Decrement quantity locally
      const newQuantity = Math.max(cartData[currentItemIndex].quantity - 1, 0);
  
      if (newQuantity === 0) {
        // If quantity becomes zero, remove the item from the local state
        const newCartData = cartData.filter((item) => item.id !== id);
        setCartData(newCartData);
  
        // Remove the item from the database
        try {
          await supabase.from("cart").delete().eq("id", id);
        } catch (error) {
          console.error("Error deleting item from cart", error);
        }
      } else {
        // Update the local cartData with the new quantity
        const newCartData = [...cartData];
        newCartData[currentItemIndex] = {
          ...newCartData[currentItemIndex],
          quantity: newQuantity,
        };
  
        setCartData(newCartData);
  
        // Update the database with the new quantity
        try {
          await supabase.from("cart").update({ quantity: newQuantity }).eq("id", id);
        } catch (error) {
          console.error("Error updating quantity in cart", error);
        }
      }
  
      // Clear any existing delete timeout
      clearTimeout(deleteTimeoutRef.current);
  
      // Set a new delete timeout to completely remove the item after a delay (e.g., 3 seconds)
      deleteTimeoutRef.current = setTimeout(async () => {
        const newCartData = cartData.filter((item) => item.id !== id);
        setCartData(newCartData);
  
        // Remove the item from the database after the delay
        try {
          await supabase.from("cart").delete().eq("id", id);
        } catch (error) {
          console.error("Error deleting item from cart after delay", error);
        }
      }, 3000); // Set the delay time in milliseconds
    }
  };
  

  const formattedSum = sum.toLocaleString("da-DK", {
    style: "currency",
    currency: "DKK",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  
  // Remove the currency symbol and dots at the end from the formatted sum
  const formattedSumWithoutKr = formattedSum.replace(/\s?kr\.$/, '');
  
  // Concatenate "DKK" at the end
  const formattedSumWithCurrency = `${formattedSumWithoutKr} DKK`;
  
  
  return (
    <CartListContainer>
      <div>
        <div>Produkt</div>
        <div>Antal</div>
        <div>Pris</div>
        <div>Slet ordre</div>
      </div>
      {cartData &&
        cartData.map((item) => {
          return (
            <div key={item.id}>
              <div>{item.posters.name}</div>
              <div>{item.quantity}</div>
              <div>{item.posters.price},00 DKK</div>
              <div>
                <AiFillDelete onClick={() => handleTrashClick(item.id)} />
              </div>
            </div>
          );
        })}
      <div>
        <div>Total</div>
        <div></div>
        <div>{formattedSumWithCurrency}</div>
      </div>
    </CartListContainer>
  );
};
