var postsData = [
{
	title: 'Introducing Telescope',
	author: 'Sacha Grief',
	url: 'http://sachagreif.com/Introducing-telescope'
},
{
	title: 'Meteor',
	athor:'Tom Coleman',
	url: 'http://meteor.com'
},
{
	title: 'The Meteor Book',
	author: 'Tom Coleman',
	url: 'http://themeteorbook.com'
}
];
Template.postsList.helpers({
	posts: postsData
});