const adminDashboard = [{ name: 'Dashboard', path: '' }];

const adminProjects = [{ name: 'Projects', path: '' }];
const adminAddProject = [{ name: 'Projects', path: '/admin/projects' }, { name: 'Add Project', path: '' }];

const adminClients = [{ name: 'Clients', path: '' }];
const adminClientList = [{ name: 'Clients', path: '/admin/clients' }, { name: 'Client List', path: '' }];
const adminClientDetails = [
  { name: 'Clients', path: '/admin/clients' },
  { name: 'Client List', path: '/admin/clients/clientList' },
  { name: 'Client Details', path: '' }
];
const adminInviteClient = [
  { name: 'Clients', path: '/admin/clients' },
  { name: 'Client List', path: '/admin/clients/clientList' },
  { name: 'Invite Client', path: '' }
];

const adminSubscription = [{ name: 'Subscription', path: '' }];

//communication module
const adminCommunication = [{ name: 'Communication', path: '' }];
const adminSendEmailSms = [
  { name: 'Communication', path: '/admin/communication' },
  { name: 'Send Email/SMS', path: '' }
];
const adminAllTemplates = [
  { name: 'Communication', path: '/admin/communication' },
  { name: 'Templates', path: '' }
];
const adminCreateTemplate = [
  { name: 'Communication', path: '/admin/communication' },
  { name: 'Templates', path: '/admin/communication/allTemplate' },
  { name: 'Create', path: '' }
];
const adminAutomationRules = [
  { name: 'Communication', path: '/admin/communication' },
  { name: 'Automation Rules', path: '' }
];
const adminPreDefineProjectStatus = [
  { name: 'Communication', path: '/admin/communication' },
  { name: 'Pre-Define Status', path: '' }
];
const adminEmailSmsReport = (type) => [
  { name: 'Communication', path: '/admin/communication' },
  { name: `${type} Report`, path: '' }
];
const adminClientAwareness = [
  { name: 'Communication', path: '/admin/communication' },
  { name: 'Client Awareness', path: '' }
];

const adminEventsWebinars = [{ name: 'Events & Webinars', path: '' }];

const adminAccessSecurity = [{ name: 'Access & Security', path: '' }];

const adminQuestionBank = [{ name: 'Question Bank', path: '' }];

const adminSupport = [{ name: 'Support', path: '' }];
const adminSecond = (name) => [
  { name: 'Support', path: '/admin/support' },
  { name: name, path: '' }
];

const adminSupportChat = (id) => [
  { name: 'Support', path: '/admin/support' },
  { name: 'Chat', path: '/admin/support/chat' },
  { name: `Project/ID: ${id}`, path: '' }
];

const adminEmailSmsConfiguration = (type) => [
  { name: 'Settings', path: '/admin/settings' },
  { name: `${type} Configuration`, path: '' }
];
const adminEmailSmsConfigurationCreate = [
  { name: 'Settings', path: '/admin/settings' },
  { name: 'Email/SMS Configuration', path: '/admin/settings/communication' },
  { name: 'Create', path: '' }
];

const adminSettings = [{ name: 'Settings', path: '' }];

export {
  //dashboard module
  adminDashboard,

  //project module
  adminProjects,
  adminAddProject,

  //client module
  adminClients,
  adminClientList,
  adminClientDetails,
  adminInviteClient,

  //subscription module
  adminSubscription,

  //communication module
  adminCommunication,
  adminSendEmailSms,
  adminAllTemplates,
  adminCreateTemplate,
  adminAutomationRules,
  adminPreDefineProjectStatus,
  adminEmailSmsReport,
  adminClientAwareness,

  //events and webinars module
  adminEventsWebinars,

  //access and security module
  adminAccessSecurity,

  //question bank module
  adminQuestionBank,

  //support module
  adminSupport,
  adminSecond,
  adminSupportChat,

  //settings module
  adminSettings,
  adminEmailSmsConfiguration,
  adminEmailSmsConfigurationCreate,
}