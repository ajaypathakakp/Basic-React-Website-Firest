
import { CORE_CONCEPTS, EXAMPLES } from './data';
import { useState } from 'react';
import Header from '../components/Header';
import CoreConcept from '../components/CoreConcepts.jsx';
import TabButton from '../components/TabButton.jsx';



function App() {
  const [SelectedTopic, setSelectedTopic] = useState('props')
  function handleSelect(SelectedButton) {
    // return console.log('You clicked on a');
    setSelectedTopic(SelectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
          <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
          <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
          <TabButton onSelect={() => handleSelect('props')}>PROPS</TabButton>
          <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {/* <SelectedTab/> */}
          {/* <p>{SelectedTopic}</p> */}
          <div id="tab-content">
          <h3>{EXAMPLES[SelectedTopic].title}</h3>
          <p>{EXAMPLES[SelectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[SelectedTopic].code}</code>
          </pre>
         </div>
        </section>
      </main>
    </div>
  );
}

export default App;