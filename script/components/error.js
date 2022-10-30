'use strict';

// Error Function 

function CreateError(Error){
    const erorrMessage = Error;
    spaceXLoading.classList.remove('active');
    spaceXLoading.classList.add('hidden');

    main.innerHTML += `
    <div class="error" id="error__box">
        <ul class="Error__List">
            <li>
                <h3>${errorMessageHead}</h3>
            </li>
            <li>
                <button id="#error__btn" onclick="closeErrorBox()" type="button"><i class="fa-solid fa-xmark"></i></button>
            </li>
        </ul>
        <p>${errorMessageSub}</p>
        <p>Error Message: ${erorrMessage}</p>
    </div>
    `
}



function closeErrorBox(){
    errorBox.classList.toggle('error');
    errorBox.classList.add('hidden');
}