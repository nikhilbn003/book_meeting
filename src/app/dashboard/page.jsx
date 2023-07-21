import Card from '@/components/dashboard/card';
import cardsData from '../../../data/cardsData.json';
import Layout from '@/components/layout';
import LocationInput from '@/components/dashboard/getLocation';

const Dashboard = () => {
  return (
    <Layout>
      <LocationInput/>
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {cardsData.cards.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
    </Layout>
  );
};

export default Dashboard;
