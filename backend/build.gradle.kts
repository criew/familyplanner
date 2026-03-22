plugins {
    java
    alias(libs.plugins.spring.boot)
    alias(libs.plugins.spring.dependency.management)
    alias(libs.plugins.openapi.generator)
    alias(libs.plugins.spotless)
}

group = "io.criew.familyplanner"
version = "0.0.1-SNAPSHOT"

java {
    toolchain {
        languageVersion = JavaLanguageVersion.of(21)
    }
}

repositories {
    mavenCentral()
}

dependencies {
    implementation(libs.spring.boot.starter.web)
    implementation(libs.spring.boot.starter.data.jpa)
    implementation(libs.spring.boot.starter.security)
    implementation(libs.spring.boot.starter.oauth2.resource.server)
    implementation(libs.spring.boot.starter.actuator)
    implementation(libs.spring.boot.starter.validation)
    implementation(libs.liquibase.core)
    implementation(libs.postgresql)
    implementation(libs.springdoc.openapi.starter)
    implementation(libs.swagger.annotations)
    implementation(libs.jackson.databind.nullable)

    testImplementation(libs.spring.boot.starter.test)
    testImplementation(libs.spring.security.test)
    testRuntimeOnly(libs.h2)
}

openApiGenerate {
    generatorName.set("spring")
    inputSpec.set("$projectDir/src/main/resources/openapi/familyplanner-api.yaml")
    outputDir.set(layout.buildDirectory.dir("generated").get().asFile.absolutePath)
    apiPackage.set("io.criew.familyplanner.api")
    modelPackage.set("io.criew.familyplanner.model")
    configOptions.set(
        mapOf(
            "interfaceOnly" to "true",
            "useSpringBoot3" to "true",
            "useTags" to "true",
            "dateLibrary" to "java8",
            "openApiNullable" to "true",
        )
    )
}

sourceSets {
    main {
        java {
            srcDir(layout.buildDirectory.dir("generated/src/main/java"))
        }
    }
}

tasks.compileJava {
    dependsOn(tasks.openApiGenerate)
}

spotless {
    java {
        googleJavaFormat()
        targetExclude("build/generated/**")
    }
}

tasks.withType<Test> {
    useJUnitPlatform()
}
