import { Header } from './componets/Header';
import { Post } from './componets/Post';
import { Sidebar } from './componets/Sidebar';

import styles from './App.module.css';

import './global.css';


export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Augusto Gomes"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus iure placeat nihil labore eos, possimus consequatur obcaecati dolor ipsum sequi ea iste quisquam molestiae qui eius cupiditate quod. Unde, provident."
          />
          <Post
            author="TESTE"
            content="TESTEEEE"
          />
        </main>
      </div>
    </div>
  );
}


