// 拖拽的 DIV

// 1. 创建dom
var oDiv = document.createElement('div');

// 2. 添加样式
oDiv.id = 'demo';
oDiv.style.border = '1px solid red';
oDiv.style.height = '100px';
oDiv.style.width = '100px';

// 3. 添加到body
document.body.appendChild(oDiv);

// 4. 鼠标监听
/**
 * e 是TypeScript 里面的对象
 */

var onOff = false;  // 开关按钮
var position = [0, 0];  // 位置

oDiv.onmousedown = (e) => {
    onOff = true;
    // 记录鼠标点击的位置
    position = [e.clientX, e.clientY];
}

document.onmousemove = (e) => {
    console.log(e.clientX, e.clientY)
    if (onOff === true) {
        let deltaX = e.clientX - position[0];
        let deltaY = e.clientY - position[1];
        let top = parseInt(oDiv.style.top!) || 0;
        let left = parseInt(oDiv.style.left!) || 0;
        oDiv.style.top = top + deltaY + 'px';
        oDiv.style.left = left + deltaX + 'px';
        position = [e.clientX, e.clientY]
    }
}

document.onmouseup = (e) => {
    onOff = false;
}