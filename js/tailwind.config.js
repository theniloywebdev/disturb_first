tailwind.config = {
    theme: {
      extend: {

        // COLOR PART START 
        colors: {
          headerOverly:"rgba(22, 12, 109, 0.5)",
          hovercolor:"#1BBF00",
          headerTextColor:"#EFF4FA",
          headerBtnColor:"#fff",
          bannerPColor:"#E6E5F3",
          overlyColor:"rgba(106, 98, 197, 0.9)",
          clientColor:"#141135",
          beforeColor:"#4F585F",
          contectPColor:"#726E9E",
          contectHdColor:"#141135",
          footerBgColor:"#48409C",
          footerPColor:"#FEFEFE",
          PeopleBgColor:"#F8F8FF",
          PeopleHdColor:"##221A2C",
          rightPBgColor:"#F9F9FB",
          emojiShadowBg:"rgba(243, 243, 244, 0.665)",
          rightPBgColorPHoverColor:"#6B62C5",
          likeDvColor:"#C4C4C4",
          serviceBgColor:"#F6F5FF",
          servicePColor:"#6C7D93",
          serviceDvHColor:"#FAFAFE",
          serviceHoverColor:"#6B62C5",
          serviceHoverRoundedColor:"rgba(225, 225, 230, 0.54)",
         
          
        },
        // COLOR PART END

        // CONTAINER PART START 
        width:{
          headerContainer:"1170px",
          bannerContainer:"962px",
          shadowContainer:"1170px",
          counterContainer:"1170px",
          contactContainer:"1147px",
          peopleContainer:"1408px",
          likeContainer:"982px",
          
        },
        // CONTAINER PART END

        // FONT FAMILY START 
        fontFamily: {
          openf: ["Open Sans, sans-serif"],
          paprikaf: ["Paprika, cursive"],
          nunitof: ["Nunito, sans-serif"],

        },

        // FONT FAMILY END


        // BACKGROUND IMAGES PART START 

        backgroundImage: {
          bannerImage: "url('images/banner_img.png')",
          counterBgImage: "url('images/counter_bg.png')",
          contactBgImage: "url('images/contact_bg.png')",
          impactBgImage: "url('images/impact_bg.png')",
          likeBgImage: "url('images/like_bg.png')",
          
        },

        // BACKGROUND IMAGES PART END

        // FONT SIZE START 
        fontSize: {
         bannerHead:"84px",
        },
        // FONT SIZE END

       

      }
    }
  }