// src/navBarData.js
import { FaTachometerAlt, FaCalendarAlt, FaUser, FaTasks, FaRegListAlt, FaTable, FaFileAlt, FaChartLine, FaCogs, FaUserShield, FaEye, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { RiArrowDropDownLine, RiShoppingBag2Fill } from "react-icons/ri";
import { BsCart2 } from "react-icons/bs";
import { HiMiniUsers } from "react-icons/hi2";

export const navBarData = [
  {
    content1: {
      head: 'Menu',
      drop1: {
        dropHead: {
          label: 'DashBoard',
          icon: FaTachometerAlt,
          dropIcon: RiArrowDropDownLine
        },
        dropContent: {
          c1: { label: 'eCommerce', icon: FaTachometerAlt },
          c2: { label: 'Analytics', proLabel: 'Pro', icon: FaChartLine },
          c3: { label: 'MarketingCRM', proLabel: 'Pro', icon: FaCogs },
          c4: { label: 'Stocks', proLabel: 'Pro', icon: FaRegListAlt }
        }
      },
      drop2: {
        dropHead: {
          label: 'Calendar',
          icon: FaCalendarAlt,
        }
      },
      drop3: {
        dropHead: {
          label: 'Profile',
          icon: FaUser,
        }
      },
      drop4: {
        dropHead: {
          label: 'Tasks',
          icon: FaTasks,
          dropIcon: RiArrowDropDownLine
        },
        dropContent: {
          c1: { label: 'Task1', icon: FaTasks },
          c2: { label: 'Task2', icon: FaTasks },
          c3: { label: 'Task3', icon: FaTasks },
          c4: { label: 'Task4', icon: FaTasks }
        }
      },
      drop5: {
        dropHead: {
          label: 'Forms',
          icon: FaUserShield,
          dropIcon: RiArrowDropDownLine
        },
        dropContent: {
          c1: { label: 'Form Elements', icon: FaUserShield },
          c2: { label: 'Pro Form Elements', proLabel: 'Pro', icon: FaUserShield },
          c3: { label: 'Form Layout', icon: FaUserShield },
          c4: { label: 'Pro Form Layout', proLabel: 'Pro', icon: FaUserShield }
        }
      },
      drop6: {
        dropHead: {
          label: 'Tables',
          icon: FaTable,
          dropIcon: RiArrowDropDownLine
        },
        dropContent: {
          c1: { label: 'Table1', icon: FaTable },
          c2: { label: 'Table2', icon: FaTable },
          c3: { label: 'Table3', icon: FaTable },
          c4: { label: 'Table4', icon: FaTable }
        }
      },
      drop7: {
        dropHead: {
          label: 'Pages',
          icon: FaFileAlt,
          dropIcon: RiArrowDropDownLine
        },
        dropContent: {
          c1: { label: 'Page1', icon: FaFileAlt },
          c2: { label: 'Page2', icon: FaFileAlt },
          c3: { label: 'Page3', icon: FaFileAlt },
          c4: { label: 'Page4', icon: FaFileAlt }
        }
      }
    },
    content2: {
      head: 'Support',
      drop1: {
        dropHead: {
          label: 'Message',
          proLabel: 'Pro',
          notiFication: '5',
          icon: FaUser
        }
      },
      drop2: {
        dropHead: {
          label: 'Inbox',
          proLabel: 'Pro',
          icon: FaUser
        }
      },
      drop3: {
        dropHead: {
          label: 'Invoice',
          proLabel: 'Pro',
          icon: FaFileAlt
        }
      }
    },
    content3: {
      head: 'Others',
      drop1: {
        dropHead: {
          label: 'Charts',
          icon: FaChartLine,
          dropIcon: RiArrowDropDownLine
        },
        dropContent: {
          c1: { label: 'Chart1', icon: FaChartLine },
          c2: { label: 'Chart2', icon: FaChartLine },
          c3: { label: 'Chart3', icon: FaChartLine },
          c4: { label: 'Chart4', icon: FaChartLine }
        }
      },
      drop2: {
        dropHead: {
          label: 'UI Elements',
          icon: FaCogs,
          dropIcon: RiArrowDropDownLine
        },
        dropContent: {
          c1: { label: 'UI Elements 1', icon: FaCogs },
          c2: { label: 'UI Elements 2', icon: FaCogs },
          c3: { label: 'UI Elements 3', icon: FaCogs },
          c4: { label: 'UI Elements 4', icon: FaCogs }
        }
      },
      drop3: {
        dropHead: {
          label: 'Authentication',
          icon: FaUserShield,
          dropIcon: RiArrowDropDownLine
        },
        dropContent: {
          c1: { label: 'Authentication1', icon: FaUserShield },
          c2: { label: 'Authentication2', icon: FaUserShield },
          c3: { label: 'Authentication3', icon: FaUserShield },
          c4: { label: 'Authentication4', icon: FaUserShield }
        }
      }
    }
  }
];

export const revenueContainerData = [
  {
    Icon: FaEye,
    revenue: 3.456,
    label: 'Total Views',
    percentage: 0.43,
    PercentageIcon: FaArrowUp
  },
  {
    Icon: BsCart2,
    revenue: '45,2',
    label: 'Total Profit',
    percentage: 4.35,
    PercentageIcon: FaArrowUp
  },
  {
    Icon: RiShoppingBag2Fill,
    revenue: 2.450,
    label: 'Total Product',
    percentage: 2.59,
    PercentageIcon: FaArrowUp
  },
  {
    Icon: HiMiniUsers,
    revenue: 3.456,
    label: 'Total Users',
    percentage: 0.95,
    PercentageIcon: FaArrowDown
  },
]

export const revenueData = [
  { month: 'Oct', revenue: 40, sales: 24, productOne: 23, productTwo: 30 },
  { month: 'Nov', revenue: 30, sales: 13, productOne: 18, productTwo: 21 },
  { month: 'Dec', revenue: 20, sales: 98, productOne: 12, productTwo: 24 },
  { month: 'Jan', revenue: 27, sales: 39, productOne: 13, productTwo: 29 },
  { month: 'Feb', revenue: 18, sales: 48, productOne: 10, productTwo: 22 },
  { month: 'Mar', revenue: 23, sales: 38, productOne: 14, productTwo: 25 },
  { month: 'Apr', revenue: 34, sales: 43, productOne: 22, productTwo: 28 },
  { month: 'May', revenue: 43, sales: 50, productOne: 28, productTwo: 32 },
  { month: 'Jun', revenue: 35, sales: 32, productOne: 23, productTwo: 27 },
  { month: 'Jul', revenue: 45, sales: 46, productOne: 27, productTwo: 33 },
  { month: 'Aug', revenue: 50, sales: 51, productOne: 30, productTwo: 35 },
];

export const revenueData2 = [
  { day: 'M', revenue: 40, sales: 24, productOne: 23, productTwo: 30 },
  { day: 'T', revenue: 30, sales: 13, productOne: 18, productTwo: 21 },
  { day: 'W', revenue: 20, sales: 98, productOne: 12, productTwo: 24 },
  { day: 'T', revenue: 27, sales: 39, productOne: 13, productTwo: 29 },
  { day: 'F', revenue: 18, sales: 48, productOne: 10, productTwo: 22 },
  { day: 'S', revenue: 23, sales: 38, productOne: 14, productTwo: 25 },
  { day: 'S', revenue: 34, sales: 43, productOne: 22, productTwo: 28 },
  
];

export const contactFormInputsData = [
  {
    label: 'First Name',
    type: 'text',
    placeholder: 'Enter your first name'
  },
  {
    label: 'Last Name',
    type: 'text',
    placeholder: 'Enter your last name'
  },
  {
    label: 'Email',
    type: 'email',
    placeholder: 'yourmail@gmail.com'
  },
  {
    label: 'Phone',
    type: 'text',
    placeholder: '(321) 5555-0115'
  },
];

export const surveyFormData = [
  {
    label: 'Name',
    type: 'text',
    placeholder: 'enter your full name'
  },
  {
    label: 'Email',
    type: 'email',
    placeholder: 'enter your email address'
  },
  {
    label: 'Name',
    type: 'text',
    placeholder: 'enter your age'
  }
]

