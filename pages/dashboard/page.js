// import Layout from '@/components/layout'
import LayoutDashboard from "@/components/layoutDashboard";
import Category from "@/components/category";
import { useRouter } from "next/router";

export default function Page() {
  // const { data: session, status } = useSession()
  const router = useRouter();

  // if (status === "loading" ) {
  //   return <p>Loading...</p>
  // }

  // if (status === "unauthenticated") {
  //    router.push("/auth/signin")
  //    return <p>Loading...</p>
  // }
  
  // if(session && status === "authenticated") {
   
    return (
      /** Your content */
      <LayoutDashboard>
        <Category />
      </LayoutDashboard>
    );
  // }

  
}

// Page.getLayout = function getLayout(page) {
//   return <LayoutDashboard>{page}</LayoutDashboard>;
// };

