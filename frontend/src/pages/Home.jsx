import { Filters } from "../components/Filters";
import { ListOfProducts } from "../components/ListOfProducts";
import { SearchPoducts } from "../components/SearchProducts";

export function Home() {
  return (
    <>
      <SearchPoducts />
      <Filters />
      <ListOfProducts />
    </>
    )
}