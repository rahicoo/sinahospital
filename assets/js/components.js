//menu xl screen--
function createMenuxl() {
 
    const menu = document.createElement('ul');
    menu.className = "hidden xl:flex bg-[#69BEC7] xl:rounded-[50px] flex xl:flex-col xl:w-[116px] xl:h-[920px] xl:mt-[31px]";
    
 
    const li1 = document.createElement('li');
    li1.innerHTML = `<img src="assets/img/Ellipse 49.svg" alt="پزشک متخصص" class="xl:w-[89px] xl:mt-[21px] xl:mr-[14px] xl:ml-[13px]">`;
    menu.appendChild(li1);

 
    const li2 = document.createElement('li');
    li2.className = "flex xl:flex-col xl:justify-center xl:items-center xl:w-[153px] xl:h-[150px] rounded-[100px] xl:bg-[#EBF6F8] xl:mr-[-22px] xl:mt-[17px] dark:bg-gray-900";
    li2.innerHTML = `<img src="assets/img/logo-copy64.svg" alt="لوگوی بیمارستان سینا" class="xl:w-[108px] xl:mt-[38p]">`;
    menu.appendChild(li2);

   
    const li3 = document.createElement('li');
    li3.className = "item-menu xl:mt-[20px]";
    li3.innerHTML = `<a href="./dashboard.html" class="xl:w-[64px] xl:h-[30px] xl:mt-[35px] xl:mr-[25px] xl:ml-[28px] font-black text-white xl:text-[20px]">داشبورد</a>`;
    menu.appendChild(li3);

    const li4 = document.createElement('li');
    li4.className = "item-menu";
    li4.innerHTML = `<button onclick="window.location.href='./patients.html'" class="xl:w-[51px] xl:h-[28px] xl:mt-[52px] xl:mr-[24px] xl:ml-[41px] font-black text-white xl:text-[18px]">بیماران</button>`;
    menu.appendChild(li4);

  
    const li5 = document.createElement('li');
    li5.className = "item-menu";
    li5.innerHTML = `<button class="xl:w-[77px] xl:h-[27px] xl:mt-[55px] xl:mr-[24px] font-black text-white xl:text-[18px]">اطلاعیه‌ها</button>`;
    menu.appendChild(li5);

   
    const li6 = document.createElement('li');
    li6.className = "item-menu";
    li6.innerHTML = `<button class="xl:w-[63px] xl:h-[28px] xl:mt-[55px] xl:mr-[24px] xl:ml-[29px] font-black text-white xl:text-[18px]">تنظیمات</button>`;
    menu.appendChild(li6);

 
    const li7 = document.createElement('li');
    li7.className = "item-menu";
    li7.innerHTML = `<button class="xl:w-[41px] xl:h-[28px] xl:mt-[158px] xl:mr-[30px] xl:ml-[45px] font-black text-white xl:text-[18px]">خروج</button>`;
    menu.appendChild(li7);

  
    const li8 = document.createElement('li');
    li8.className = "xl:h-[41px] xl:w-[78px] xl:mt-[52px] xl:ml-[14px] xl:mr-[15px] xl:rounded-[25px] xl:bg-[#FFFFFF] xl:flex xl:flex-row xl:justify-between";
    li8.innerHTML = `
        <button class="disable-dark-mode">
            <img src="assets/img/Vector (4).svg" alt="تصویر خورشید برای تنظیم لایت مود" class="xl:mr-[8px] rounded-full hover:bg-gray-500 transition-transform hover:scale-110">
        </button>
        <button class="enable-dark-mode">
            <img src="assets/img/moon.svg" alt="عکس ماه برای تنظیم دارک مود" class="xl:ml-[8px] rounded-full hover:bg-gray-300 transition-transform hover:scale-110">
        </button>
    `;
    menu.appendChild(li8);

    return menu;
};
  
