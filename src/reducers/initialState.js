const initialState = {
  calculations: [
    {
      id: '1',
      name: 'First Dinner',
      description: 'asda sgfs sdfhgh dsf sfdsd fsd',
      debtors: ['1', '3']
    },
    {
      id: '2',
      name: 'Lunch with friends',
      description: 'asda sgfs sdfhgh dsf sfdsd fsd',
      debtors: ['1', '3']
    },
    {
      id: '3',
      name: 'Lunch with friends',
      description: 'asda sgfs sdfhgh dsf sfdsd fsd',
      debtors: ['1', '3']
    },
    {
      id: '4',
      name: 'Lunch with friends',
      description: 'asda sgfs sdfhgh dsf sfdsd fsd',
      debtors: ['1', '3']
    },
    {
      id: '5',
      name: 'Lunch with friends',
      description: 'asda sgfs sdfhgh dsf sfdsd fsd',
      debtors: ['1', '3']
    }
  ],
  debtors: [
    {
      id: '1',
      contactRef: '2',
      value: 5
    },
    {
      id: '2',
      contactRef: '3',
      value: 12
    },
    {
      id: '3',
      contactRef: '1',
      value: 2
    }
  ],
  contacts: [
    {
      id: '1',
      name: 'Victor',
      alias: 'El brother'
    },
    {
      id: '2',
      name: 'Marc',
      alias: 'El brother'
    },
    {
      id: '3',
      name: 'Jordi',
      alias: 'El brother'
    },
    {
      id: '4',
      name: 'Alan',
      alias: 'El brother'
    },
    {
      id: '5',
      name: 'Victor',
      alias: 'El brother'
    },
    {
      id: '6',
      name: 'Marc',
      alias: 'El brother'
    },
    {
      id: '7',
      name: 'Jordi',
      alias: 'El brother'
    },
    {
      id: '8',
      name: 'Alan',
      alias: 'El brother'
    },
    {
      id: '9',
      name: 'Victor',
      alias: 'El brother'
    },
    {
      id: '10',
      name: 'Marc',
      alias: 'El brother'
    },
    {
      id: '11',
      name: 'Jordi',
      alias: 'El brother'
    },
    {
      id: '12',
      name: 'Alan',
      alias: 'El brother'
    },
    {
      id: '13',
      name: 'Victor',
      alias: 'El brother'
    },
    {
      id: '14',
      name: 'Marc',
      alias: 'El brother'
    },
    {
      id: '15',
      name: 'Jordi',
      alias: 'El brother'
    },
    {
      id: '16',
      name: 'Alan',
      alias: 'El brother'
    }
  ],
  navStates: {
    calculationsKey: 1,
    navBarKey: 0,
    navBarRightKey: 0
  }
};

export default initialState;
