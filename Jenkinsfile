pipeline {
    agent any
    environment {
        PATH = "/path/to/nodejs/bin:/path/to/npm/bin:${env.PATH}"
    }
    stages {
        stage("checkout") {
            steps {
                checkout scm
            }
        }
        stage("Test") {
            steps {
                sh 'npm run test'
            }
        }
        stage("Build") {
            steps {
                sh 'npm run build'
            }
        }
    }
}