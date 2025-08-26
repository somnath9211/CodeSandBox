import Docker from 'dockerode';

const docker = new Docker();

export const handleContainerCreate = async (projectId, socket) => {
    console.log(`Creating container for project ${projectId} and socket ${socket.id}`);
    try {
        // Create a new container
        const container = await docker.createContainer({
            Image: 'sandbox', // name given by us for the written dockerfile
            AttachStdin: true,
            AttachStdout: true,
            AttachStderr: true,
            name: `container_${projectId}`,
            Tty: true,
            Cmd: ['/bin/bash'], // Start with a shell
            User: 'sandbox',
            HostConfig: {
                AutoRemove: true, // Automatically remove the container when it exits
                Binds: [`/projects/${projectId}:/home/sandbox/app`], // Mount project directory
            },
            PortBindings: {
                "5173/tcp": [{ HostPort: "0" }], // Map container's port 5173 to a random host port will be assigned by docker
            },
            ExposedPorts: {
                "5173/tcp": {}
            },
            Env: [
                "HOST=0.0.0.0"
            ]
        });

        // Start the container
        await container.start();
        console.log(`Container started for project ${projectId} with ID: ${container.id}`);
        return container;
    } catch (error) {
        console.error('Error creating or starting container:', error);
        throw error;
    }
}