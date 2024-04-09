function handleUpload() {
    var fileInput = document.getElementById('csvFileInput');
    var file = fileInput.files[0];
    var reader = new FileReader();

    reader.onload = function(event) {
        var csvData = event.target.result;
        processData(csvData);
    };

    reader.readAsText(file);
}

function processData(csvData) {
    // 이 부분에서 CSV 데이터를 처리하는 코드를 작성합니다.
    console.log(csvData);
}
