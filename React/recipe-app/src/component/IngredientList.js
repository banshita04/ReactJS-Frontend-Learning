import Ingredient from "./Ingredient";

function IngredientList() {
    let data = [
        {
            name: "Baked Salmon",

            ingredients: [
                { name: "Salmon", amount: 1, measurement: "lb" },
                { name: "Pine Nuts", amount: 1, measurement: "cup" },
                { name: "Butter Lettuce", amount: 2, measurement: "cups" },
                { name: "Yellow Squash", amount: 1, measurement: "med" },
                { name: "Olive oil", amount: 0.5, measurement: "cup" },
                { name: "Garlic", amount: 3, measurement: "cloves" }
            ],
            steps: [
                "Pre heat the oven to 350 degrees. ",
                "Spread the olive oil around the glass baking dish. ",
                "Add salmon,garlic and pine nuts to the dish. ",
                "Bake for 15 mins. ",
                "Add the yellow squash and put back in the oven for 30 mins. ",
                "Remove the oven and let cool for 15 mins, add the lettuce and serve."
            ],
        },
        {
            name: "Vanilla Icecream",
            ingredients: [{ name: "Heavy cream", amount: 2, measurement: "cups" },
            { name: " Whole milk", amount: 1, measurement: "litre" },
            { name: " Sugarcane", amount: 1, measurement: "cup" },
            { name: " Vanilla extract", amount: 1 / 2, measurement: "cup" },
            { name: " Salt ", amount: 1, measurement: "tbsp" }
            ],

            steps: ["Freeze the bowl of your ice cream maker for 12 hrs. ",
                "Combine the cream, milk, sugar, vanilla, and salt in a medium saucepan over medium-low heat. ",
                "Warm for 5 minutes, whisking often, until the sugar is fully dissolved and the mixture is warmed through. ",
                "Then, chill the ice cream base. Transfer it to a heatproof bowl, cover, and chill for 2 hours or overnight."
            ]
        }
    ]
    return (
        <div>
            <marquee><h1><u>Recipe Book</u></h1></marquee>
            {
                data.map(items => <Ingredient ing={items} />)
            }

        </div>
    );
}

export default IngredientList;