export async function seed(knex) {
    await knex('users').del();
    await knex('tasks').del();
    await knex('lists').del();
    await knex('list_tasks').del();

    await knex.raw('ALTER TABLE users AUTO_INCREMENT = 1')
    await knex.raw('ALTER TABLE tasks AUTO_INCREMENT = 1')
    await knex.raw('ALTER TABLE lists AUTO_INCREMENT = 1')
    await knex.raw('ALTER TABLE list_tasks AUTO_INCREMENT = 1')

    await knex('users').insert([
        {
            username: "testuser",
            email: 'test@example.com',
            password:'1234'
        }
    ]);

    await knex('tasks').insert([
        {
            user_id: 1,
            task_name: "Capstone Project",
            description: "final project for BrainStation Software Engineering Bootcamp",
            start_date_and_time: new Date(2024, 8, 11),
            end_date_and_time: new Date(2024, 8, 22),
            status: "In Progress"
        },
        {
            user_id: 1,
            task_name: "test",
            description: "Description for test",
            start_date_and_time: new Date(2024, 8, 13, 15, 30, 0),
            end_date_and_time: new Date(2024, 8, 13, 18, 30, 0),
            status: "In Progress"
        },
        {
            user_id: 1,
            task_name: "Last day of class",
            description: "Description for Last day of class",
            start_date_and_time: new Date(2024, 8, 27, 15, 30, 0),
            end_date_and_time: new Date(2024, 8, 27, 16, 0, 0),
            status: "In Progress"
        }
    ])

    await knex('lists').insert([
        {
            id: 1,
            list_name: "Complete Project",
            description: "Project tasks",
            status: "In Progress"
        },
        {
            id: 2,
            list_name: "Prepare Presentation",
            description: "Presentation tasks",
            status: "Not Started"
        }
    ])

    await knex('list_tasks').insert([
        { id: 1, list_id: 1, task_id: 1 },
        { id: 2, list_id: 1, task_id: 2 },
        { id: 3, list_id: 2, task_id: 3 }
    ])
}
