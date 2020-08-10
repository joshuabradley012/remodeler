export default {
  navLinks: [
    {
      name: 'Projects',
      path: '/projects',
    },
    {
      name: 'Jobs',
      path: '/jobs',
    },
    {
      name: 'Status',
      path: '/status',
    },
  ],
  subNavLinks: [
    {
      name: 'Projects',
      path: '/projects',
    },
    {
      name: 'Jobs',
      path: '/jobs',
    },
    {
      name: 'Status',
      path: '/status',
    },
  ],
  projectActions: [
    {
      id: 'decision-list',
      name: 'Decision list',
    },
    {
      id: 'social-saves',
      name: 'Social saves',
    },
    {
      id: 'budget',
      name: 'Budget',
    },
  ],
  projects: [
    {
      id: 'bathroom',
      name: 'Bathroom',
      items: [
        {
          id: 'sink',
          name: 'Sink',
          selectedStyle: '1',
          styles: [
            {
              id: '1',
              name: 'Porcelain',
            },
            {
              id: '2',
              name: 'Blue glass',
            },
          ],
        },
        {
          id: 'tile',
          name: 'Tile',
          selectedStyle: '2',
          styles: [
            {
              id: '1',
              name: 'Small white squares',
            },
            {
              id: '2',
              name: 'Large black squares',
            },
          ],
        },
      ],
    },
    {
      id: 'kitchen',
      name: 'Kitchen',
      items: [
        {
          id: 'counter-top',
          name: 'Counter Top',
          selectedStyle: '1',
          styles: [
            {
              id: '1',
              name: 'Granite',
            },
            {
              id: '2',
              name: 'Laminate',
            },
          ],
        },
        {
          id: 'cupboard',
          name: 'Cupboard',
          selectedStyle: '2',
          styles: [
            {
              id: '1',
              name: 'White old fashioned',
            },
            {
              id: '2',
              name: 'Black modern',
            },
          ],
        },
      ],
    },
    {
      id: 'patio',
      name: 'Patio',
      items: [
        {
          id: 'railing',
          name: 'Railing',
          selectedStyle: '1',
          styles: [
            {
              id: '1',
              name: 'Cedar with black rods',
            },
            {
              id: '2',
              name: 'Oak',
            },
          ],
        },
        {
          id: 'floor-boards',
          name: 'Floor Boards',
          selectedStyle: '2',
          styles: [
            {
              id: '1',
              name: 'Dark redwood',
            },
            {
              id: '2',
              name: 'Light redwood',
            },
          ],
        },
      ],
    },
    {
      id: 'bedroom',
      name: 'Bedroom',
      items: [
        {
          id: 'window',
          name: 'Window',
          selectedStyle: '1',
          styles: [
            {
              id: '1',
              name: 'Large square',
            },
            {
              id: '2',
              name: 'Tall rectangle',
            },
          ],
        },
        {
          id: 'ceiling-fan',
          name: 'Ceiling Fan',
          selectedStyle: '2',
          styles: [
            {
              id: '1',
              name: 'Large',
            },
            {
              id: '2',
              name: 'Small',
            },
          ],
        },
      ],
    },
  ],
};

