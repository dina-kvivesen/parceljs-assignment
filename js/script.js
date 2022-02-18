import ApolloClient, { gql } from 'apollo-boost';

  async function makeGQLCall() {
    const gqlUrl = "https://noroff-wf2-ma3.herokuapp.com/graphql";
   
    const client = new ApolloClient({
     uri: gqlUrl,
    });
   
    const json = await client.query({
     query: gql`
      {
        users(id: 5) {
          username
          posts {
              title
              body
          }
       }
      }
     `,
    });

    const userPosts = json.data.users[0].posts;

    userPosts.forEach(postTitles => 
    console.log(postTitles.title));

  }

  makeGQLCall();

