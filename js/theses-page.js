(() => {
  const data = window.influencerThesesData;
  const generalNote = document.getElementById('thesis-general-note');
  const generalCopy = document.getElementById('thesis-general-copy');
  const memberList = document.getElementById('thesis-member-list');

  if (!data || !generalNote || !generalCopy || !memberList) return;

  generalNote.textContent = data.generalNote;
  data.general.forEach((text) => {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    generalCopy.append(paragraph);
  });

  data.members.forEach((member) => {
    const article = document.createElement('article');
    article.className = `thesis-reading-member${member.pending ? ' is-pending' : ''}`;

    if (member.image) {
      const image = document.createElement('img');
      image.className = 'thesis-reading-member__image';
      image.src = member.image;
      image.alt = member.imageAlt || '';
      image.loading = 'lazy';
      article.append(image);
    }

    const copy = document.createElement('div');
    copy.className = 'thesis-reading-member-copy';

    const heading = document.createElement('h3');
    heading.textContent = member.name;
    copy.append(heading);

    if (member.pending) {
      const pending = document.createElement('p');
      pending.className = 'thesis-reading-pending';
      pending.textContent = 'El texto de esta tesis queda pendiente de agregar.';
      copy.append(pending);
    } else {
      member.paragraphs.forEach((text) => {
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        copy.append(paragraph);
      });
    }

    article.append(copy);
    memberList.append(article);
  });
})();