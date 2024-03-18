pipeline {
    agent any
    environment {
        PATH = "${pwd}:/path/to/nodejs/bin:/path/to/npm/bin"
    }
    
    stages{
        stage("checkout") {
            steps{
                checkout scm
            }
        }

        stage('git clone') {
            steps() {
                git 'https://github.com/BVBFD/jenkins-nodejs.git'
            }
        }

        stage("Build") {
            steps{
                sh 'npm run build'
                sh 'npm install'
            }
        }
    }
}
