// import Layout from '@/components/layout'
import LayoutDashboard from "@/components/layoutDashboard";
import CardExamGroup from "@/components/cardExamGroup";
import Profile from "@/components/profile";
import Category from "@/components/category";

export default function ExamGroup() {
  return (
    /** Your content */
    <LayoutDashboard>
      <CardExamGroup/>
    </LayoutDashboard>
  );
}

// ExamGroup.getLayout = function getLayout(ExamGroup) {
//   return <LayoutDashboard>{ExamGroup}</LayoutDashboard>;
// };
