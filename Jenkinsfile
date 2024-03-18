pipeline {
    agent any
    environment {
        PATH = "${pwd}:/path/to/nodejs/bin:/path/to/npm/bin"
    }
    
    stages {
        stage('git clone') {
            steps {
                echo 'Hello World'
                checkout scm
            }
        }
        
        stage('Stage 2') {
            steps {
                echo 'Stage 2'
            }
        }
        
        stage('Test') {
            steps {
                script {
                    sh 'npm test'
                }
            }
        }
        
        stage('Build') {
            steps {
                script {
                    sh 'npm run build'
                }
            }
        }
    }
}
