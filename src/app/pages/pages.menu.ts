export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'administration',
        data: {
          menu: {
            title: 'Administration',
            icon: 'ion-android-settings', // menu icon
            selected: false,
            expanded: false,
            order: 0
          }
        },
        children: [
          {
            path: 'configuration',
            data: {
              menu: {
                title: 'Configuration',
                icon: 'ion-android-options'
              }
            }
          },
          {
            path: 'plan',
            data: {
              menu: {
                title: 'Plan Conf.',
                icon: 'ion-grid'                
              }
            }
          }
        ]
      },
      // {
      //   path: '',
      //   data: {
      //     menu: {
      //       title: 'Pages',
      //       icon: 'ion-document',
      //       selected: false,
      //       expanded: false,
      //       order: 650,
      //     }
      //   },
      //   children: [
      //     {
      //       path: ['/login'],
      //       data: {
      //         menu: {
      //           title: 'Login'
      //         }
      //       }
      //     },
      //     {
      //       path: ['/register'],
      //       data: {
      //         menu: {
      //           title: 'Register'
      //         }
      //       }
      //     }
      //   ]
      // }
    ]
  }
];
