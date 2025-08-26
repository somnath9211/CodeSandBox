FROM ubuntu:20.04

# Setup User 
RUN useradd -ms /bin/bash sandbox

# Setup Working Directory
WORKDIR /home/sandbox

# Update the ubuntu machine
RUN apt update && apt upgrade -y

# Install nano and curl
RUN apt install  nano curl -y

# Install Nodejs and npm
RUN curl -fsSL https://deb.nodesource.com/setup_19.x | bash - && apt-get install -y nodejs

# Configure terminal to display current working directory
RUN echo 'PS1="\w $ "' >> /home/sandbox/.bashrc

# Setup final working directory
WORKDIR /home/sandbox/app