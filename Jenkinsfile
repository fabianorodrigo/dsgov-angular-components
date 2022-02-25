#!groovy
node {
  try {
    stage('Preparação') {
      cleanWs();
      properties([[$class: 'BuildDiscarderProperty',
        strategy: [$class: 'LogRotator',
          artifactDaysToKeepStr: '30',
          artifactNumToKeepStr: '15',
          daysToKeepStr: '30', numToKeepStr: '10'
        ]
      ]]);
    }
    stage('Checkout') {
      //disable to recycle workspace data to save time/bandwidth
      deleteDir()
      checkout scm
    }
    stage('Instalação Dependências') {
        withEnv(["NPM_CONFIG_LOGLEVEL=warn"]) {
          sh 'npm install'
        }
    }
    stage('Construção do Código-fonte') {
      sh("npm run pack-lib-prod")
    }
    stage('Publicação do pacote no Nexus'){
      nexusArtifactUploader {
        nexusVersion('nexus3')
        protocol('https')
        nexusUrl('rj-nexus.ancine.gov.br')
        groupId('@ancine')
        version('X')
        repository('ancine-npm')
        credentialsId('nexus')
        artifact {
            artifactId('dsgov-components')
            type('tgz')
            classifier('')
            file('dsgov-components.tgz')
        }
      }
    }
    stage('Limpeza do Workspace') {
      cleanWs()
    }
  } catch(e) {
    currentBuild.result = 'FAILURE'
    throw e
  }
}
