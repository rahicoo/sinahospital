//menu xl screen--
function createMenuxl() {
 
    const menu = document.createElement('ul');
    menu.id = "hospital-menu-xl";
    menu.className = "hidden xl:flex bg-[#69BEC7] xl:rounded-[50px] flex xl:flex-col xl:w-[116px] xl:h-[936px] xl:mt-[53px]";
    
 
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

}
