function calculate() {
  const expression = document.getElementById('expression').value.trim();

  if (!expression) {
    alert("Bạn chưa nhập phép tính!");
    return;
  }

  try {
    // Sử dụng hàm eval để tính toán biểu thức
    // Lưu ý: eval có thể nguy hiểm nếu nhập dữ liệu không đáng tin cậy
    const result = eval(expression);
    document.getElementById('result').innerText = `Kết quả: ${result}`;
  } catch (error) {
    document.getElementById('result').innerText = "Phép tính không hợp lệ!";
  }
}