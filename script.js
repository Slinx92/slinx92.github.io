function uploadfile() {
    let data = document.getElementById("file").files[0];
    let entry = document.getElementById("file").files[0];
    fetch('./videos/' + encodeURIComponent(entry.name), {method:'POST',body:data});
    alert(`Your file has been uploaded!`);
    console.log(keys(data))
    console.log(values(data))
    location.reload();
};