pipeline {
    agent any

    tools {
        nodejs 'Node23' // The Node.js version configured in Jenkins
    }

    environment {
        BUILD_DIR = 'build'
    }

    stages {
        stage('Clone Repository') {
            steps {
                // Clone the GitHub repository
                git branch: 'main', url: 'https://github.com/Chin-ma/music-dash.git', credentialsId: '3e60f450-02b6-4a5e-9dee-51074761c6f2'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install project dependencies
                sh 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                // Build the React app
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                // Deploy the build directory (e.g., copy to a web server or S3 bucket)
                // Example: Copy to a local Apache/Nginx directory
                sh 'cp -r ${BUILD_DIR}/* /var/www/html/'
            }
        }
    }

    post {
        success {
            echo 'Deployment succeeded!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}

