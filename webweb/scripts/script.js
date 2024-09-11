//根据class的标识，获取元素
// 获取标题元素
const title = document.querySelector('h1');

// 获取容器元素
const container = document.querySelector('.container');

// 获取树苗元素
const tree = document.querySelector('.tree');

// 获取浇水壶元素
const wateringCan = document.querySelector('.watering-can');

// 获取已浇水次数元素
const wateredCount = document.querySelector('.watered-count');

// 获取提示文本元素
const promptText = document.querySelector('p');

function watering() {
    title.textContent = '你浇了水！';
  // 获取已浇水次数
  let count = parseInt(wateredCount.textContent);
  // 增加已浇水次数
  count++;

  // 更新已浇水次数
  wateredCount.textContent = count;

  // 更新提示文本
  promptText.textContent = '你浇了水！';
}
wateredCount.textContent = '0';
wateringCan.addEventListener('dragover', function(e) {
    e.preventDefault();
});

//onmousedown事件，当鼠标按下时触发,event代表
ball.onmousedown = function(event) {
    // (1) 准备移动：确保 absolute(代表控制元素位置的方式，可以通过left和top精准定位)，
    //并通过设置 z-index 以确保球在顶部
    //zIndex代表css中堆叠元素的顺序，数值越大，越靠上
    ball.style.position = 'absolute';
    ball.style.zIndex = 1000;
  
    // 将其从当前父元素中直接移动到 body 中
    // 以使其定位是相对于 body 的
    document.body.append(ball);
  
    // 现在球的中心在 (pageX, pageY) 坐标上
    function moveAt(pageX, pageY) {
    //‘px’代表单位像素
      ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
      ball.style.top = pageY - ball.offsetHeight / 2 + 'px';
    }
  
    // 将我们绝对定位的球移到指针下方
    moveAt(event.pageX, event.pageY);
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // (2) 在 mousemove 事件上移动球
    document.addEventListener('mousemove', onMouseMove);
  
    // (3) 放下球，并移除不需要的处理程序
    ball.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      ball.onmouseup = null;
    };
  
  };