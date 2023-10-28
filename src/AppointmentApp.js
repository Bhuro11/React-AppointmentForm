import img from './assets/appointment.png';

function AppointmentApp() {
    return (
        <>
            <div className="appointsment h-screen flex items-center bg-slate-200">
                <div className="appoint-app w-[800px] h-[550px] bg-slate-400 m-auto flex items-center justify-center">
                    <div className="appoint-img">
                        <img src={img} className="w-[350px]" alt="Appointment Picture" />
                    </div>
                    <div className="appoint-form">
                        <form action="" className="container ml-5">
                            <h1 className="text-center text-2xl text-white font-serif">Appointment</h1>
                            <hr className=" w-[150px] text-center m-auto"></hr>
                            <input type="text" className="p-3 border-b-2 mt-[10px] font-serif" placeholder="First Name*" required /><br />
                            <input type="text" className="p-3 border-b-2 mt-[10px] font-serif" placeholder="Last Name*" required /><br />
                            <input type="text" className="p-3 border-b-2 mt-[10px] font-serif" placeholder="Email*" required /><br />
                            <input type="text" className="p-3 border-b-2 mt-[10px] font-serif" placeholder="Number*" required /><br />
                            <button type="button" className="border rounded-md p-2 mt-[10px] font-serif bg-yellow-600 text-white w-[100px] ease-in-out duration-[1s] hover:bg-white hover:text-yellow-700">Submit</button>
                        </form>
                    </div> 
                </div>
            </div>
        
        </>
    )
}
export default AppointmentApp