// logic for menu on small device

// const menuIcon = document.querySelector(".menu-btn");
// const navLinks = document.querySelector("nav-links");

const name = "AMOL SHLEKE";
const userAge = 19;

if (userAge < 18) {
  console.log(`Hey There ${name} I hope you are doing well`);
} else if (userAge === 18) {
  console.log(`Hey there ${name} congratulations on being 18`);
} else {
  console.log(`${name} you are not teen anymore🥲`);
}
