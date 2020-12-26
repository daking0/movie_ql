import {GraphQLServer} from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers
});

server.start(()=>console.log("Grapghl Server Running"));
// query는 정보를 받을때 사용한다.
// mutation은 정보를 서버,db,메모리에서 바꿀 때 사용한다.