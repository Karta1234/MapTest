const {
    withDangerousMod,
    withPlugins,
    withProjectBuildGradle,
    withMainApplication,
} = require('@expo/config-plugins');
const fs = require('fs');
const path = require('path');


/**
 * 2. Добавляем classpath kotlin-gradle-plugin
 */
const withKotlinBuildscriptDependency = (config) => {
    return withProjectBuildGradle(config, (config) => {
        const kotlinVersion = '1.8.22'; // Или 2.0.21 в зависимости от необходимости
        const gradle = config.modResults.contents;

        if (!gradle.includes('kotlin-gradle-plugin')) {
            config.modResults.contents = gradle.replace(
                /dependencies\s?{([\s\S]*?)}/m,
                (match, deps) => {
                    if (deps.includes('kotlin-gradle-plugin')) return match;

                    return `dependencies {
        classpath("org.jetbrains.kotlin:kotlin-gradle-plugin:${kotlinVersion}")
${deps}
      }`;
                }
            );
        }

        return config;
    });
};

/**
 * 3. Добавляем kotlinOptions.jvmTarget = "11"
 */
const withKotlinJvmTarget11 = (config) => {
    return withProjectBuildGradle(config, (config) => {
        if (!config.modResults.contents.includes("kotlinOptions")) {
            config.modResults.contents = config.modResults.contents.replace(
                /android\s*{([\s\S]*?)}/,
                (match, p1) => {
                    return `android {
${p1}
    kotlinOptions {
        jvmTarget = "11"
    }
}`;
                }
            );
        }
        return config;
    });
};

/**
 * 4. Добавляем android.suppressUnsupportedCompileSdk=34 в gradle.properties
 */
const withSuppressUnsupportedCompileSdk = (config) => {
    return withDangerousMod(config, ['android', async (config) => {
        const gradlePropsPath = path.join(config.modRequest.projectRoot, 'android', 'gradle.properties');
        if (fs.existsSync(gradlePropsPath)) {
            let content = fs.readFileSync(gradlePropsPath, 'utf8');
            if (!content.includes('android.suppressUnsupportedCompileSdk')) {
                content += '\nandroid.suppressUnsupportedCompileSdk=34\n';
                fs.writeFileSync(gradlePropsPath, content);
            }
        }
        return config;
    }]);
};

// 👇 Финальная сборка всех плагинов
module.exports = function withCustomConfig(config) {
    return withPlugins(config, [
        withKotlinBuildscriptDependency,
        withKotlinJvmTarget11,
        withSuppressUnsupportedCompileSdk,
    ]);
};
