FROM eclipse-temurin:21-jdk AS builder
WORKDIR /app
COPY gradle gradle
COPY gradlew .
COPY settings.gradle.kts .
COPY build.gradle.kts .
RUN ./gradlew dependencies --no-daemon
COPY src src
RUN ./gradlew build --no-daemon -x test

FROM eclipse-temurin:21-jre
WORKDIR /app
COPY --from=builder /app/build/libs/*.jar app.jar
EXPOSE 8081
ENTRYPOINT ["java", "-jar", "app.jar"]
