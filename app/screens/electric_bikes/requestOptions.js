import React from 'react';

function requestOptions(props) {
    return (
        {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "AcceptEncoding": "gzip",
                "contentlength": "238",
                "contenttype": "application/json",
                "device": "samsung SM-G986B samsung",
                "device_brand": "samsung",
                "device_model": "SM-G986B",
                "os_api": "29",
                "os_version": "4.19.87-18186339",
                "platformid": "3",
                "User-Agent": "android.bikewale.com/3.3.0/9",
                "version_code": "76",
                "version_name": "3.3.0",
                "Referrer": "https://www.bikewale.com"
            }
        }
    );
}

export default requestOptions;