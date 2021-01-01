//graphql에서 보낸 쿼리 resolve 필요
const people = [
{
    id: "1",
    name: "Nivolas",
    age:18,
    gender : "female"
},{
    id: "2",
    name: "Deal",
    age:26,
    gender : "male"
},{
    id: "3",
    name: "Nicol",
    age:24,
    gender : "female"
},{
    id: "4",
    name: "Peter",
    age:57,
    gender : "male"
},{
    id: "5",
    name: "Hanna",
    age:18,
    gender : "female"
}
];

const resolvers={
    Query: {
        people :() => people
    }
};

export default resolvers;