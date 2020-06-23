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

const project = new schema.Entity('projects', {
	items: [item]
});

const projectSchema = { projects: [project] };

export default projectSchema;
