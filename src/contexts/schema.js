import { schema } from 'normalizr';

const parentChildId = (value, parent) => `${parent.id}-${value.id}`;

const style = new schema.Entity('styles', {},
	{
		idAttribute: parentChildId
	}
);

const item = new schema.Entity('items',
	{
		styles: [style]
	},
	{
		idAttribute: parentChildId
	}
);

const action = new schema.Entity('actions',
	{
		items: [item]
	},
	{
		idAttribute: parentChildId
	}
);

const project = new schema.Entity('projects', {
	actions: [action]
});

const projectSchema = { projects: [project] };

export default projectSchema;
