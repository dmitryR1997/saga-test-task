import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"

import {RootState} from "../store"
import {fetchPosts, fetchPostsByAlbum} from "../reducers/post"
import {updateFilter} from "../reducers/filter"

import Pagination from '@material-ui/lab/Pagination'
import Grid from '@material-ui/core/Grid'

import PhotoCard from "./PhotoCard"

const PhotoList = () => {
    const dispatch = useDispatch()

    const photos = useSelector((state: RootState) => state.postReducer.list)
    const filters = useSelector((state: RootState) => state.filterReducer)

    const [page, setPage] = useState(1)

    const nextPage = (event:any, value:number) => {
        setPage(value)
    }

    const filterHandler = (e:React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(updateFilter({
            field: e.target.name,
            value: Number(e.target.value)
        }))
    }

    const detectFetch = (albumId:number, page:number) => {
        if(albumId && albumId > 0) {
            dispatch(fetchPostsByAlbum(albumId, page))
        } else {
            dispatch(fetchPosts(page))
        }
    }

    useEffect(() => {
        detectFetch(filters.albumId, page)
    }, [dispatch, page])

    useEffect(() => {
        if(page > 1) {
            setPage(1)
        } else {
            detectFetch(filters.albumId, page)
        }
    }, [dispatch, filters.albumId])

    return (
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <select
                    name="albumId"
                    onChange={filterHandler}
                >
                    <option value={0}>Выберите альбом</option>
                    <option value={1}>Album #1</option>
                    <option value={2}>Album #2</option>
                    <option value={3}>Album #3</option>
                    <option value={4}>Album #4</option>
                    <option value={5}>Album #5</option>
                </select>
            </Grid>

            <Grid item xs={9}>
                <div className="photo-list">
                    {photos.map((photo:any) => (
                        <PhotoCard
                            key={photo.id}
                            {...photo}
                        />
                    ))}
                </div>

                <Pagination count={500} page={page} onChange={nextPage} />
            </Grid>
        </Grid>
    )
}

export default PhotoList
