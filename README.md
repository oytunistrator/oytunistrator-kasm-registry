<h1 align="center">
  <br>
  <img width="150" src="https://avatars.githubusercontent.com/u/3594944?v=4">
  <br>
  Oytunistrator Kasm Regisrty
  <br>
</h1>


This repository contains a custom Docker registry for the Kasm Platform. Kasm is a platform for virtual desktops and application images, and this registry is used to store and manage custom Docker images for use within the Kasm environment.

## Features

- Provides custom Docker containers for use within Kasm environments.
- Configured for managing images compatible with the Kasm platform.
- Creates high-performance, secure, and isolated working environments.

## Getting Started

Follow the steps below to get started with this project:

### Prerequisites

- Docker
- Kasm platform installation
- Access credentials for the Kasm registry

### Setting Up the Project

1. Clone the repository to your local machine:

```bash
git clone https://github.com/oytunistrator/oytunistrator-kasm-registry.git
cd oytunistrator-kasm-registry
```

2. Build your Docker images and push them to the appropriate registry:

```bash
docker build -t kasm.registry.com/my-custom-image:latest .
docker push kasm.registry.com/my-custom-image:latest
```

### Using the Image in Kasm Platform

1. Log in to the Kasm Admin Panel.
2. Navigate to the "Images" section and click "New Image" to add a new image.
3. Select the image you created or an existing one and configure the necessary settings.
4. Launch the image and make it available to users.

## License

This project is licensed under the [MIT License](LICENSE).

---

This should give a basic but complete overview of the repository in English. Let me know if you'd like to modify or add more details!
