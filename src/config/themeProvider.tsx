/* eslint-disable react/display-name */
import React, { useEffect, useState } from "react";
import { css, Global, ThemeProvider, useTheme } from "@emotion/react";
import { classicTheme, darkTheme } from "@styles/theme.styles";
import useDarkMode from "use-dark-mode";

type ThemeStylesProps = {
  body: string;
  text: string;
};

const ThemeStyles = () => {
  const theme = useTheme() as ThemeStylesProps;

  return (
    <Global
      styles={css`
        body {
          background: ${theme.body};
        }

        * {
          color: ${theme.text};
          padding: 0px;
          margin: 0px;
          box-sizing: border-box;
        }
      `}
    />
  );
};

const ThemeProviders = ({ children }: { children: React.ReactNode }) => {
  const { value } = useDarkMode(false, { storageKey: null, onChange: null });
  const theme = value ? darkTheme : classicTheme;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  });

  const body = (
    <ThemeProvider theme={theme}>
      <ThemeStyles />
      {children}
    </ThemeProvider>
  );

  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{body}</div>;
  }

  return body;
};

export default ThemeProviders;