//Dr. information---
function drInfo(){
    const drinfo = document.createElement("div");
    drinfo.className=" w-full flex flex-row justify-between text-[#4F4F4F] ";

    const item1=document.createElement("div");
    item1.className="flex flex-row gap-[2px] md:gap-4 items-center dark:text-white"
    item1.innerHTML=`<p class="  xl:mt-[px] xl:mr-[62px]  text-[15px] md:text-[20px] font-bold  ">دکتر ناصر مقدسی</p>
   <div class="relative inline-block z-40 w-[30px] md:w-[43px] lg:w-[70px] ">
    <div id="badge" class="absolute top-0 right-0 w-8 h-10 rounded-full border-white">
        <span id="notification-count" class="absolute -top-2 -right-2 bg-[#BEE6EA] text-black text-[15px] rounded-full w-6 h-6 flex items-center justify-center">۳</span>
    </div>
    <img id="dropdownButton" src="assets/img/Group 34077.svg" alt="پیام ها" class="w-10 lg:w-[50px]  cursor-pointer">
     
    
    <div id="dropdownContent" class="hidden  opacity-0 transform  transition-all duration-300  absolute right-[-85px] mt-2 w-48 bg-white rounded-lg shadow-lg  overflow-y-auto max-h-[300px] w-[330px] px-4 dark:bg-[#adb4b5] dark:text-black ">
        <ul class="p-2 dark:bg-[#adb4b5] w-[281px] ">
            <li class="border-b p-2 flex flex-col transition-transform hover:scale-110 focus:scale-105">
              <div class="flex flex-row mb-[20px]">
                <img src="assets/img/Ellipse 49.svg" alt="تصویر ارسال کننده پیام" class="w-[30px] ">
                <span class="mr-[10px]">احمد احمدی</span>
              </div>
              <div> 
                <p  class="text-[12px]"> سلام من احمد احمدی هستم </p>
              </div>
            </li>
            <li class="border-b p-2 flex flex-col transition-transform hover:scale-110 focus:scale-105">
              <div class="flex flex-row mb-[20px]  ">
                <img src="assets/img/Ellipse 49.svg" alt="تصویر ارسال کننده پیام" class="w-[30px]  ">
                <span class="mr-[10px]">احمد احمدی</span>
              </div>
              <div >
                <p  class="text-[12px]"> سلام من احمد احمدی هستم </p>
              </div>
            </li> <li class="border-b p-2 flex flex-col transition-transform hover:scale-110 focus:scale-105">
              <div class="flex flex-row  mb-[20px]">
                <img src="assets/img/Ellipse 49.svg" alt="تصویر ارسال کننده پیام" class="w-[30px] ">
                <span class="mr-[10px]">احمد احمدی</span>
              </div>
              <div>
                <p  class="text-[12px]"> سلام من احمد احمدی هستم </p>
              </div>
            </li> <li class="border-b p-2 flex flex-col transition-transform hover:scale-110 focus:scale-110">
              <div class="flex flex-row mb-[20px]">
                <img src="assets/img/Ellipse 49.svg" alt="تصویر ارسال کننده پیام" class="w-[30px]">
                <span class="mr-[10px]">احمد احمدی</span>
              </div>
              <div>
                <p  class="text-[12px]"> سلام من احمد احمدی هستم </p>
              </div>
            </li>
        </ul>
    </div>`
    drinfo.appendChild(item1);

    const item2= document.createElement("div");
    item2.className="flex flex-row gap-[2px] md:gap-4 items-center ";
    item2.innerHTML=` <p class="  font-bold  text-[15px] md:text-[20px] xl:font-bold dark:text-white ">شماره نظام پزشکی:</p>
    <div  class=" bg-[#FFFFFF] rounded-[12px] w-[61px] h-[25px] md:h-[45px]  xl:mr-[52px] flex justify-center  md:w-[85px] lg:w-[108px] xl:h-[42px]">
        <p class=" text-[15px] font-bold md:text-[25px] xl:font-medium dark:text-black">۹۷۰۴۰</p>
    </div>`;
    drinfo.appendChild(item2);

    return drinfo;
   
};

//menu sm screen

function sinaMenuDashboard(){
    const menudashboard=document.getElementById('hospital-menu-mobile');
    menudashboard.classList.toggle('hidden');
  }

function sinaMenuPatiens() {
    const menu = document.getElementById('hospital-menu-mobile');
    menu.classList.toggle('hidden'); 
  }

function createMenusm(){
    const menuSM=document.createElement("ul");
    menuSM.id="hospital-menu-mobile"
    menuSM.className="flex flex-col justify-around  shadow-xl text-[20px] font-medium w-[100%] rounded-[20px]  z-50 absolute  bg-white top-[65px]  h-[440px] mb-[10px] items-center dark:bg-[#adb4b5]  bg-[url('assets/img/SL-040820-29750-27.jpg')] bg-cover"

    const li1=document.createElement("li");
    li1.className="mt-[30px] mr-[12px] transition-transform  hover:scale-110";
    li1.innerHTML=`<a href="./dashboard.html" >داشبورد</a>`
    menuSM.appendChild(li1)

    const li2=document.createElement("li");
    li2.className="mt-[30px] mr-[12px] transition-transform  hover:scale-110 ";
    li2.innerHTML=`<a href="./patients.html">بیماران</a>`;
    menuSM.appendChild(li2);

    const li3=document.createElement("li");
    li3.className="mt-[30px] mr-[12px] transition-transform  hover:scale-110 ";
    li3.innerHTML=`<button>اطلاعیه ها</button>`
    menuSM.appendChild(li3);

    const li4=document.createElement("li");
    li4.className="mt-[30px] mr-[12px] transition-transform  hover:scale-110 ";
    li4.innerHTML=`<button>تنظیمات</button>`
    menuSM.appendChild(li4);

    const li5=document.createElement("li");
    li5.className="mt-[30px] mr-[12px] transition-transform  hover:scale-110 ";
    li5.innerHTML=`<button>خروج</button>`
    menuSM.appendChild(li5);

    const li6=document.createElement("li");
    li6.className="h-[41px] w-[78px] rounded-[25px] bg-[#FFFFFF] flex flex-row justify-between my-[30px] mr-[12px]";
    li6.innerHTML=`<input data-hs-theme-switch="" type="checkbox" id="darkSwitch" class="relative w-[100px] h-[41px] border-2 bg-[#e9f6f8] shadow-xl checked:bg-gray-100 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 ring-1 ring-transparent focus:outline-none appearance-none
          before:absolute before:w-[31px] before:h-[31px] before:bg-[url('assets/img/moon.svg')]
          before:bg-cover  before:left-[3px] before:top-[4px] before:rounded-full before:transition-all before:duration-200 checked:before:opacity-0
          after:absolute after:w-[31px] after:h-[31px] after:bg-[url('assets/img/sun-svgrepo-com.svg')]  after:bg-cover after:top-[4px] after:right-[3px] after:rounded-full after:transition-all after:duration-200 after:opacity-0 checked:after:opacity-100">`;
          
    menuSM.appendChild(li6);
    
    return menuSM;

    
};
