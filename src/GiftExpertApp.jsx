import { useState } from 'react';
import { AddCategory, GiftGrid } from './components';


const GiftExpertApp = () => {
    // los hooks no se debe colocar de forma condicional
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;

        setCategories([...categories, newCategory]);
    }

    return (
        <>
            <h1>GiftExpertApp</h1>

            <AddCategory
                onNewCategory={event => onAddCategory(event)}
            />

            {
                categories.map((category) => (
                    <GiftGrid key={category} category={category} />
                ))
            }

        </>
    )
}

export default GiftExpertApp;