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
      name: 'Victor'
    },
    {
      id: '2',
      name: 'Marc'
    },
    {
      id: '3',
      name: 'Jordi'
    },
    {
      id: '4',
      name: 'Alan'
    }
  ],
  navStates: {
    calculationsKey: 1
  }
};

export default initialState;
