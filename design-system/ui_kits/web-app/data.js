// Sample content for the Tally web app UI kit. Original, illustrative data.
window.TallyData = {
  areas: [
    { id: 'work', label: 'Work', icon: 'briefcase' },
    { id: 'home', label: 'Home', icon: 'home' },
  ],
  projects: [
    { id: 'brand', area: 'work', label: 'Q3 Brand Refresh', note: 'Land the new identity before the September announcement. Keep decisions reversible until the print run.' },
    { id: 'hire', area: 'work', label: 'Hire a Researcher' },
    { id: 'kitchen', area: 'home', label: 'Kitchen Renovation' },
  ],
  tasks: [
    { id: 1,  list: 'inbox',  title: 'Ask Priya about the vendor contract', state: 'open' },
    { id: 2,  list: 'inbox',  title: 'Read the accessibility audit', state: 'open', meta: ['file-text'] },

    { id: 10, project: 'brand', list: 'today', group: 'Identity', title: 'Sign off the wordmark spacing', state: 'progress', today: true, meta: ['file-text'], tags: ['Important'],
      notes: 'Three optical fixes left. The lowercase l still reads a hair tight against the y.',
      checklist: [{ label: 'Tighten l–y pair', checked: true }, { label: 'Re-kern at 12px', checked: false }, { label: 'Export test sheet', checked: false }],
      deadline: { label: 'Fri, 14 Aug', secondary: '6 days left' } },
    { id: 11, project: 'brand', list: 'today', group: 'Identity', title: 'Collect stationery quotes', state: 'open', today: true, tags: ['Waiting On'] },
    { id: 12, project: 'brand', list: 'today', group: 'Rollout', title: 'Draft the announcement post', state: 'open', today: true, meta: ['list-checks'],
      notes: 'Short. Two paragraphs and the new mark.', checklist: [{ label: 'Opening line' }, { label: 'Credit the studio' }] },
    { id: 13, project: 'kitchen', list: 'today', title: 'Measure the alcove again', state: 'open', today: true },
    { id: 14, list: 'today', title: 'Renew the domain', state: 'done', today: true },

    { id: 20, project: 'brand', group: 'Identity', title: 'Pick two accent colours', state: 'open', tags: ['Errand'] },
    { id: 21, project: 'brand', group: 'Identity', title: 'Review the icon grid', state: 'open', meta: ['file-text'] },
    { id: 22, project: 'brand', group: 'Rollout', title: 'Update the deck template', state: 'open', deadline: { label: 'Tue, 2 Sep', secondary: '3 weeks' } },
    { id: 23, project: 'brand', group: 'Rollout', title: 'Brief the print vendor', state: 'open', tags: ['Waiting On'] },
    { id: 24, project: 'brand', group: 'Rollout', title: 'Archive the old asset library', state: 'canceled' },
    { id: 25, project: 'hire', title: 'Write the role description', state: 'done' },
    { id: 26, project: 'hire', title: 'Post to three boards', state: 'open' },
    { id: 27, project: 'hire', title: 'Schedule first-round calls', state: 'open', tags: ['Important'] },
    { id: 28, project: 'kitchen', title: 'Order the tile samples', state: 'open' },
    { id: 29, project: 'kitchen', title: 'Book the electrician', state: 'open', deadline: { label: 'Mon, 11 Aug', secondary: '3 days left' } },

    { id: 40, list: 'upcoming', when: 'Tomorrow', title: 'Studio all-hands', state: 'open' },
    { id: 41, list: 'upcoming', when: 'Tomorrow', title: 'Send the invoice', state: 'open' },
    { id: 42, list: 'upcoming', when: 'Monday 11 August', title: 'Book the electrician', state: 'open', project: 'kitchen' },
    { id: 43, list: 'upcoming', when: 'Monday 11 August', title: 'Quarterly numbers with Olu', state: 'open' },
    { id: 44, list: 'upcoming', when: 'Friday 14 August', title: 'Wordmark sign-off due', state: 'open', project: 'brand' },

    { id: 50, list: 'someday', title: 'Learn to develop film at home', state: 'open' },
    { id: 51, list: 'someday', title: 'Rebuild the studio bookshelf', state: 'open' },

    { id: 60, list: 'logbook', when: 'Yesterday', title: 'Send the contract to Priya', state: 'done' },
    { id: 61, list: 'logbook', when: 'Yesterday', title: 'Approve the photography budget', state: 'done' },
    { id: 62, list: 'logbook', when: 'Wednesday 6 August', title: 'Cancel the old hosting plan', state: 'canceled' },
  ],
};
