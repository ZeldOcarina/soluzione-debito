import './JS/navbar'
import formurlencoded from "form-urlencoded";

const form = document.querySelector("form");
const action = form.getAttribute("action");

//form handle (sj doesnt use it)
// if (form) {
//    form.addEventListener("submit", async function (e) {
//      e.preventDefault();
//      const formData = new FormData(form);

//      const requestBody = {};
//      for (const [name, value] of formData.entries()) {
//       requestBody[name] = value;
//      }

//      try {
//        const response = await fetch(action, {
//          method: "POST",
//          headers: {
//            "Content-Type": "application/x-www-form-urlencoded",
//          },
//          body: formurlencoded(requestBody),
//        });
//        console.dir(response);
//        if (response.status === 200) {
//        } else throw new Error("Error");
//      } catch (err) {
//        console.dir(err);
//      }
//    });
//  }

document.getElementById("date").innerText = new Date().getFullYear();


