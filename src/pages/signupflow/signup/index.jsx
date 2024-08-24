import design from "./signup.module.css";
import { signup } from "../../../assets/images";

export const Signup = () => {
  return (
    <div className={design.container}>
      <section className={design.leftSection}>
        <form className={design.inputField}>
            <p className={design.title}>Create your account</p>

            <div>
                <div className={design.nameInput}>
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                </div>
                <div className={design.id}>
                    <input type="email" placeholder="johndoe@123.com" />
                    <input type="password" placeholder="********" />
                </div>
                <button type="submit" className={design.signupButton}>
                    Sign Up
                </button>
            </div>

          <p className={design.signinLink}>Already have an account? Sign in</p>
        </form>
      </section>

      <section className={design.rightSection}>
        <img src={signup} alt="" />
      </section>
    </div>
  );
};
