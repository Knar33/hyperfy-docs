module.exports = {
  sdkSidebar: [
    "overview",
    "react",
    "quick-start",
    "structure",
    {
      type: "link",
      label: "Examples",
      href: "https://github.com/hyperfy-io/hyperfy-recipes",
    },
    {
      type: "category",
      label: "API Reference",
      items: [
        {
          type: "category",
          label: "Components",
          items: [
            "ref/components/app",
            "ref/components/arealight",
            "ref/components/audio",
            "ref/components/background",
            "ref/components/billboard",
            "ref/components/box",
            "ref/components/boxes",
            "ref/components/camera",
            "ref/components/climbing",
            "ref/components/flying",
            "ref/components/gliding",
            "ref/components/global",
            "ref/components/group",
            "ref/components/hdr",
            "ref/components/input",
            "ref/components/image",
            "ref/components/model",
            "ref/components/place",
            "ref/components/pointlight",
            "ref/components/rigidbody",
            "ref/components/skysphere",
            "ref/components/spawn",
            "ref/components/sphere",
            "ref/components/spheres",
            "ref/components/text",
            "ref/components/tonemapping",
            "ref/components/trigger",
            "ref/components/video",
            "ref/components/webview",
          ],
        },
        {
          type: "category",
          label: "Hooks",
          items: [
            "ref/hooks/use-world",
            "ref/hooks/use-eth",
            "ref/hooks/use-editing",
            "ref/hooks/use-fields",
            "ref/hooks/use-file",
            "ref/hooks/use-entity-uid",
            "ref/hooks/use-sync-state",
          ],
        },
        {
          type: "category",
          label: "Utils",
          items: [
            "ref/utils/deg2rad",
            "ref/utils/rad2deg",
            "ref/utils/euler",
            "ref/utils/matrix4",
            "ref/utils/quaternion",
            "ref/utils/vector3",
            "ref/utils/randomInt",
            "ref/utils/seed",
          ],
        },
        "ref/app-config",
        "ref/avatar-ref",
        "ref/event",
      ],
    },
    // "app.json", <-- need to fix this
    "uploading",
    "sync-state",
    "web3",
    "migration-2.0",
  ],
};
