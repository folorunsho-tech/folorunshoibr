import Archive from "../../components/Archive";
import { useRouter } from "next/router";

const Tag = () => {
  const router = useRouter();
  const { name } = router.query;
  return (
    <>
      <h2>You are viewing posts under {name} tag </h2>
      <Archive />
    </>
  );
};

export default Tag;
