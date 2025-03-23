document.getElementById("products").addEventListener("click",function() {
    document.getElementById("products").scrollIntoView({
        behavior: "smooth"  
    })
});

document.getElementById("client").addEventListener("click",function() {
    document.getElementById("client").scrollIntoView( {
        behavior: "smooth"
    })
});
function checkAccess() {
  let password = prompt("T có đẹp trai không? Yes or No !!!")
    .trim()
    .toLowerCase();

  if (password === "yes") {
    alert("Ok");
    window.location.href = "https://minhkhue289.github.io/Web-5/";
  } else if (password === null || password === "") {
    alert("Bạn chưa nhập gì cả!");
  } else {
    alert("Sai rồi !!! Hãy thử lại.");
    checkAccess();
  }
}

// Gọi hàm khi trang load
checkAccess();
