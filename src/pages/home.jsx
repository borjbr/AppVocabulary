
import React from 'react';
import { Header } from '../components/header';
import { Card } from '../components/card';

export function Home() {
  return (
    <>
    <Header/>
    <div className='container'>
      <div className="row">
        <div className="col">
          <Card title="Ejemplo" subtitle="esto esun ejempl" link="/vocabulary" textLink="Vocabular">
          </Card>
        </div>
        <div className="col">
          <Card title="Ejemplo2" subtitle="esto esun ejempl">
          </Card>
        </div>

      </div>
    </div>
    </>
  );
}

export default Home;