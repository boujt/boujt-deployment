import { Syssnare } from "./types";

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
