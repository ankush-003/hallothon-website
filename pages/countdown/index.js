import { useState } from "react";
import TimerAlt from "../../src/components/TimerAlt"
import Image from "next/image";
import Head from "next/head";

import HallothonLogo from "./../../public/assets/hallothonLogo.svg"

const Countdown = () => {

    const currDate = new Date();
    const DateToBe = new Date('2023/10/14 9:30:00');

    const [show, setShow] = useState(false)

    if (currDate == DateToBe) {
        setShow(true);
    }

    
        return (
            <>
                <Head>
                    <title>Countdown</title>
                </Head>
                {/* <Image src = {HallothonGrad} width={1000} height={1000} class = "absolute opacity-50 top-0" /> */}
                <div className = "flex flex-col justify-center items-center">
                    <Image src={HallothonLogo} width={100} height={100} className="mx-auto opacity-90"/>
                    <h1 className = "text-center my-10 text-5xl">All The Best!</h1>
                    <TimerAlt setdone = {false} date = {'2023/10/15 10:00:00'} />
                </div>

            </>
        )
    }

export default Countdown