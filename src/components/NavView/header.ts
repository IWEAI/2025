
export function useHeader() {
  const  menuList= [
    {
      title: "HOME",
      path: "/home",
      anchor:"#home",
    },
    // {
    //   title: "KEYNOTES",
    //   path: "/keynotes",
    //   anchor:"#keynotes",
    // },
    {
      title: "PROGRAM",
      path: "/program",
      anchor:"#program",
    },
    {
      title: "ORGANIZATION",
      path: "/organization",
      // anchor:"#committee",
      children: [
            {
              title: "ORGANIZING COMMITTEE",
              path: "/organization/committee",
              anchor:"#committee",

            },
            {
              title: "PC MEMBERS",
              path: "/organization/pcmembers",
              anchor:"#pcmembers",
            },
      ]
    },
    {
      title: "CALL FOR ABSTRACTS",
      path: "/abstracts",
      anchor:"#abstracts",
    },
    // {
    //   title: "SUBMISSION",
    //   path: "/submission",
    //   // link:"https://www.easychair.org/",
    // },
    {
      title: "ATTENDING",
      path: "/attending",
      link:"https://www.pricai.org/2024/index.php/attending",
    },
    {
      title: "LOCAL ATTRACTIONS",
      path: "/local",
    },
    {
      title: "PAST IWEAI",
      path: "/past",
  //     children: [
  //       {
  //         title: "ORGANIZING COMMITTEE",
  //         path: "/organization/committee",
  //         anchor:"#committee",

  //       },
  //       {
  //         title: "PC MEMBERS",
  //         path: "/organization/pcmembers",
  //         anchor:"#pcmembers",
  //       },
  // ]
    },
    {
      title: "PRICAI2024",
      path: "/pricai2024",
      link:"https://pricai.org/2024/"
    },
    
  ];

  return {
    menuList,
  };
}
