pipeline {
    agent any
    environment {
        PATH = "$PATH:/path/to/nodejs/bin:/path/to/npm/bin"
    }
    stages {
        stage("checkout") {
            steps {
                checkout scm
            }
        }
        stage("Test") {
            steps {
                sh 'npm test'
            }
        }
        stage("Build") {
            steps {
                sh 'npm run build'
            }
        }
    }
}
