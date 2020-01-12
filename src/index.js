// import "./style.css";
import "./style.less";
import "./utils/jquery";
import logo from "../images/1.jpg"
// + 导入错误的模块
import error from "./error"
// 导入图片

// 执行会报错的函数
error();

let obj = {
    name: "zs",
    age: 18
};
// const pic = document.createElement("img");
// pic.setAttribute("src","")
document.body.classList.add("blue");
console.log(obj);
const element = document.createElement("div");

// 添加显示图片
element.innerHTML = `
	<div class="red">hello webpack22333</div>
	<div class="blue">hello webpack and less</div>

	<img alt="" src="${logo}"/>
`;

document.body.appendChild(element);
var element2 = document.createElement("span");
element2.innerHTML = `hello`;
document.body.appendChild(element2);