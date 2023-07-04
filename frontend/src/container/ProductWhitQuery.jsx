
import {  useQuery } from "@apollo/client";
import { TemplateLibro } from "../components/TemplateLibro";
import { GET_PRODUCTS } from "../hoc/Query/getBook";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useParams } from "react-router-dom";
export function ProductWhithQuery () {
  const { isbn } = useParams();
  const { loading,  data } = useQuery(GET_PRODUCTS, {
    variables: { isbn }
  });
  return (
    loading
      ? <AiOutlineLoading3Quarters style={{marginLeft:'50%', marginTop: '20%'}} size='32px'/> 
      : data && <TemplateLibro product={data.getBook.book} />
  )
}
