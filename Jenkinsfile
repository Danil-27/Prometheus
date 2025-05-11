pipeline {
    agent any
    stages {
        stage('Verify Branch') {
            steps {
                echo "${env.GIT_BRANCH}"
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Docker Build') {
            steps {
                sh 'docker --version'
                sh 'docker-compose build'
            }
        }
    }
}
