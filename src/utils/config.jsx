import { FiUser } from "react-icons/fi";
import { CiSettings } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { Access, BlogsIcon, CategoryIcon, Chat, Communication, Dashboard, Document, DraftsIcon, Event, HomeIcon, Phone, Pointer, Project, PublishedIcon, Question, Settings, SiteIcon, Support, Ticket, User } from "../icon";

const service = [
  { id: 1, name: "PERSONAL CYBER SECURITY (PCS)", value: "pcs" },
  { id: 1, name: "BUSINESS CYBER SECURITY (BCS)", value: "bcs" },
]
const defaultPagination = { page: 1, page_size: 10 };
const questionType = [
  { id: 1, name: "Plain_Text", value: "Plain_Text" },
  { id: 2, name: "Yes/No", value: "Yes/No" },
  { id: 3, name: "Multiple_choice", value: "Multiple_choice" }
]
const selectGender = [
  { id: 1, name: "Select gender", value: "" },
  { id: 2, name: "Male", value: "Male" },
  { id: 3, name: "Female", value: "Female" },
  { id: 4, name: "Other", value: "Other" }
]
const priorityList = [
  { id: 1, name: "Select priority", value: "" },
  { id: 2, name: "Low", value: "low" },
  { id: 3, name: "Medium", value: "medium" },
  { id: 4, name: "High", value: "high" },
]
const paymentChannel = [
  { id: 1, name: "Select a payment method", value: "" },
  { id: 2, name: "Paypal", value: "paypal" },
  { id: 3, name: "Bank Check", value: "bank_check" },
  { id: 4, name: "Card", value: "card" },
  { id: 5, name: "Cash", value: "cash" },
  { id: 6, name: "Wire Transfer", value: "wire_transfer" },
]
const orderStatus = [
  { id: 1, name: "Select status", value: "" },
  { id: 2, name: "New", value: "new" },
  { id: 3, name: "Approved", value: "approved" },
  { id: 4, name: "Assigned", value: "assigned" },
  { id: 5, name: "On Progress", value: "on_progress" },
  { id: 6, name: "Report Submitted", value: "report_submitted" },
  { id: 7, name: "Completed", value: "completed" },
  { id: 8, name: "Cancelled", value: "cancelled" },
  { id: 9, name: "Re Open", value: "re_open" },
]
const userProfileList = [
  {
    id: 1,
    name: "my profile",
    link: "/user/myProfile",
    icon: <FiUser />
  },
  {
    id: 2,
    name: "reset password",
    link: "/account/reset_password",
    icon: <CiSettings />
  },
  {
    id: 2,
    name: "logout",
    link: "/login",
    icon: <CiLogout />
  },
]
const adminProfileList = [
  {
    id: 1,
    name: "my profile",
    link: "/admin/myProfile",
    icon: <FiUser />
  },
  {
    id: 2,
    name: "reset password",
    link: "/account/reset_password",
    icon: <CiSettings />
  },
  {
    id: 2,
    name: "logout",
    link: "/login",
    icon: <CiLogout />
  },
]
const userSideBar = [
  {
    name: "Dashboard",
    link: "/user/dashboard",
    icon: <Dashboard />,
    subItems: []
  },
  {
    name: "My Projects",
    link: "/user/myProjects",
    icon: <Project />,
    subItems: []
  },
  {
    name: "Important Documents",
    link: "/user/importantDocuments",
    icon: <Document />,
    subItems: []
  },
  {
    name: "Events & Webinars",
    link: "/user/eventsWebinars",
    icon: <Event />,
    subItems: []
  },
  {
    name: "Support",
    link: "/user/support",
    icon: <Support />,
    subItems: []
  },
]

const adminSideBar = [
  {
    name: "Dashboard",
    link: "/admin/dashboard",
    icon: <Dashboard />,
    subItems: []
  },
  {
    name: "Projects",
    link: "/admin/projects",
    icon: <Document />,
    subItems: []
  },
  {
    name: "Clients",
    link: "/admin/clients",
    icon: <User />,
    subItems: []
  },
  {
    name: "Subscription",
    link: "/admin/subscription",
    icon: <Pointer />,
    subItems: []
  },
  {
    name: "Communication",
    link: "/admin/communication",
    icon: <Communication />,
    subItems: []
  },
  {
    name: "Events & Webinars",
    link: "/admin/eventsWebinars",
    icon: <Event />,
    subItems: []
  },
  {
    name: "Access & Security",
    link: "/admin/accessSecurity",
    icon: <Access />,
    subItems: []
  },
  {
    name: "Question Bank",
    link: "/admin/questionBank",
    icon: <Question />,
    subItems: []
  },
  {
    name: "Support",
    link: "/admin/support",
    icon: <Support />,
    subItems: []
  },
  {
    name: "Settings",
    link: "/admin/settings",
    icon: <Settings />,
    subItems: []
  },
]

