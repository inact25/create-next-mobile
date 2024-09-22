"use client"
import React, {useEffect, useState} from 'react';
import 'react-device-frameset/styles/marvel-devices.min.css'
import {DeviceFrameset} from "react-device-frameset";
import Wrapper from "@/components/atoms/Wrapper";
import {QRCodeSVG} from "qrcode.react";


const MobileOnly = () => {
    const [url, setUrl] = useState<string>('')
    useEffect(()=>{
        const currentUrl = window.location.href;
        setUrl(currentUrl)
    },[])

    return (
        <div>
            <DeviceFrameset device="iPhone X" color="gold" landscape={false}>
                <div className='px-5 flex bg-gray-900 h-full text-white items-center justify-center'>
                    <Wrapper>
                        <div
                            className="qr-code p-4 bg-white w-fit m-auto mb-5 shadow-2xl rounded-tl-3xl rounded-br-3xl ">
                            <QRCodeSVG value={url}/>
                        </div>
                        <h1 className='font-medium text-xl'>
                            Please Access from your <br/> Mobile Device
                        </h1>
                    </Wrapper>
                </div>
            </DeviceFrameset>
        </div>
    );
};

export default MobileOnly;