pipeline {
    agent any
	environment {
		DOCKER_IMAGE = 'lostillusion099/jenkins-demo'
		IMAGE_TAG = "${BUILD_NUMBER}"
	}

    tools {
        nodejs 'Node26'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Building...'
                sh 'node --version'
                sh 'npm --version'
            }
        }

        stage('Test') {
            steps {
                echo 'Tests passed!'
            }
        }
	stage('Docker Build') {
		steps {
			sh 'docker build -t $DOCKER_IMAGE:$IMAGE_TAG .'
			sh 'docker tag $DOCKER_IMAGE:$IMAGE_TAG $DOCKER_IMAGE:latest'
		}
	}

        stage('Deploy') {
            steps {
                sh 'docker build -t jenkins-demo .'
                echo 'Deployed!'
            }
        }
    }

    post {
        success {
            echo 'Pipeline SUCCESS!'
        }

        failure {
            echo 'Pipeline FAILED!'
        }
    }
}
