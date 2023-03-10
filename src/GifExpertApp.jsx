import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Santiago', 'Sito']);

    const onAddCategory = (newCategory) => {
        // console.log(newCategory)

        if (categories.includes(newCategory)) return;

        setCategories([...categories, newCategory])
    }

    return (
        <>
            <h1>Gif Expertd App</h1>

            <AddCategory
                onNewCategory={onAddCategory}
            />
            {
                categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }

        </>
    )
}
