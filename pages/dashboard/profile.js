// import Layout from '@/components/layout'
import LayoutDashboard from "@/components/layoutDashboard";
import CardExamGroup from "@/components/cardExamGroup";
import Profile from "@/components/profile";
import Category from "@/components/category";

export default function ProfileDashboard() {
  return (
    /** Your content */
    <LayoutDashboard>
      <Profile/>
    </LayoutDashboard>
  );
}

// Page.getLayout = function getLayout(page) {
//   return <LayoutDashboard>{page}</LayoutDashboard>;
// };
