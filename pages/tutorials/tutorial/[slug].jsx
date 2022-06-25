import { useRouter } from "next/router";
const Tag = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <h2>single tutorial </h2>
    </>
  );
};

export default Tag;
