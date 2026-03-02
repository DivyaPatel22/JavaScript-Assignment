
type User = {
    id: number;
    name: string;
};

async function getUserNames(): Promise<string[]> {

    const response = await fetch('/users');

    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }

    const users: User[] = await response.json();

    return users.map((user: User) => user.name);
}


