$(document).ready(function () {
  $(".sidenav").sidenav();
  $(".modal").modal();
});

const submitForm = () => {
  let formData = {};

  formData.full_name = $("#name").val();

  formData.password = $("#password").val();

  formData.email = $("#email").val();

  console.log("Form Data Submitted: ", formData);
};
