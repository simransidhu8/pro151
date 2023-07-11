AFRAME.registerComponent("car-model", {
    schema: {
        modelRef: {type: "string", default: "../assets/car/scene.gltf"}
    },

    init: function(){
        this.el.setAttribute("gltf-model", this.data.modelRef)
        this.el.setAttribute("position", {x: 0, y: 0, z: 80})
        this.el.setAttribute("rotation", {x: 0, y: -100, z: 0})
    }
})