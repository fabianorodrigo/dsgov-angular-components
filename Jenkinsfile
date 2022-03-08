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
      script {
        def packageJSON = readJSON file: 'package.json'
        def packageJSONVersion = packageJSON.version
        nexusArtifactUploader(
                nexusVersion: "${NEXUS_VERSION}",
                protocol: "${NEXUS_PROTOCOL}",
                nexusUrl: "${NEXUS_URL}",
                groupId: '@ancine',
                artifactId: 'dsgov-components',
                version: "${packageJSONVersion}",
                repository: "${NEXUS_NPM_ANCINE_RELEASE_REPOSITORY}",
                credentialsId: "${NEXUS_CREDENTIAL_ID}",
                artifacts: [
                    [artifactId: 'dsgov-components',
                    file: "dist/dsgov-components/ancine-dsgov-components-${packageJSONVersion}.tgz",
                    type: 'tgz']
                ]
        )
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
