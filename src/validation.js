export default function validationEmail(email) {
    if (email === "") {
      document.getElementById("email").classList.add("fail");
    }else {
      if (/@+yandex|gmail|outlook+.com$/.test(email)) {
        return email;
      }else {
        document.getElementById("email").classList.add("fail");
      }
      console.log(/@yandex|gmail|outlook.com$/.test(email))
    }
}