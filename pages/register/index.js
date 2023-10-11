import Head from "next/head";
import Navbar from "../../src/components/Navbar";
import RegistrationForm from "../../src/components/RegistrationForm";

// function Registration() {
//     return (
//         <div>
//             <Head>
//                 <title>Hallothon Registration</title>
//                 <meta name='description' content='👻 👻 👻 👻 👻' />
//                 <link rel='icon' href='/favicon.ico' />
//             </Head>
//             <Navbar />
//             {/* <div className='text-5xl text-center py-16'>Registrations Opening at 11:59 PM Today</div> */}
//             <div className='font-poppins'>
//                 <RegistrationForm />
//             </div>
//         </div>
//     );
// }

// Registration Ending Page
function Registration() {
  return (
    <div>
      <Head>
        <title>Aww you just missed it sowrry</title>
        <meta name="description" content="👻 👻 👻 👻 👻" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {/* <div className='text-5xl text-center py-16'>Registrations Opening at 11:59 PM Today</div> */}
      <div className="font-poppins">
        <div className="flex flex-col h-screen justify-center">
          <h2 className="text-4xl text-center  text-red-600 ">
            End of the Saga
          </h2>
          <br />

          <h1 className="text-8xl text-center pb-5  text-red-600 font-bold">
            Registrations for Hallothon 3.0 ended.
          </h1>
          <h2 className="text-4xl text-center pb-8 text-red-600 ">
            Selected teams will be informed soon.
          </h2>
          <h2 className="text-4xl text-center  text-red-600 ">
            👻 Hope to see you all Next Year 👻
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Registration;
