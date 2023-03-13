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
      def scmUrl = 'https://github.com/fabianorodrigo/dsgov-angular-components.git'
      def branch = env.BRANCH_NAME
      echo 'Pulling ' + branch + ' from ' + scmUrl
      checkout ([
        $class: 'GitSCM',
              branches: [[name: '*/' + branch]],
              extensions: [
                  [$class: 'PruneStaleBranch'],
                  [$class: 'CleanCheckout'],
                  [$class: 'LocalBranch']
              ],
              userRemoteConfigs: [
                  [url: scmUrl]]
          ])
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
        withNPM(npmrcConfig:'.npmrc') {
            echo "Performing npm build..."
            sh "npm publish dist/dsgov-components/ancine-dsgov-components-${packageJSONVersion}.tgz --registry=${NEXUS_URL}/repository/${NEXUS_NPM_ANCINE_RELEASE_REPOSITORY}/"
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
