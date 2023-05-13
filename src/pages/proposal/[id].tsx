import React from "react";
import Layout from "@/components/common/Layout";
import { useRouter } from "next/router";

const SingleProposal = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
          <div className="text-white max-w-7xl mx-auto px-4">
              {id}
      </div>
    </Layout>
  );
};

export default SingleProposal;
