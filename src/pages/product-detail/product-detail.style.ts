import colors from 'assets/styles/abstracts/color';
import { rem } from 'assets/styles/abstracts/functions';
import { breakpoint } from 'assets/styles/abstracts/mixins';
import sizes from 'assets/styles/abstracts/sizes';
import { createUseStyles, Styles } from 'react-jss';

const styles: Styles = {
  container: {
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: rem(0),
      right: rem(0),
      left: rem(0),
      height: rem(575),
      backgroundColor: colors.greenMain,
      opacity: 0.09,
      width: sizes.full,
      zIndex: -2,
      [breakpoint(992)]: {
        height: rem(870),
      },
    },
  },
  title: {
    fontSize: rem(60),
    color: colors.greenMain,
    fontWeight: sizes.boldest,
    maxWidth: rem(530),
    lineHeight: rem(80),
  },
  titleSecondary: {
    color: colors.textMain,
    fontSize: rem(44),
    fontWeight: sizes.boldest,
    maxWidth: rem(374),
    width: sizes.full,
    [breakpoint(992)]: {
      textAlign: 'center',
    },
  },
  titleMain: {
    fontSize: rem(60),
    fontWeight: sizes.boldest,
    color: colors.greenMain,
    [breakpoint(992)]: {
      textAlign: 'center',
    },
  },
  text: {
    color: colors.textMain,
    fontSize: rem(16),
    maxWidth: rem(600),
    lineHeight: rem(31),
    [breakpoint(992)] : {
      textAlign: 'center',
    },
  },
  titleSm: {
    fontSize: rem(16),
    color: colors.greenMain,
    fontWeight: sizes.boldest,
  },
  flexColMobile: {
    [breakpoint(992)]:  {
      flexDirection: 'column',
      alignItems: 'center',
      gap: rem(20),
    },
  },

playBtn: {
position:'absolute',
left:rem(10),
bottom:rem(10),
cursor:'pointer'
},
imageContainer: {
position:'relative'
},
video: {
    maxWidth:rem(1028),
    width:sizes.full,
    margin:0 + ' auto',
},
Image: {
    width:rem(1028),
    margin:0 + ' auto',
},
containerSm: {
    maxWidth:rem(1240)
},
bannerBelowText: {
    textAlign:'center',
    maxWidth:rem(1028),
    margin:0 + ' auto',
},
banner: {
    paddingTop:rem(50),
    marginTop:rem(30),
    backgroundColor:colors.fadedBg
}, 
bannerTop: {
    [breakpoint(992)]:  {
    flexDirection:'column',
    alignItems:'center'
}
},
bannerAbout: {
    marginTop:rem(65),
    maxWidth:rem(1028),
    width:sizes.full,
    margin:0 + ' auto',
    [breakpoint(992)]:  {
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },
    '& img': {
        maxWidth:rem(498),
        width:sizes.full,
        height:rem(543),
        objectFit:'cover',
        marginBottom:rem(-100)
    },
    '& h2': {
        color:colors.greenMain,
        fontSize:rem(22)
    },
    '& h1': {
        color:colors.greenMain,
        fontSize:rem(41)
    },
    '& span': {
        color:colors.greenMain,
        borderBottom:rem(2) + ' solid ' + colors.greenMain,
        paddingBottom:rem(6)
    },    
},
propertyLoan: {
    marginTop:rem(150),
    [breakpoint(992)]:  {
        flexDirection:'column',
        alignItems:'center',
        gap:rem(20)
    }
},
propertyLoanTitle: {
    color:colors.textMain,
    fontSize:rem(44),
    width:rem(300)
},
propertyLoanTitleSecondary: {
    color:colors.greenMain,
    fontSize:rem(18),
    fontWeight:700
},
loanCalculator: {
    backgroundColor:colors.fadedBg,
    width:'100%',
    maxWidth:rem(1000),
    marginTop:rem(100),
    paddingLeft:'30%',
    marginLeft:'auto',
    position:'relative',
    [breakpoint(1187)]: {
        paddingLeft:'35%',
    },
    [breakpoint(992)]:  {
        padding:rem(0),
        flexDirection:'column',
        alignItems:'center',
        paddingTop:rem(50),
    }
},
loanText: {
    width:rem(414), 
    color:colors.textMain,
    [breakpoint(1187)]: {
        width:rem(300)
    },
    [breakpoint(768)]:  {
        width:'auto'
    }
},
loanTitleSecondary: {
    color:colors.greenMain,
    fontSize:rem(18),
    fontWeight:700
},
loanTitle: {
    color:colors.textMain,
    fontSize:rem(44),
    width:rem(374),
    [breakpoint(768)]:  {
        width:'auto'
    }
},
rangeInput: {
    width:rem(190),
    marginTop:rem(-5),
    [breakpoint(768)]:  {
        width:'auto'
    }
},
loanResult: {
    color:colors.greenMain,
    fontSize:rem(20),
},
loanCalculatorInfo: {
    position:'absolute',
    left:'-15%',
    top:rem(100),
    [breakpoint(992)]:  {
        position:'relative',
        left:'auto',
        top:'auto',
    },
    [breakpoint(1187)]: {
        left:'0%'
    }
},
applyBtn: {
    width:rem(320),
    marginRight:rem(0)
},
inputCredentials: {
    maxWidth:rem(320),
    width:sizes.full
},
inputCredentialsContainer: {
    [breakpoint(992)]:  {
        flexDirection:'column'
    }
},

};

export const useProductDetailStyles = createUseStyles(styles);