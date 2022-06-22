export const useAppsConfig = () => {
  const Apps = [
    {
      id: 1,
      text: "GitHub",
      icon: "/icons/IcGithub.svg",
      action: () => console.log("click"),
      iconSize: { height: 40, width: 40 },
    },
    {
      id: 2,
      text: "VSCode",
      icon: "/icons/IcVscode.svg",
      action: () => console.log("click"),
      iconSize: { height: 36, width: 36 },
    },
    {
      id: 3,
      text: "Docker",
      icon: "/icons/IcDocker.svg",
      action: () => console.log("click"),
      iconSize: { height: 36, width: 36 },
    },
    {
      id: 4,
      text: "Node.js",
      icon: "/icons/IcNodejs.svg",
      action: () => console.log("click"),
      iconSize: { height: 36, width: 36 },
    },
    {
      id: 5,
      text: "React",
      icon: "/icons/IcReact.svg",
      action: () => console.log("click"),
      iconSize: { height: 36, width: 36 },
    },
  ];
  return {
    Apps,
  };
};
