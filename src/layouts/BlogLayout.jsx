import { Outlet } from "react-router-dom"
// import Header from "../components/shared/Header"
import Footer from "../components/shared/Footer"
import SideBar from "../components/shared/SideBar"
import { blogDashboardSideBar } from "../utils/config"

const BlogLayout = () => {
  return (
    <div>
      <SideBar nav={blogDashboardSideBar} />
      {/* <Header /> */}
      <main className="pcsUserBase-main pcsDashboard min-h-full mt-3 pr-3" style={{
        minHeight: "calc(100vh - 152px)",
      }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default BlogLayout