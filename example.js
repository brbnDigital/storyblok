const { UpdateAsset } = require("@brbndigital/storyblok")

UpdateAsset(4004459, {
    title: "THIS IS JUST A TEST",
    short_filename: "this-is-just-a-test.webp"
}).then(asset => {
    console.log(asset)
})
