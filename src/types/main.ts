import React from "react";

export interface IChildren {
  children?: React.ReactNode;
}

export interface IRoute {
  route: string;
  Component: any;
}

export interface ICard {
  title: string;
  content: string;
}

export interface IInput {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent) => void;
}
