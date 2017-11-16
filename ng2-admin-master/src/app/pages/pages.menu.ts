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
