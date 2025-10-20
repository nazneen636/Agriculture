const validator = new JustValidate(document.querySelector("#basic_form"));

validator
  .addField(document.querySelector("#basic_name"), [
    {
      rule: "required",
    },
    {
      rule: "minLength",
      value: 3,
    },
    {
      rule: "maxLength",
      value: 15,
    },
  ])
  .addField(document.querySelector("#basic_email"), [
    {
      rule: "required",
    },
    {
      rule: "email",
    },
  ])
  .addField(document.querySelector("#basic_password"), [
    {
      rule: "required",
    },
    {
      rule: "password",
    },
  ])
  .addField(document.querySelector("#basic_age"), [
    {
      rule: "required",
    },
    {
      rule: "number",
    },
    {
      rule: "minNumber",
      value: 18,
    },
    {
      rule: "maxNumber",
      value: 150,
    },
  ]);
