// รับค่าปุ่มคำนวณจาก form
let calcurateBtn = document.getElementById("calcurate-btn");
calcurateBtn.addEventListener('click',calcurateInterest);

// ฟังก์ชัน สำหรับคำนวณดอกเบี้ย
function calcurateInterest() {

// รับค่า input จาก form
let principle = parseFloat(document.getElementById("principle").value);
let interestRate = parseFloat(document.getElementById("interestRate").value) / 100 / 12;
let term = parseFloat(document.getElementById("term").value);

//สูตรคำนวณเงินต้นแบบคงที่
let monthlyPayment = (principle * interestRate) / (1 - Math.pow(1 + interestRate, -term));

//รับค่า สำหรับสร้างตารางดอกเบี้ย
let resultTable = document.getElementById("resultTable");
resultTable.innerHTML = "<th>งวดที่</th><th>จำนวนเงินต้น</th><th>ดอกเบี้ย</th><th>ยอดชำระ</th><th>เงินต้นคงเหลือ</th>";

// คำนวณดอกเบี้ย
for(let i = 1; i <= term; i++){
let interest = (principle * interestRate);
let principlePayment = (monthlyPayment - interest);
principle = (principle - principlePayment); 

//เพิ่มข้อมูลลงตาราง
let row = resultTable.insertRow();
row.insertCell(0).innerHTML = i;
row.insertCell(1).innerHTML = principlePayment.toFixed(2);
row.insertCell(2).innerHTML = interest.toFixed(2);
row.insertCell(3).innerHTML = monthlyPayment.toFixed(2);
row.insertCell(4).innerHTML = principle.toFixed(2);

}
}