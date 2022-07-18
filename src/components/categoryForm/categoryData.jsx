import React from 'react'

const categoryItems = [
	{
		itemId: 1,
		itemName: "Name",
		categoryId: 1,
		itemType: "text",
		itemMandatory: 1,
	},
	{
		itemId: 2,
		itemName: "Mob",
		categoryId: 1,
		itemType: "text",
		itemMandatory: 1,
	},
	{
		itemId: 3,
		itemName: "Name Last",
		categoryId: 1,
		itemType: "text",
		itemMandatory: 1,
	},
	{
		itemId: 4,
		itemName: "Dated on",
		categoryId: 1,
		itemType: "date",
		itemMandatory: 1,
	}
]

function renderItem(item) {
	switch (item.itemType) {
		case 1:
			{
				<TextItem item />
			}
		case 2:
			{
				<TextItem item />
			}
			break;
		case 3:
			{
				<TextItem item />
			}
			break;
		case 4:
			{
				<TextItem item />
			}
			break;
		case 5:
			{
				<TextItem item />
			}
			break;
		case 6:
			{
				<TextItem item />
			}
			break;

		default:
			break;
	}
}

const items = categoryItems.map((item) => { renderItem({ item }) })

function categoryData(props) {
	console.log(props)
	return (
		<div>{items}</div>
	)
}

export default categoryData