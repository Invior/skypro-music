"use client";
import styles from "./signup.module.css";
import Image from "next/image";
import { useState } from "react";
import { signup } from "@/store/features/userSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function Signup() {
  const error = useAppSelector((state) => state.user.error);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    passwordTwo: "",
  });

  const onChangedInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSignUp = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      if (!inputValue.email || !inputValue.password || !inputValue.passwordTwo) {
        alert('Введите данные для входа');
        return;
      }
      if (inputValue.password !== inputValue.passwordTwo) {
        return alert('Оба пароля должны совпадать');
      }
      await dispatch(signup(inputValue)).unwrap();
      router.push("/login");
    } catch (error: unknown) {
      console.error("error");
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.containerSignup}>
        <div className={styles.modalBlock}>
          <form className={styles.modalFormLogin}>
            <Link href="/tracks">
              <div className={styles.modalLogo}>
                <Image
                  alt="logo"
                  src="/img/logo_modal.png"
                  width={140}
                  height={21}
                />
              </div>
            </Link>
            <input
              onChange={onChangedInput}
              className={styles.modalInput}
              value={inputValue.email}
              name="email"
              placeholder="Почта"
              type="text"
            />
            <input
              onChange={onChangedInput}
              className={styles.modalInput}
              value={inputValue.password}
              name="password"
              placeholder="Пароль"
              type="password"
            />
            <input
              onChange={onChangedInput}
              className={styles.modalInput}
              value={inputValue.passwordTwo}
              name="passwordTwo"
              placeholder="Повторите пароль"
              type="password"
            />
            <p className={styles.error}>{error && error}</p>
            <button onClick={handleSignUp} className={styles.modalBtnSignupEnt}>
              <span>Зарегистрироваться</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
