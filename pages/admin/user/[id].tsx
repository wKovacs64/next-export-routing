import * as React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function UserPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <p>This is the dynamic User Page for id {id}.</p>
      <p>
        [{" "}
        <Link href="/">
          <a>Start Over</a>
        </Link>{" "}
        ]
      </p>
      <p>
        You should be able to refresh this page or navigate here directly by
        pasting the URL into your address bar.
      </p>
    </div>
  );
}

export default UserPage;
