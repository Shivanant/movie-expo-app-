import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const MovieCard = ({ id, title, overview, poster_path, vote_average, release_date }: Movie) => {
    
    return (
        <Link href={`/movies/${id}`} asChild>
            <TouchableOpacity className='w-[30%]'>

                <Image resizeMode='cover' className='w-full h-52 rounded-lg'
                    source={{
                        uri: poster_path ?
                            `https://image.tmdb.org/t/p/w500${poster_path}`
                            : `https://placeholder.co/600*400/1a1a1a/ffffff.png`
                    }} />

                <Text className='text-white'>{title}</Text>
            </TouchableOpacity>
        </Link>
    )
}

export default MovieCard
