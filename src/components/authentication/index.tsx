import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import skeleton from "./skeleton.json";
import Image from "next/image";
import React from "react";
import logo from "@/images/PingPilotLogo_Light.png";

interface IAuthenticationFormProps {
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
  onModeSwitch?: () => void;
  onSubmit?: (e: { email: string; password: string }) => void;
  isLogin?: boolean;
}

export function AuthenticationForm({
  className,
  onModeSwitch,
  onSubmit,
  isLogin,
}: IAuthenticationFormProps) {
  const authState = isLogin ? "login" : "signup";
  const { catchPhrase, authIntentTitle, submitLabel, alternateAction } =
    skeleton.modes[authState];
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function onBtnClick() {
    if (onSubmit) {
      onSubmit({ email, password });
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">{catchPhrase}</h1>
                <p className="text-muted-foreground text-balance">
                  {authIntentTitle}
                </p>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  onChange={handleEmailChange}
                  value={email}
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="*************"
                  required
                  onChange={handlePasswordChange}
                  value={password}
                  autoComplete={`ping-pilot section-${authState} current-password`}
                />
              </div>
              <Button type="submit" className="w-full" onClick={onBtnClick}>
                {submitLabel}
              </Button>
              <div className="text-center text-sm">
                {alternateAction}{" "}
                <a
                  href="#"
                  className="underline underline-offset-4"
                  onClick={onModeSwitch}
                >
                  {authState === "login" ? "Sign Up" : "Log In"}
                </a>
              </div>
            </div>
          </form>
          <div className="bg-muted relative hidden md:block">
            <Image
              src={logo}
              alt="Logo"
              width={500}
              height={500}
              className="absolute inset-0 w-full m-auto object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our{" "}
        <a href="/terms-of-service" target="_blank" rel="noopener noreferrer">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>
        .
      </div>
    </div>
  );
}
