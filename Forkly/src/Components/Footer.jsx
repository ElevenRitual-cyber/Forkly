import { Link } from "react-router-dom";
import "../css/footer.css";
export default function Footer() {
  return (
    <>
      <footer className="
      flex
    flex-col
    items-center
    justify-center
    text-center

    md:flex-row
    md:text-left
    md:justify-between

    w-full
    px-4
    md:px-8
    lg:px-12
    py-4
    bg-footer
    
   
       ">
        <div className="flex items-center flex-col">
          <p className="text-4xl">Forkly</p>
          <p>We Deliver the best.</p>
          <p>© 2025 Forkly Limited</p>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-2xl">Company</p>
          <Link to="#" element={""}>About us</Link>
          <Link to="#" element={""}>Careers</Link>
          <Link to="#" element={""}>Team</Link>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-2xl">Legal</p>
          <Link to="#" element={""}>Termns and Conditions</Link>
          <Link to="#" element={""}>Cookie Policy</Link>
          <Link to="#" element={""}>Privacy Policy</Link>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-2xl">Support</p>
          <Link to="#" element={""}>Help and Support</Link>
          <Link to="#" element={""}>Partner with us</Link>
          <Link to="#" element={""}>Ride with us</Link>
        </div>

      </footer>
    </>
  )
}