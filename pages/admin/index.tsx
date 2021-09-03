import * as React from "react";
import Link from "next/link";

function AdminPage() {
  return (
    <div>
      <p>This is the static Admin Page.</p>
      <p>
        [{" "}
        <Link href="/admin/user/12345">
          <a>Click here to visit a dynamic User Page for id 12345</a>
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

export default AdminPage;
