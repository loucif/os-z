export const useRecommendedConfig = () => {
  const recommendedFiles = [
    {
      id: 1,
      fileName: "LinkedIn",
      details: "Connect on Linkedin",
      icon: "/icons/IcLinkedin.svg",
      action: () => console.log("click"),
      iconSize: { height: 44, width: 44 },
    },
    {
      id: 4,
      fileName: "Recent Projects",
      details: "May 10",
      icon: "/icons/IcProject.svg",
      action: () => console.log("click"),
      iconSize: { height: 40, width: 40 },
    },
    {
      id: 5,
      fileName: "Twitter",
      details: "Connect on Twitter",
      icon: "/icons/IcTwitter.svg",
      action: () => console.log("click"),
      iconSize: { height: 40, width: 40 },
    },
  ];
  return {
    recommendedFiles,
  };
};
