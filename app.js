new Vue({
    el: '#app',
    data() {
        return {
            smartphone_container: false,
            ac_container:false,
            cooler_container:false,
            fridge_container:false,
            tv_container:false,
            washing_machine:false,

            show_main_section2:true,
            thanks_info:false,

            phoneBrands: [ 'ALACATEL', 'Coolpad', 'Gionee', 'Huawei', 'lenovo', 'realme', 'OnePlus', 'Oppo' , 'MI' , 'ZTE' ,'Other Chinese brand '],
            ACBrands: [ 'HISETISE', 'Midea', 'Other Chinese Brand', ],
            fridgeBrands:['Haier','TCL','Other Chinese Brand'],
            tvBrands:['Mi','realme', 'Letv','TCL','Other Chinese Brand'],
            WashingMachineBrands: ['Haier','Siemens','TCL','Other Chinese Brand']

        }
    },
    methods: {
        show_smartphone_conatiner(){
            this.smartphone_container= true;
            this.cooler_container= false;
            this.fridge_container= false;
            this.tv_container= false;
            this.ac_container= false;
            this.washing_machine= false;


            this. show_main_section2=false;
        },
        show_cooler_conatiner(){
            this.cooler_container= true;
            this.smartphone_container= false;
            this.fridge_container= false;
            this.tv_container= false;
            this.ac_container= false;
            this.washing_machine= false;

            this. show_main_section2=false;
        },
        show_fridge_conatiner(){
            this.fridge_container= true;
            this.cooler_container= false;
            this.smartphone_container= false;
            this.tv_container= false;
            this.ac_container= false;
            this.washing_machine= false;

            this. show_main_section2=false;
        },
       
        show_tv_conatiner(){
            this.tv_container= true;
            this.fridge_container= false;
            this.cooler_container= false;
            this.smartphone_container= false;
            this.ac_container= false;
            this.washing_machine= false;

            this. show_main_section2=false;
        },
        show_ac_conatiner(){
            this.ac_container= true;
            this.tv_container= false;
            this.fridge_container= false;
            this.cooler_container= false;
            this.smartphone_container= false;
            this.washing_machine= false;

            this. show_main_section2=false;
        },
        show_washingmachine_conatiner(){
            this.washing_machine= true;
            this.ac_container= false;
            this.tv_container= false;
            this.fridge_container= false;
            this.cooler_container= false;
            this.smartphone_container= false;

            this. show_main_section2=false;
          
        },

        SendDataPositive(){
            window.sendData("OTHERS");
            this.thanks_info= true;
            this.washing_machine= false;
            this.ac_container= false;
            this.tv_container= false;
            this.fridge_container= false;
            this.cooler_container= false;
            this.smartphone_container= false;
            this. show_main_section2=false;

            setTimeout(() => {
                this.thanks_info= false;
                window.location.reload();
            }, 2000);
          
        },
        SendDataNegative(){
            window.sendData("CHINESE");
            this.thanks_info= true;
            this.washing_machine= false;
            this.ac_container= false;
            this.tv_container= false;
            this.fridge_container= false;
            this.cooler_container= false;
            this.smartphone_container= false;
            this. show_main_section2=false;

            setTimeout(() => {
                this.thanks_info= false;
                window.location.reload();
            }, 2000);
        }
    },
})