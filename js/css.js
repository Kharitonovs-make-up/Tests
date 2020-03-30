// let aButton = document.createElement("a");
// aButton.textContent = "Нажми меня";

// let styles =
//     `
// -moz-border-radius: 8px;
// -webkit-border-radius: 8px;
// border-radius: 8px;
// border: 2px groove green;
// display: block;
// height: 30px;
// line-height: 30px;
// width: 100px;
// text-decoration: none;
// text-align: center;
// color: red;
// font-weight: bold;
// `;
let fieldset = document.querySelector('.fieldset');
let textArea = document.getElementsByTagName('textarea')[0];
// function setCssFromStr(str, elem) {

//     function setStyle(css, value) {
//         if (css in elem.style) {
//             elem.style[css] = value;
//         }
//     }

//     function setCssFromStr(str, elem) {
//         return str.split(";").map((css) => {
//             let [name, value] = css.split(":");
//             elem.style.setProperty(name.replace(`/\n/g`, ``).trim(), value);
//         });
//     }
// }

// setCssFromStr(styles, fieldset);
// function showNotification(options) {
//     const message = document.createElement('div');
//     message.classList.add('notification');
//     if (options.cssText) {message.style.cssText = options.cssText;}
//     else {
//     message.style.marginTop = `${options.top}px`;
//     message.style.marginRight = `${options.right}px`;
//     }
//     message.textContent = options.html;
//     message.classList.add(options.className);
//     fieldset.append(message);
//     return setInterval(() => message.hidden = !message.hidden, 1500);
//     }
// // покажет элемент с текстом "Привет" и классом welcome справа-сверху окна
// showNotification({
//     top: 10,
//     right: 10,
//     html: "Привет",
//     className: "welcome"
//   });

// function showNotification({top = 10, right = 10, html = "Привет", className = "welcome"} = {}) {
//     let elem = document.createElement("div");
//     elem.innerHTML = html;
//     elem.style.marginTop = `${top}px`;
//     elem.style.marginRight = `${right}px`;
//     elem.classList.add(className);

//     fieldset.append(elem);

//     setTimeout(() => {
//         elem.remove();
//     }, 1500);
// }
function showNotification({top, right, html, className, cssText}) {
    top = (top || 25) + 'px';
    right = (right || 25) + 'px';
    className = className || 'notification';
    html = html || 'Hello! This is a notification message!';
    let notification = document.createElement('div');
    notification.style.top = top;
    notification.style.right = right;
    if (className) {notification.classList.add(className);}
    if (cssText) {notification.style.cssText = cssText;}
    notification.innerHTML = html;

    setInterval(() => notification.classList.toggle('hidden'), 3000);

    return notification;
}
//fieldset.prepend(showNotification({top:30, right:30, html: 'Pay or suffer!'}));
//document.body.append(showNotification({top:30, right:30, html: 'Pay or suffer!'}));
// showNotification();