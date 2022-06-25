import { useRouter } from "next/router";
import Archive from "../../components/Archive";

const TutorialCat = () => {
  const router = useRouter();
  const { name } = router.query;
  return (
    <>
      <h2>You are viewing posts under {name} tutorial </h2>
      <Archive />
    </>
  );
};

export default TutorialCat;
