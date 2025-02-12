import Header from "./components/Header";
import Clients from "./components/Clients";
import {ApolloProvider, ApolloClient, InMemoryCache} from "@apollo/client"
import AddClientModal from "./components/AddClientModal";

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="container">
          <AddClientModal />
          <Clients />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
