
import React from "react";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "var(--secondary-color)",
                fontFamily: 'Sora, sans-serif',
            }}
        >
            <div
                style={{
                    background: "#fff",
                    borderRadius: 24,
                    boxShadow: "0 8px 32px rgba(99,171,69,0.10)",
                    padding: "48px 32px 32px 32px",
                    maxWidth: 400,
                    width: "100%",
                    border: "1px solid var(--divider-color)",
                }}
            >
                <div style={{ textAlign: "center", marginBottom: 32 }}>
                    <Image
                        src="/new-images/logo/Untitled-1-16.svg"
                        alt="Paradise Nepal Logo"
                        width={120}
                        height={40}
                        style={{ marginBottom: 8 }}
                    />
                    <h2 style={{
                        fontFamily: 'Marcellus, serif',
                        color: "var(--primary-color)",
                        fontWeight: 400,
                        fontSize: 32,
                        margin: 0,
                    }}>Welcome Back</h2>
                    <p style={{ color: "var(--text-color)", fontSize: 16, marginTop: 8 }}>
                        Sign in to your account
                    </p>
                </div>
                <form>
                    <div style={{ marginBottom: 20 }}>
                        <label htmlFor="email" style={{ color: "var(--primary-color)", fontWeight: 500, fontSize: 15 }}>
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            style={{
                                width: "100%",
                                padding: "12px 16px",
                                borderRadius: 8,
                                border: "1px solid var(--divider-color)",
                                marginTop: 6,
                                fontSize: 15,
                                fontFamily: 'Sora, sans-serif',
                                outline: "none",
                                background: "var(--secondary-color)",
                                color: "var(--text-color)",
                                transition: "border 0.2s",
                            }}
                            placeholder="Enter your email"
                        />
                    </div>
                    <div style={{ marginBottom: 16 }}>
                        <label htmlFor="password" style={{ color: "var(--primary-color)", fontWeight: 500, fontSize: 15 }}>
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            style={{
                                width: "100%",
                                padding: "12px 16px",
                                borderRadius: 8,
                                border: "1px solid var(--divider-color)",
                                marginTop: 6,
                                fontSize: 15,
                                fontFamily: 'Sora, sans-serif',
                                outline: "none",
                                background: "var(--secondary-color)",
                                color: "var(--text-color)",
                                transition: "border 0.2s",
                            }}
                            placeholder="Enter your password"
                        />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
                        <div>
                            <input type="checkbox" id="remember" name="remember" style={{ accentColor: "var(--primary-color)" }} />
                            <label htmlFor="remember" style={{ marginLeft: 6, color: "var(--text-color)", fontSize: 14 }}>
                                Remember me
                            </label>
                        </div>
                        <Link href="#" style={{ color: "var(--accent-color)", fontSize: 14, textDecoration: "underline" }}>
                            Forgot password?
                        </Link>
                    </div>
                    <button
                        type="submit"
                        className="btn-default"
                        style={{ width: "100%", fontSize: 17, fontWeight: 600, borderRadius: 10 }}
                    >
                        Login
                    </button>
                </form>
                <div style={{ textAlign: "center", marginTop: 28 }}>
                    <span style={{ color: "var(--text-color)", fontSize: 15 }}>
                        Don&apos;t have an account?{' '}
                        <Link href="#" style={{ color: "var(--accent-color)", fontWeight: 500 }}>
                            Register
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
