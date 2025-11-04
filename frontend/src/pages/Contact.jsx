import { assets } from "../frontend_assets/assets"
const Contact = () => {


  return (
     <div className="flex flex-col md:flex-row justify-center items-center p-6 bg-gray-100 min-h-screen">
      <div className="w-full md:w-1/2 p-4">
        <img
          src={assets.contact_img}
          alt="Office Setup"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full md:w-1/2 p-4 text-center md:text-left">
        <h2 className="text-2xl font-bold mb-4">CONTACT US</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Our Store</h3>
            <p>54709 Willms Station</p>
            <p>Suite 350, Washington, USA</p>
            <p>Tel: (415) 555-0132</p>
            <p>Email: admin@forever.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Careers at Forever</h3>
            <p>Learn more about our teams and job openings.</p>
            <button className="mt-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Contact
