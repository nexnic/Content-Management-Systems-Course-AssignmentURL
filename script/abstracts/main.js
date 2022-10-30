// Global variable
    // DOM
        // header 
            const header = document.querySelector('header');
        // Secondary nav
           
        // cart 
            const cart = document.querySelector('#cart');
            // 
                const cartLeft = document.querySelector('#cart__left')

                const cartright = document.querySelector('#cart__right');

                const CartD = document.querySelector('.showcart')
        
        // Product Div 
            const productSection = document.querySelector(".productShow");
    // Icon 
        // icon 
            // cart empty 
                const cartEmpty = '<i class="fa-solid fa-cart-arrow-down"></i>';

            // cart Adding
                const cartPluss = '<i class="fa-solid fa-cart-plus"></i>';
          // Form
          const form = document.querySelector('.form-contact');
          // Form Input Name
              const formIN = document.querySelector('#fullName');
          // Form NameText Required
              const formINT = document.querySelector('#fName');
          // Form Input Mail
              const formIM = document.querySelector('#mail');
          // Form MailText Required
              const formEM = document.querySelector('#email');
          // Form Input Address
              const formA = document.querySelector('#address');
          // Form AdressText Required
              const formAT = document.querySelector('#addressReq');
          // Form Input Subject
              const formS =  document.querySelector('#Subject');
          // Form Subject Required 
              const formST = document.querySelector('#SubjectReq');
          // Form Button
              const formBtn = document.querySelector('#form-submit');
              // loader
              const apiloader = document.querySelector('.loading');
        
            // User
                const openKey = 'ck_f5e2623a2d8dd41ad65e7b0af470a02e1f9837b6';

            // Password
                const secretKey = 'cs_4b6217333e8a80ea461ddd73dc67b749edb65127';


                // API URL
    const URL = 'https://rainydays.frontendkenterik.no/wp-json/wc/v3/';

    function bAuth(key, secret) {
        let hash = btoa(key + ':' + secret);
        return 'Basic ' + hash;
    }



        let auth = bAuth(openKey, secretKey);

// global veriable for this page. 
    
    // Error handling 

        //Error heading 
            let errorMessageHead = "";

        // Error Subheading
            let errorMessageSub = "";

        // Error message
            let erorrMessage = "";
