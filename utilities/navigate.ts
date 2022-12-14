export const navigate = (route: string) => {
  const anchor = window.document.createElement("a");
  anchor.href =
    ((process.env.NEXT_PUBLIC_ADMIN_URL as string) ?? "https://app.usedo.me") +
    route;
  anchor.target = "_blank";
  anchor.click();
};
