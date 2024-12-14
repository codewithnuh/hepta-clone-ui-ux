"use client";
import { NAVIGATION_LINKS } from "@/constants";
import Link from "next/link";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white py-10">
      <nav className="container grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4">
        <ul className="space-y-4">
          <li className="font-semibold">Quick Links</li>
          {NAVIGATION_LINKS.slice(0, 6).map((item, index) => (
            <li key={index}>
              <Link href={item.link}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <ul className="space-y-4">
          <li className="font-semibold">Support</li>
          {NAVIGATION_LINKS.slice(6).map((item, index) => (
            <li key={index}>
              <Link href={item.link}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <ul className="space-y-4">
          <li className="font-semibold">Contact Info</li>
          <li>
            <address>
              Address:
              <p className="text-muted-foreground mt-2">
                98 West 21th Street, Suite
              </p>
              <p className="text-muted-foreground">721 New York NY 10016</p>
            </address>
          </li>
          <li>
            Phone:
            <p className="text-muted-foreground">(+1) 435 3533</p>
          </li>
          <li>
            Email:
            <p className="text-muted-foreground">info@yourdomain.com</p>
          </li>
        </ul>
        <ul className="space-y-4">
          <li className="font-semibold">Subscribe</li>
          <li>
            <p className="text-muted-foreground">Sign up for our newsletter</p>
          </li>
          <li>
            <form className="flex space-y-2 flex-col justify-center">
              <Input
                type="email"
                placeholder="yourname@example.com"
                className="placeholder:text-sm"
              />
              <Button onClick={(e) => e.preventDefault()}>Submit</Button>
            </form>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
