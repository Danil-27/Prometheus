pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
    }

    stages {
        stage('Install dependencies') {
            steps {
                dir('Prometneus') {
                    sh 'npm install'
                }
            }
        }

        stage('Build project') {
            steps {
                dir('Prometneus') {
                    sh 'npm run build'
                }
            }
        }

        stage('Run app') {
            steps {
                dir('Prometneus') {
                    sh 'pm2 delete all || true'
                    sh 'pm2 start npm --name "prometneus-app" -- run start'
                    sh 'pm2 save'
                }
            }
        }
    }
}
