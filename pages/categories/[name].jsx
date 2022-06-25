import { useRouter } from "next/router";
import Archive from "../../components/Archive";

const Category = () => {
  const router = useRouter();
  const { name } = router.query;
  return (
    <>
      <h2>You are viewing posts under {name} category </h2>
      <Archive />
    </>
  );
};

export default Category;
