
require(["./progressbar"], function(progressbar) {
    const app = Vue.createApp({
        setup() {
            const progressValue = Vue.ref(50);
            const onChangeProgressValue = (delta) => {
                const newValue = progressValue.value + delta;
                if(newValue <= 100 && newValue >= 0) {
                    progressValue.value = newValue;
                }
            }
            return {
                progressValue,
                onChangeProgressValue
            };
        },
        components: {
            AProgressBar: progressbar
        }
    });

    app.mount('#app');
})