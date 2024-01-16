import { createRequire } from 'module';
export const checkConstraints = () => {
    console.log("AAA");
    checkNodeVersion();
    checkContentlayerVersionsMatch();
};
const MIN_NODE_VERSION_MAJOR = 14;
const MIN_NODE_VERSION_MINOR = 18;
const checkNodeVersion = () => {
    const [nodeVersionMajor, nodeVersionMinor] = process.versions.node.split('.').map((_) => parseInt(_, 10));
    if (nodeVersionMajor < MIN_NODE_VERSION_MAJOR ||
        (nodeVersionMajor === MIN_NODE_VERSION_MAJOR && nodeVersionMinor < MIN_NODE_VERSION_MINOR)) {
        throw new Error(`Contentlayer required Node.js version >= ${MIN_NODE_VERSION_MAJOR}.${MIN_NODE_VERSION_MINOR}. (Current version: ${process.versions.node})`);
    }
};
const checkContentlayerVersionsMatch = () => {
    const contentlayerVersion = getPackageVersion('contentlayer');
    const nextContentlayerVersion = getPackageVersion('next-contentlayer');
    if (contentlayerVersion !== nextContentlayerVersion) {
        throw new Error(`\
The versions of "contentlayer" and "next-contentlayer" need to be identical in your "package.json".
Currently used versions: contentlayer: "${contentlayerVersion}", next-contentlayer: "${nextContentlayerVersion}"`);
    }
};
const rrequire = createRequire(import.meta.url);
// const getPackageVersion = (packageName: string): string =>
//   JSON.parse(fs.readFileSync(require.resolve(packageName), 'utf8')).version
const getPackageVersion = (packageName) => rrequire(`${packageName}/package.json`).version;
//# sourceMappingURL=check-constraints.js.map