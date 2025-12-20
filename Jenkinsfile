pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/sriharika-devops/My-Projects.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker compose build'
            }
        }

        stage('Deploy Containers') {
            steps {
                sh 'docker compose up -d'
            }
        }
    }
}