const blogDashboardSideBar = [
  {
    name: "Dashboard",
    link: "/blog/dashboard",
    icon: <HomeIcon className="text-green text-2xl" />,
    subItems: []
  },
  {
    name: "Site Management",
    link: "/blog/siteManagement",
    icon: <SiteIcon />,
    subItems: []
  },
  {
    name: "Blogs",
    link: "/blog/blogs",
    icon: <BlogsIcon />,
    subItems: []
  },
  {
    name: "Category",
    link: "/blog/category",
    icon: <CategoryIcon />,
    subItems: []
  },
  {
    name: "Published",
    link: "/blog/published",
    icon: <PublishedIcon />,
    subItems: []
  },
  {
    name: "drafts",
    link: "/blog/drafts",
    icon: <DraftsIcon />,
    subItems: []
  },

]

const settingCard = [
  {
    id: 1,
    name: "Category/Service",
    redirectURL: "categoryService",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="65" height="64" viewBox="0 0 65 64" fill="none">
      <g clipPath="url(#clip0_1084_4990)">
        <path d="M54.5 44.2828V36C54.5 34.9391 54.0786 33.9217 53.3285 33.1716C52.5783 32.4214 51.5609 32 50.5 32H34.5V24H38.5C39.5605 23.9988 40.5772 23.577 41.3271 22.8271C42.077 22.0772 42.4988 21.0605 42.5 20V8C42.4988 6.93951 42.077 5.9228 41.3271 5.17292C40.5772 4.42304 39.5605 4.00122 38.5 4H26.5C25.4395 4.00106 24.4227 4.42283 23.6728 5.17274C22.9228 5.92266 22.5011 6.93946 22.5 8V20C22.5011 21.0605 22.9228 22.0773 23.6728 22.8273C24.4227 23.5772 25.4395 23.9989 26.5 24H30.5V32H14.5C13.4392 32 12.4217 32.4214 11.6716 33.1716C10.9214 33.9217 10.5 34.9391 10.5 36V44.2842C8.6147 44.771 6.97164 45.9287 5.87882 47.5402C4.78599 49.1518 4.31843 51.1066 4.56378 53.0382C4.80913 54.9698 5.75054 56.7457 7.21155 58.0328C8.67257 59.32 10.5529 60.0302 12.5 60.0302C14.4472 60.0302 16.3275 59.32 17.7885 58.0328C19.2495 56.7457 20.1909 54.9698 20.4363 53.0382C20.6816 51.1066 20.2141 49.1518 19.1212 47.5402C18.0284 45.9287 16.3853 44.771 14.5 44.2842V36H30.5V44.284C28.6147 44.7708 26.9716 45.9285 25.8788 47.54C24.786 49.1516 24.3184 51.1064 24.5638 53.038C24.8091 54.9696 25.7505 56.7455 27.2116 58.0326C28.6726 59.3198 30.5529 60.03 32.5 60.03C34.4472 60.03 36.3275 59.3198 37.7885 58.0326C39.2495 56.7455 40.1909 54.9696 40.4363 53.038C40.6816 51.1064 40.2141 49.1516 39.1212 47.54C38.0284 45.9285 36.3853 44.7708 34.5 44.284V36H50.5V44.2828C48.6147 44.7696 46.9716 45.9273 45.8788 47.5388C44.786 49.1504 44.3184 51.1052 44.5638 53.0368C44.8091 54.9684 45.7505 56.7443 47.2116 58.0314C48.6726 59.3186 50.5529 60.0288 52.5 60.0288C54.4472 60.0288 56.3275 59.3186 57.7885 58.0314C59.2495 56.7443 60.1909 54.9684 60.4363 53.0368C60.6816 51.1052 60.2141 49.1504 59.1212 47.5388C58.0284 45.9273 56.3853 44.7696 54.5 44.2828ZM26.5 8H38.5L38.502 20H26.5V8ZM16.5 52C16.5 52.7911 16.2654 53.5645 15.8259 54.2223C15.3864 54.8801 14.7617 55.3928 14.0308 55.6955C13.2998 55.9983 12.4956 56.0775 11.7197 55.9231C10.9437 55.7688 10.231 55.3878 9.67159 54.8284C9.11218 54.269 8.73122 53.5563 8.57688 52.7804C8.42254 52.0044 8.50175 51.2002 8.8045 50.4693C9.10725 49.7384 9.61994 49.1136 10.2777 48.6741C10.9355 48.2346 11.7089 48 12.5 48C13.5605 48.0012 14.5772 48.423 15.3271 49.1729C16.077 49.9228 16.4988 50.9395 16.5 52ZM36.5 52C36.5 52.7911 36.2654 53.5645 35.8259 54.2223C35.3864 54.8801 34.7617 55.3928 34.0308 55.6955C33.2999 55.9983 32.4956 56.0775 31.7197 55.9231C30.9437 55.7688 30.231 55.3878 29.6716 54.8284C29.1122 54.269 28.7312 53.5563 28.5769 52.7804C28.4225 52.0044 28.5018 51.2002 28.8045 50.4693C29.1073 49.7384 29.6199 49.1136 30.2777 48.6741C30.9355 48.2346 31.7089 48 32.5 48C33.5604 48.0014 34.577 48.4233 35.3269 49.1731C36.0767 49.923 36.4986 50.9396 36.5 52ZM52.5 56C51.7089 56 50.9355 55.7654 50.2777 55.3259C49.6199 54.8864 49.1073 54.2616 48.8045 53.5307C48.5018 52.7998 48.4225 51.9956 48.5769 51.2196C48.7312 50.4437 49.1122 49.731 49.6716 49.1716C50.231 48.6122 50.9437 48.2312 51.7197 48.0769C52.4956 47.9225 53.2999 48.0017 54.0308 48.3045C54.7617 48.6072 55.3864 49.1199 55.8259 49.7777C56.2654 50.4355 56.5 51.2089 56.5 52C56.4988 53.0605 56.077 54.0772 55.3271 54.8271C54.5772 55.577 53.5605 55.9988 52.5 56Z" fill="white"></path>
      </g>
      <defs>
        <clipPath id="clip0_1084_4990">
          <rect width="64" height="64" fill="white" transform="translate(0.5)"></rect>
        </clipPath>
      </defs>
    </svg>
  },
  {
    id: 2,
    name: "Communication Setting",
    redirectURL: "communication",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 576 512" fill="#FFFFFF">
      <path d="M512 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H512zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM208 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H304c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H176zM376 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376z"></path>
    </svg>
  }
]
const countries = [
  { code: 'AD', label: 'Andorra', phone: '376' },
  {
    code: 'AE',
    label: 'United Arab Emirates',
    phone: '971',
  },
  { code: 'AF', label: 'Afghanistan', phone: '93' },
  {
    code: 'AG',
    label: 'Antigua and Barbuda',
    phone: '1-268',
  },
  { code: 'AI', label: 'Anguilla', phone: '1-264' },
  { code: 'AL', label: 'Albania', phone: '355' },
  { code: 'AM', label: 'Armenia', phone: '374' },
  { code: 'AO', label: 'Angola', phone: '244' },
  { code: 'AQ', label: 'Antarctica', phone: '672' },
  { code: 'AR', label: 'Argentina', phone: '54' },
  { code: 'AS', label: 'American Samoa', phone: '1-684' },
  { code: 'AT', label: 'Austria', phone: '43' },
  {
    code: 'AU',
    label: 'Australia',
    phone: '61',
    suggested: true,
  },
  { code: 'AW', label: 'Aruba', phone: '297' },
  { code: 'AX', label: 'Alland Islands', phone: '358' },
  { code: 'AZ', label: 'Azerbaijan', phone: '994' },
  {
    code: 'BA',
    label: 'Bosnia and Herzegovina',
    phone: '387',
  },
  { code: 'BB', label: 'Barbados', phone: '1-246' },
  { code: 'BD', label: 'Bangladesh', phone: '880' },
  { code: 'BE', label: 'Belgium', phone: '32' },
  { code: 'BF', label: 'Burkina Faso', phone: '226' },
  { code: 'BG', label: 'Bulgaria', phone: '359' },
  { code: 'BH', label: 'Bahrain', phone: '973' },
  { code: 'BI', label: 'Burundi', phone: '257' },
  { code: 'BJ', label: 'Benin', phone: '229' },
  { code: 'BL', label: 'Saint Barthelemy', phone: '590' },
  { code: 'BM', label: 'Bermuda', phone: '1-441' },
  { code: 'BN', label: 'Brunei Darussalam', phone: '673' },
  { code: 'BO', label: 'Bolivia', phone: '591' },
  { code: 'BR', label: 'Brazil', phone: '55' },
  { code: 'BS', label: 'Bahamas', phone: '1-242' },
  { code: 'BT', label: 'Bhutan', phone: '975' },
  { code: 'BV', label: 'Bouvet Island', phone: '47' },
  { code: 'BW', label: 'Botswana', phone: '267' },
  { code: 'BY', label: 'Belarus', phone: '375' },
  { code: 'BZ', label: 'Belize', phone: '501' },
  {
    code: 'CA',
    label: 'Canada',
    phone: '1',
    suggested: true,
  },
  {
    code: 'CC',
    label: 'Cocos (Keeling) Islands',
    phone: '61',
  },
  {
    code: 'CD',
    label: 'Congo, Democratic Republic of the',
    phone: '243',
  },
  {
    code: 'CF',
    label: 'Central African Republic',
    phone: '236',
  },
  {
    code: 'CG',
    label: 'Congo, Republic of the',
    phone: '242',
  },
  { code: 'CH', label: 'Switzerland', phone: '41' },
  { code: 'CI', label: "Cote d'Ivoire", phone: '225' },
  { code: 'CK', label: 'Cook Islands', phone: '682' },
  { code: 'CL', label: 'Chile', phone: '56' },
  { code: 'CM', label: 'Cameroon', phone: '237' },
  { code: 'CN', label: 'China', phone: '86' },
  { code: 'CO', label: 'Colombia', phone: '57' },
  { code: 'CR', label: 'Costa Rica', phone: '506' },
  { code: 'CU', label: 'Cuba', phone: '53' },
  { code: 'CV', label: 'Cape Verde', phone: '238' },
  { code: 'CW', label: 'Curacao', phone: '599' },
  { code: 'CX', label: 'Christmas Island', phone: '61' },
  { code: 'CY', label: 'Cyprus', phone: '357' },
  { code: 'CZ', label: 'Czech Republic', phone: '420' },
  {
    code: 'DE',
    label: 'Germany',
    phone: '49',
    suggested: true,
  },
  { code: 'DJ', label: 'Djibouti', phone: '253' },
  { code: 'DK', label: 'Denmark', phone: '45' },
  { code: 'DM', label: 'Dominica', phone: '1-767' },
  {
    code: 'DO',
    label: 'Dominican Republic',
    phone: '1-809',
  },
  { code: 'DZ', label: 'Algeria', phone: '213' },
  { code: 'EC', label: 'Ecuador', phone: '593' },
  { code: 'EE', label: 'Estonia', phone: '372' },
  { code: 'EG', label: 'Egypt', phone: '20' },
  { code: 'EH', label: 'Western Sahara', phone: '212' },
  { code: 'ER', label: 'Eritrea', phone: '291' },
  { code: 'ES', label: 'Spain', phone: '34' },
  { code: 'ET', label: 'Ethiopia', phone: '251' },
  { code: 'FI', label: 'Finland', phone: '358' },
  { code: 'FJ', label: 'Fiji', phone: '679' },
  {
    code: 'FK',
    label: 'Falkland Islands (Malvinas)',
    phone: '500',
  },
  {
    code: 'FM',
    label: 'Micronesia, Federated States of',
    phone: '691',
  },
  { code: 'FO', label: 'Faroe Islands', phone: '298' },
  {
    code: 'FR',
    label: 'France',
    phone: '33',
    suggested: true,
  },
  { code: 'GA', label: 'Gabon', phone: '241' },
  { code: 'GB', label: 'United Kingdom', phone: '44' },
  { code: 'GD', label: 'Grenada', phone: '1-473' },
  { code: 'GE', label: 'Georgia', phone: '995' },
  { code: 'GF', label: 'French Guiana', phone: '594' },
  { code: 'GG', label: 'Guernsey', phone: '44' },
  { code: 'GH', label: 'Ghana', phone: '233' },
  { code: 'GI', label: 'Gibraltar', phone: '350' },
  { code: 'GL', label: 'Greenland', phone: '299' },
  { code: 'GM', label: 'Gambia', phone: '220' },
  { code: 'GN', label: 'Guinea', phone: '224' },
  { code: 'GP', label: 'Guadeloupe', phone: '590' },
  { code: 'GQ', label: 'Equatorial Guinea', phone: '240' },
  { code: 'GR', label: 'Greece', phone: '30' },
  {
    code: 'GS',
    label: 'South Georgia and the South Sandwich Islands',
    phone: '500',
  },
  { code: 'GT', label: 'Guatemala', phone: '502' },
  { code: 'GU', label: 'Guam', phone: '1-671' },
  { code: 'GW', label: 'Guinea-Bissau', phone: '245' },
  { code: 'GY', label: 'Guyana', phone: '592' },
  { code: 'HK', label: 'Hong Kong', phone: '852' },
  {
    code: 'HM',
    label: 'Heard Island and McDonald Islands',
    phone: '672',
  },
  { code: 'HN', label: 'Honduras', phone: '504' },
  { code: 'HR', label: 'Croatia', phone: '385' },
  { code: 'HT', label: 'Haiti', phone: '509' },
  { code: 'HU', label: 'Hungary', phone: '36' },
  { code: 'ID', label: 'Indonesia', phone: '62' },
  { code: 'IE', label: 'Ireland', phone: '353' },
  { code: 'IL', label: 'Israel', phone: '972' },
  { code: 'IM', label: 'Isle of Man', phone: '44' },
  { code: 'IN', label: 'India', phone: '91' },
  {
    code: 'IO',
    label: 'British Indian Ocean Territory',
    phone: '246',
  },
  { code: 'IQ', label: 'Iraq', phone: '964' },
  {
    code: 'IR',
    label: 'Iran, Islamic Republic of',
    phone: '98',
  },
  { code: 'IS', label: 'Iceland', phone: '354' },
  { code: 'IT', label: 'Italy', phone: '39' },
  { code: 'JE', label: 'Jersey', phone: '44' },
  { code: 'JM', label: 'Jamaica', phone: '1-876' },
  { code: 'JO', label: 'Jordan', phone: '962' },
  {
    code: 'JP',
    label: 'Japan',
    phone: '81',
    suggested: true,
  },
  { code: 'KE', label: 'Kenya', phone: '254' },
  { code: 'KG', label: 'Kyrgyzstan', phone: '996' },
  { code: 'KH', label: 'Cambodia', phone: '855' },
  { code: 'KI', label: 'Kiribati', phone: '686' },
  { code: 'KM', label: 'Comoros', phone: '269' },
  {
    code: 'KN',
    label: 'Saint Kitts and Nevis',
    phone: '1-869',
  },
  {
    code: 'KP',
    label: "Korea, Democratic People's Republic of",
    phone: '850',
  },
  { code: 'KR', label: 'Korea, Republic of', phone: '82' },
  { code: 'KW', label: 'Kuwait', phone: '965' },
  { code: 'KY', label: 'Cayman Islands', phone: '1-345' },
  { code: 'KZ', label: 'Kazakhstan', phone: '7' },
  {
    code: 'LA',
    label: "Lao People's Democratic Republic",
    phone: '856',
  },
  { code: 'LB', label: 'Lebanon', phone: '961' },
  { code: 'LC', label: 'Saint Lucia', phone: '1-758' },
  { code: 'LI', label: 'Liechtenstein', phone: '423' },
  { code: 'LK', label: 'Sri Lanka', phone: '94' },
  { code: 'LR', label: 'Liberia', phone: '231' },
  { code: 'LS', label: 'Lesotho', phone: '266' },
  { code: 'LT', label: 'Lithuania', phone: '370' },
  { code: 'LU', label: 'Luxembourg', phone: '352' },
  { code: 'LV', label: 'Latvia', phone: '371' },
  { code: 'LY', label: 'Libya', phone: '218' },
  { code: 'MA', label: 'Morocco', phone: '212' },
  { code: 'MC', label: 'Monaco', phone: '377' },
  {
    code: 'MD',
    label: 'Moldova, Republic of',
    phone: '373',
  },
  { code: 'ME', label: 'Montenegro', phone: '382' },
  {
    code: 'MF',
    label: 'Saint Martin (French part)',
    phone: '590',
  },
  { code: 'MG', label: 'Madagascar', phone: '261' },
  { code: 'MH', label: 'Marshall Islands', phone: '692' },
  {
    code: 'MK',
    label: 'Macedonia, the Former Yugoslav Republic of',
    phone: '389',
  },
  { code: 'ML', label: 'Mali', phone: '223' },
  { code: 'MM', label: 'Myanmar', phone: '95' },
  { code: 'MN', label: 'Mongolia', phone: '976' },
  { code: 'MO', label: 'Macao', phone: '853' },
  {
    code: 'MP',
    label: 'Northern Mariana Islands',
    phone: '1-670',
  },
  { code: 'MQ', label: 'Martinique', phone: '596' },
  { code: 'MR', label: 'Mauritania', phone: '222' },
  { code: 'MS', label: 'Montserrat', phone: '1-664' },
  { code: 'MT', label: 'Malta', phone: '356' },
  { code: 'MU', label: 'Mauritius', phone: '230' },
  { code: 'MV', label: 'Maldives', phone: '960' },
  { code: 'MW', label: 'Malawi', phone: '265' },
  { code: 'MX', label: 'Mexico', phone: '52' },
  { code: 'MY', label: 'Malaysia', phone: '60' },
  { code: 'MZ', label: 'Mozambique', phone: '258' },
  { code: 'NA', label: 'Namibia', phone: '264' },
  { code: 'NC', label: 'New Caledonia', phone: '687' },
  { code: 'NE', label: 'Niger', phone: '227' },
  { code: 'NF', label: 'Norfolk Island', phone: '672' },
  { code: 'NG', label: 'Nigeria', phone: '234' },
  { code: 'NI', label: 'Nicaragua', phone: '505' },
  { code: 'NL', label: 'Netherlands', phone: '31' },
  { code: 'NO', label: 'Norway', phone: '47' },
  { code: 'NP', label: 'Nepal', phone: '977' },
  { code: 'NR', label: 'Nauru', phone: '674' },
  { code: 'NU', label: 'Niue', phone: '683' },
  { code: 'NZ', label: 'New Zealand', phone: '64' },
  { code: 'OM', label: 'Oman', phone: '968' },
  { code: 'PA', label: 'Panama', phone: '507' },
  { code: 'PE', label: 'Peru', phone: '51' },
  { code: 'PF', label: 'French Polynesia', phone: '689' },
  { code: 'PG', label: 'Papua New Guinea', phone: '675' },
  { code: 'PH', label: 'Philippines', phone: '63' },
  { code: 'PK', label: 'Pakistan', phone: '92' },
  { code: 'PL', label: 'Poland', phone: '48' },
  {
    code: 'PM',
    label: 'Saint Pierre and Miquelon',
    phone: '508',
  },
  { code: 'PN', label: 'Pitcairn', phone: '870' },
  { code: 'PR', label: 'Puerto Rico', phone: '1' },
  {
    code: 'PS',
    label: 'Palestine, State of',
    phone: '970',
  },
  { code: 'PT', label: 'Portugal', phone: '351' },
  { code: 'PW', label: 'Palau', phone: '680' },
  { code: 'PY', label: 'Paraguay', phone: '595' },
  { code: 'QA', label: 'Qatar', phone: '974' },
  { code: 'RE', label: 'Reunion', phone: '262' },
  { code: 'RO', label: 'Romania', phone: '40' },
  { code: 'RS', label: 'Serbia', phone: '381' },
  { code: 'RU', label: 'Russian Federation', phone: '7' },
  { code: 'RW', label: 'Rwanda', phone: '250' },
  { code: 'SA', label: 'Saudi Arabia', phone: '966' },
  { code: 'SB', label: 'Solomon Islands', phone: '677' },
  { code: 'SC', label: 'Seychelles', phone: '248' },
  { code: 'SD', label: 'Sudan', phone: '249' },
  { code: 'SE', label: 'Sweden', phone: '46' },
  { code: 'SG', label: 'Singapore', phone: '65' },
  { code: 'SH', label: 'Saint Helena', phone: '290' },
  { code: 'SI', label: 'Slovenia', phone: '386' },
  {
    code: 'SJ',
    label: 'Svalbard and Jan Mayen',
    phone: '47',
  },
  { code: 'SK', label: 'Slovakia', phone: '421' },
  { code: 'SL', label: 'Sierra Leone', phone: '232' },
  { code: 'SM', label: 'San Marino', phone: '378' },
  { code: 'SN', label: 'Senegal', phone: '221' },
  { code: 'SO', label: 'Somalia', phone: '252' },
  { code: 'SR', label: 'Suriname', phone: '597' },
  { code: 'SS', label: 'South Sudan', phone: '211' },
  {
    code: 'ST',
    label: 'Sao Tome and Principe',
    phone: '239',
  },
  { code: 'SV', label: 'El Salvador', phone: '503' },
  {
    code: 'SX',
    label: 'Sint Maarten (Dutch part)',
    phone: '1-721',
  },
  {
    code: 'SY',
    label: 'Syrian Arab Republic',
    phone: '963',
  },
  { code: 'SZ', label: 'Swaziland', phone: '268' },
  {
    code: 'TC',
    label: 'Turks and Caicos Islands',
    phone: '1-649',
  },
  { code: 'TD', label: 'Chad', phone: '235' },
  {
    code: 'TF',
    label: 'French Southern Territories',
    phone: '262',
  },
  { code: 'TG', label: 'Togo', phone: '228' },
  { code: 'TH', label: 'Thailand', phone: '66' },
  { code: 'TJ', label: 'Tajikistan', phone: '992' },
  { code: 'TK', label: 'Tokelau', phone: '690' },
  { code: 'TL', label: 'Timor-Leste', phone: '670' },
  { code: 'TM', label: 'Turkmenistan', phone: '993' },
  { code: 'TN', label: 'Tunisia', phone: '216' },
  { code: 'TO', label: 'Tonga', phone: '676' },
  { code: 'TR', label: 'Turkey', phone: '90' },
  {
    code: 'TT',
    label: 'Trinidad and Tobago',
    phone: '1-868',
  },
  { code: 'TV', label: 'Tuvalu', phone: '688' },
  {
    code: 'TW',
    label: 'Taiwan',
    phone: '886',
  },
  {
    code: 'TZ',
    label: 'United Republic of Tanzania',
    phone: '255',
  },
  { code: 'UA', label: 'Ukraine', phone: '380' },
  { code: 'UG', label: 'Uganda', phone: '256' },
  {
    code: 'US',
    label: 'United States',
    phone: '1',
    suggested: true,
  },
  { code: 'UY', label: 'Uruguay', phone: '598' },
  { code: 'UZ', label: 'Uzbekistan', phone: '998' },
  {
    code: 'VA',
    label: 'Holy See (Vatican City State)',
    phone: '379',
  },
  {
    code: 'VC',
    label: 'Saint Vincent and the Grenadines',
    phone: '1-784',
  },
  { code: 'VE', label: 'Venezuela', phone: '58' },
  {
    code: 'VG',
    label: 'British Virgin Islands',
    phone: '1-284',
  },
  {
    code: 'VI',
    label: 'US Virgin Islands',
    phone: '1-340',
  },
  { code: 'VN', label: 'Vietnam', phone: '84' },
  { code: 'VU', label: 'Vanuatu', phone: '678' },
  { code: 'WF', label: 'Wallis and Futuna', phone: '681' },
  { code: 'WS', label: 'Samoa', phone: '685' },
  { code: 'XK', label: 'Kosovo', phone: '383' },
  { code: 'YE', label: 'Yemen', phone: '967' },
  { code: 'YT', label: 'Mayotte', phone: '262' },
  { code: 'ZA', label: 'South Africa', phone: '27' },
  { code: 'ZM', label: 'Zambia', phone: '260' },
  { code: 'ZW', label: 'Zimbabwe', phone: '263' },
];
const automationRulesReasons = [
  { id: 1, name: "Add New Service", value: "add_new_service" },
  { id: 2, name: "Project status", value: "progress_status" },
  { id: 3, name: "Additional Comment", value: "additional_comment" },
  { id: 4, name: "Forget Password", value: "forget_pass" }
];
const projectStatus = [
  { id: 1, name: "New", value: "new" },
  { id: 2, name: "Approved", value: "approved" },
  { id: 3, name: "Assigned", value: "assigned" },
  { id: 4, name: "On Progress", value: "on_progress" },
  { id: 5, name: "Report Submitted", value: "report_submitted" },
  { id: 6, name: "Completed", value: "completed" },
  { id: 7, name: "Cancelled", value: "cancelled" },
  { id: 8, name: "Re Open", value: "re_open" }
];
const paymentStatus = [
  { id: 1, name: "Partial", value: "partial" },
  { id: 2, name: "Paid", value: "paid" },
  { id: 3, name: "Unpaid", value: "unpaid" }
];
const projectPriorities = [
  { id: 1, name: "Low", value: "low" },
  { id: 2, name: "Medium", value: "medium" },
  { id: 3, name: "High", value: "high" }
];
const effectiveDays = [
  { id: 1, name: "Immediate", value: "immediate" },
  { id: 2, name: "After 1 Day", value: "1" },
  { id: 3, name: "After 2 Days", value: "2" },
  { id: 4, name: "After 3 Days", value: "3" },
  { id: 5, name: "After 4 Days", value: "4" },
  { id: 6, name: "After 5 Days", value: "5" },
  { id: 7, name: "After 6 Days", value: "6" },
  { id: 8, name: "After 7 Days", value: "7" },
  { id: 9, name: "After 8 Days", value: "8" },
  { id: 10, name: "After 9 Days", value: "9" },
  { id: 11, name: "After 10 Days", value: "10" },
  { id: 12, name: "After 11 Days", value: "11" },
  { id: 13, name: "After 12 Days", value: "12" },
  { id: 14, name: "After 13 Days", value: "13" },
  { id: 15, name: "After 14 Days", value: "14" },
  { id: 16, name: "After 15 Days", value: "15" },
  { id: 17, name: "After 16 Days", value: "16" },
  { id: 18, name: "After 17 Days", value: "17" },
  { id: 19, name: "After 18 Days", value: "18" },
  { id: 20, name: "After 19 Days", value: "19" },
  { id: 21, name: "After 20 Days", value: "20" },
  { id: 22, name: "After 21 Days", value: "21" },
  { id: 23, name: "After 22 Days", value: "22" },
  { id: 24, name: "After 23 Days", value: "23" },
  { id: 25, name: "After 24 Days", value: "24" },
  { id: 26, name: "After 25 Days", value: "25" },
  { id: 27, name: "After 26 Days", value: "26" },
  { id: 28, name: "After 27 Days", value: "27" },
  { id: 29, name: "After 28 Days", value: "28" },
  { id: 30, name: "After 29 Days", value: "29" },
  { id: 31, name: "After 30 Days", value: "30" }
];
const communicationMediaOptions = [
  { id: 1, name: "Both", value: "both" },
  { id: 2, name: "Email", value: "email" },
  { id: 3, name: "SMS", value: "sms" },

];
const userSupportList = [
  {
    id: 1,
    name: "ticket",
    title: "SUPPORT VIA TICKET(s)",
    link: "/user/support/tickets",
    icon: <Ticket className='text-2xl' />,
    btnName: 'Go To My Ticket'
  },
  {
    id: 2,
    name: "phone_call",
    title: "SUPPORT VIA CALL",
    link: "#",
    icon: <Phone />,
    btnName: 'Make A Call'
  },
  {
    id: 3,
    name: "live_chat",
    title: "SUPPORT VIA CHAT",
    link: "#",
    icon: <Chat className='text-2xl' />,
    btnName: 'Open Chat'

  }
]
const adminSupportList = [
  {
    id: 1,
    title: "SUPPORT VIA TICKET(s)",
    link: "tickets",
    icon: <Ticket className='text-2xl' />,
    btnName: 'Go To Tickets'
  },
  {
    id: 2,
    title: "SUPPORT VIA CALL",
    link: "#",
    icon: <Phone />,
    btnName: 'Make A Call'
  },
  {
    id: 3,
    title: "SUPPORT VIA CHAT",
    link: "chat",
    icon: <Chat className='text-2xl' />,
    btnName: 'Open Chat'

  }
]

export {
  adminProfileList,
  adminSideBar,
  countries,
  orderStatus,
  paymentChannel,
  priorityList,
  defaultPagination,
  questionType,
  settingCard,
  service,
  selectGender,
  userProfileList,
  userSideBar,
  automationRulesReasons,
  projectStatus,
  paymentStatus,
  projectPriorities,
  effectiveDays,
  communicationMediaOptions,
  blogDashboardSideBar,
  userSupportList,
  adminSupportList
}