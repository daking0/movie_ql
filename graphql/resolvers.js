//graphql에서 보낸 쿼리 resolve 필요

const resolvers={
    Query: {
        name :() => "nicolas"
    }
};

export default resolvers;