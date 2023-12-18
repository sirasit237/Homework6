document.addEventListener("DOMContentLoaded", function () {
    // เลือก HTML element ที่มี class ชื่อ "number" และเก็บ reference ไว้ในตัวแปร numberDisplay
    const numberDisplay = document.querySelector(".number");

    // เลือก HTML element ที่มี class ชื่อ "btn-inc" และเก็บ reference ไว้ในตัวแปร incButton
    const incButton = document.querySelector(".btn-inc");

    // เลือก HTML element ที่มี class ชื่อ "btn-dec" และเก็บ reference ไว้ในตัวแปร decButton
    const decButton = document.querySelector(".btn-dec");

    // เลือก HTML element ที่มี class ชื่อ "btn-clr" และเก็บ reference ไว้ในตัวแปร clrButton
    const clrButton = document.querySelector(".btn-clr");

    // กำหนดค่าเริ่มต้นของตัวแปรนับ
    let counterValue = 0;

    // ฟังก์ชันสำหรับอัปเดตการแสดงผลที่แสดงค่าของตัวแปรนับ
    const updateDisplay = () => {
        numberDisplay.textContent = counterValue;
    };

    // เพิ่ม Event Listener สำหรับปุ่มที่เพิ่มค่า
    incButton.addEventListener("click", function () {
        // ตรวจสอบว่าค่าของตัวแปรนับบวกไปเรี่อยๆ
        if (counterValue +1 ) {
            // เพิ่มค่าของตัวแปรนับ
            counterValue++;
            // อัปเดตการแสดงผล
            updateDisplay();
        }
    });

    // เพิ่ม Event Listener สำหรับปุ่มที่ลดค่า
    decButton.addEventListener("click", function () {
        // ตรวจสอบว่าค่าของตัวแปรนับมากกว่า 0
        if (counterValue > 0) {
            // ลดค่าของตัวแปรนับ
            counterValue--;
            // อัปเดตการแสดงผล
            updateDisplay();
        }
    });

    // เพิ่ม Event Listener สำหรับปุ่มที่ล้างค่า
    clrButton.addEventListener("click", function () {
        // กำหนดค่าตัวแปรนับเป็น 0
        counterValue = 0;
        // อัปเดตการแสดงผล
        updateDisplay();
    });
});
