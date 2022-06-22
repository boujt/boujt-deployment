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
