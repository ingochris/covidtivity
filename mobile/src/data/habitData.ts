const habitData = {
  health: {
    color: '#F0DA96',
    title: 'Health',
    percent: 0.5,
    activities: ['healthy_meal', 'meditate', 'walk'],
  },
  social: {
    color: '#A8DCED',
    title: 'Social',
    percent: 0.25,
    activities: ['healthy_meal', 'meditate', 'walk'],
  },
  productivity: {
    color: '#C1A6EC',
    title: 'Productivity',
    percent: 0.8,
    activities: ['healthy_meal', 'meditate', 'walk'],
  },
} as const;

export default habitData;
