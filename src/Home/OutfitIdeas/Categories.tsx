import React from 'react';
import { View, ScrollView } from 'react-native';
import Category from './Category';

interface CategoriesProps {
}

const categories = [
    {
        id: "newin",
        title: "New In",
        color: "#FFDDDD"
    },
    {
        id: "summer",
        title: "Summer",
        color: "#BEECC4"
    },
    {
        id: "activewear",
        title: "Active Wear",
        color: "#BFEAF5"
    },
    {
        id: "outlet",
        title: "Outlet",
        color: "#F1E0FF"
    },
    {
        id: "accesories",
        title: "Accesories",
        color: "#FFE8E9"
    },
];

const Categories = ({}: CategoriesProps) => {
    return (
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {categories.map(category => 
                    <Category key={category.id} category={category} />
                )}
            </ScrollView>
        </View>
    )
}

export default Categories;