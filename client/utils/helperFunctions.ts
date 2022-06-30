import axios from "axios";
import { Syssnare, UserInfo } from "./types";
import fileDownload from "js-file-download";

const rand = function () {
    return Math.random().toString(36).substr(2); // remove `0.`
};

export function generateToken() {
    return rand() + rand() + rand() + rand();
}

export async function getBase64(file) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onload = function () {
            resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

export function populateSyssnare(sys) {
    const syssnare: Syssnare = {
        id: sys.attributes.syssnare.data.id,
        name: sys.attributes.syssnare.data.attributes.name,
        status: sys.attributes.syssnare.data.attributes.status,
        favorite_animal:
            sys.attributes.syssnare.data.attributes.favorite_animal,
        favorite_icecream:
            sys.attributes.syssnare.data.attributes.favorite_icecream,
        img: sys.attributes.syssnare.data.attributes.profile_img,
        people_in_queue:
            sys.attributes.syssnare.data.attributes.people_in_queue,
    };

    return syssnare;
}
export function addDays(date: Date, days: number) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

export function downloadFile(url: string, filename: string) {
    axios
        .get(url, {
            responseType: "blob",
        })
        .then((res) => {
            fileDownload(res.data, filename);
        });
}

export async function getFileFromUrl(
    url: string,
    name: string,
    defaultType = "image/jpeg"
) {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], name, {
        type: data.type || defaultType,
    });
}

export const uploadFile = async (file: File, token: string) => {
    if (!file) {
        return;
    }
    const fileData = new FormData();
    fileData.append("files", file);

    const res = await axios.post(
        "https://boujt-app-6a3vb.ondigitalocean.app/api/upload",
        fileData,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    if (res.data) {
        return res.data[0].id;
    } else {
        return -1;
    }
};

export const doUpdateUserInfo = (info: UserInfo, token: string, id: number) => {
    return axios.put(
        "https://boujt-app-6a3vb.ondigitalocean.app/api/users/" + id,
        { ...info },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
};
