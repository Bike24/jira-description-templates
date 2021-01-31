import React, { useState, useEffect } from 'react';
import Preview from './Preview';
import Selector from './Selector';
import IconTemplate from './template.svg';
import { AppBody, AppContainer, AppFooter, AppLoader, Button } from './App.styles';

function App() {
  const [isActive, setActive] = useState(false);
  const [loading, setLoading] = useState(true);
  const [template, setTemplate] = useState<DescriptionTemplate>({
    id: 'missing',
    name: 'Loading',
    content: 'Templates not loaded'
  });
  const [templateList, setTemplateList] = useState<DescriptionTemplate[]>([]);

  useEffect(() => {
    setLoading(true);
    fetch('https://raw.githubusercontent.com/Bike24/jira-description-templates/main/data/jira-description-templates.json')
    .then((response) => {
        return response.json();
      })
      .then((data) => {
        const templates: Array<DescriptionTemplate> = data;
        setTemplateList(templates);
        data.length && setTemplate(templates[0]);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        console.log('Jira Description Templates: Fetching templates failed: ', e);
      });
  }, []);

  const handleToggleState = (): void => setActive(!isActive);

  const handleApply = () => {
    const descriptionContainer = document.getElementById('description-wiki-edit');

    if (!descriptionContainer) {
      alert('No applicable editor found!');
      return;
    }

    const editor = descriptionContainer.querySelector('textarea');
    const textModeButton = descriptionContainer.querySelectorAll('.editor-toggle-tabs ul.aui-nav a')[1];
    const visualModeButton = descriptionContainer.querySelectorAll('.editor-toggle-tabs ul.aui-nav a')[0];

    if (editor && textModeButton && visualModeButton) {
      (textModeButton as HTMLElement).click();
      editor.value = template.content;
      (visualModeButton as HTMLElement).click();
      handleToggleState();
    }
  }

  return (
    <AppContainer className={isActive ? ' active' : ''}>
      <AppLoader onClick={handleToggleState}>
          <IconTemplate fill="#fff" height="20" width="20" viewBox="0 0 1000 1000" />
      </AppLoader>
      <AppBody>
        <h6>Choose template</h6>
        {loading
          ? <p>loading…</p>
          : <>
              <Selector current={template} list={templateList} onChange={setTemplate} />
              <Preview template={template} />
              <Button onClick={handleApply}>Apply</Button>
              <Button cancel
                      onClick={handleToggleState}>Cancel</Button>
            </>
          }
      </AppBody>
      <AppFooter>
        Create a <a href="https://github.com/Bike24/jira-description-templates/edit/main/data/jira-description-templates.json"
                    target="_blank">Pull Request</a> to add new templates.
      </AppFooter>
    </AppContainer>
  )
}

export default App;