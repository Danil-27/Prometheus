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
                bat 'npm install'  
            }
        }
        stage('nuxt Build') {
            steps {
                 bat 'npx nuxt build'
            }
        }
    }
}
