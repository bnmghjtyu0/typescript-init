// 一個成功時，下一個就會執行，若是失敗，就會跳到 catch 子句
import fetch from 'node-fetch'

// fetch module
type FetchConfig = {}
type JSONResponse = {
    retCode: number,
    retMsg: string,
    retVal: string[],
}
async function client(path: string, fetchConfig: FetchConfig) {
    const response = await fetch(path, fetchConfig)
    const json = await response.json()
    if (response.ok) {
        return json
    } else {
        return Promise.reject(response)
    }
}


// Demo1: fetch pokemon
type PokemonData = [string, string[], string[], string[]]
//Omit 移除原本的 retVal，& onion 新的 type
// type PokemonRetVal = { retVal: PokemonData }
// type PokemonResponse = Omit<JSONResponse, 'retVal'> & PokemonRetVal 
type PokemonResponse = PokemonData
const clientPokemon = async (path: string, fetchConfig: FetchConfig): Promise<PokemonResponse> => {
    return client(path, fetchConfig)
}

// Demo2: fetch movie
type MovieData = {
    dates: { maximum: Date }[],
    results: { adult: boolean, title: string }[]
}
type MovieResponse = MovieData
const clientMovie = async (path: string, fetchConfig: FetchConfig): Promise<MovieResponse> => {
    return client(path, fetchConfig)
}



clientPokemon('https://zh.wikipedia.org/w/api.php?action=opensearch&format=json&search=rainbow', {
    // learn more about this API here: https://graphql-pokemon2.vercel.app/
    method: 'GET',
    headers: {
        'content-type': 'application/json;charset=UTF-8',
    },
}).then(res => {
    // api 回傳的 type <[string, string[], string[], string[]]>
    console.log(res[0])
})

clientMovie('https://api.themoviedb.org/3/movie/now_playing?api_key=23785b1559bb39249c40d56934f80e6c&language=zh-TW&page=1', {
    // learn more about this API here: https://graphql-pokemon2.vercel.app/
    method: 'GET',
    headers: {
        'content-type': 'application/json;charset=UTF-8',
    },
}).then(res => {
    console.log(res.results[0].title)
})


// ### Conference
// TypeScript fetch refer on Kent.C tutorial
// https://kentcdodds.com/blog/using-fetch-with-type-script

// TypeScript Omit<Type, Keys> 
// https://www.typescriptlang.org/docs/handbook/utility-types.html

// 1.定義 Todo types
// interface Todo {
//     title: string;
//     description: string;
//     completed: boolean;
//     createdAt: number;
//   }

// 2.Omit description of Todo
//   type TodoPreview = Omit<Todo, "description">;

// 3.Get new Todo types
//   const todo: TodoPreview = {
//     title: "Clean room",
//     completed: false,
//     createdAt: 1615544252770,
//   };
