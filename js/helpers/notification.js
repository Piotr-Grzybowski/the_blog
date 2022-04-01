function notify(type, message) {
  (() => {
    let n = document.createElement("div");
    let id = Math.random().toString(36);
    n.setAttribute("id", id);
    n.classList.add("notification", type);
    n.innerText = message;
    document.getElementById("notification-area").appendChild(n);
    setTimeout(() => {
      const notifications = document
        .getElementById("notification-area")
        .getElementsByClassName("notification");
      for (let notification of notifications) {
        if (notification.getAttribute("id") == id) {
          notification.remove();
          break;
        }
      }
    }, 3000);
  })();
}

export function notifySuccess() {
  notify("success", "Article added successfully!");
}
export function notifyError() {
  notify("error", "Something went wrong!");
}
