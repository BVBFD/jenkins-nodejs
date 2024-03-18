pipeline {
    agent any
    environment {
        PATH = "${pwd}:/path/to/nodejs/bin:/path/to/npm/bin"
    }
    
    stages{
        stage("checkout"){
            steps{
                checkout scm
            }
        }

        stage("Test"){
            steps{
                sh 'sudo apt install npm'
                sh 'npm test'
            }
        }

        stage("Build"){
            steps{
                sh 'npm run build'
            }
        }
    }
}
