const container = document.getElementById("container");
const toggleBtn = document.getElementById("toggleBtn");
const banner = document.getElementById("banner");

const states = {
  signup: {
    btnText: "Sign In",
    bannerTitle: "Hello Friend!",
    bannerText: "Enter your details and start your journey with us",
  },
  login: {
    btnText: "Sign Up",
    bannerTitle: "Welcome Back!",
    bannerText: "Stay connected — sign in with your personal details",
  },
};

let isLogin = false;

toggleBtn.addEventListener("click", () => {
  isLogin = !isLogin;
  container.classList.toggle("change");

  const state = isLogin ? states.login : states.signup;
  toggleBtn.textContent = state.btnText;
  banner.querySelector("h1").textContent = state.bannerTitle;
  banner.querySelector("p").textContent = state.bannerText;
});
