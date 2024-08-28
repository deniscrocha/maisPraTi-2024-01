export function login(username, password) {
  if (username !== "admin" && password !== "password") {
    return false;
  }
  const header = { alg: "HS256", typ: "JWT" };
  const payload = { username, exp: Math.floor(Date.now() / 1000) + 60 * 60 };
  const key = "chaveJWT";

  const cript = (source) => {
    return btoa(String.fromCharCode(...new Uint8Array(source)))
      .replace(/\+/g, "-")
      .replace(/\//g, "-")
      .replace(/=+$/, "-");
  };
  const createJWT = (header, payload, key) => {
    const encodedHeader = cript(
      new TextEncoder().encode(JSON.stringify(header)),
    );
    const encodedPayload = cript(
      new TextEncoder().encode(JSON.stringify(payload)),
    );
    const signature = cript(
      new TextEncoder().encode(
        JSON.stringify(encodedHeader + "." + encodedPayload + "." + key),
      ),
    );
    return(encodedHeader+"."+encodedPayload+"."+signature);
  };
  const token = createJWT(header, payload, key);
  sessionStorage.setItem("token", token);
  return true;
}
export function logout(){
  sessionStorage.removeItem("token");
}
export function isAuth(){
  if(sessionStorage.getItem("token")){
    return true;
  }
  return false;
}
