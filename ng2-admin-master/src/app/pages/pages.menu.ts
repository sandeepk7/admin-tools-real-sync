export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'general.menu.dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'admin',
        data: {
          menu: {
            title: 'general.menu.admin',
            icon: 'fa fa-lock',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'client',
            data: {
              menu: {
                title: 'general.menu.client',
                icon: 'fa fa-users'
              }
            }
          }
        ]
      },
      {
        path: 'roles',
        data: {
          menu: {
            title: 'general.menu.roles',
            icon: 'ion-gear-a',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },      
      {
        path: 'users',
        data: {
          menu: {
            title: 'general.menu.users',
            icon: 'ion-gear-a',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      }
    ]
  }
];
