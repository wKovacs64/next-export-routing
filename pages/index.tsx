import * as React from "react";
import Link from "next/link";

function HomePage() {
  return (
    <div>
      <p>This is the static Home Page.</p>
      <p>
        [{" "}
        <Link href="/admin">
          <a>Click here to visit the static Admin Page</a>
        </Link>{" "}
        ]
      </p>
    </div>
  );
}

export default HomePage;
