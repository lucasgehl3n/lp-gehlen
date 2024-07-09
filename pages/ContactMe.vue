<template>
    <section class="bg-white dark:bg-gray-900" id="contactme">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <div v-if="showLoading">
                <center>
                    <svg aria-hidden="true"
                        class="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                        viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor" />
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill" />
                    </svg>
                    <span class="sr-only">Carregando...</span>
                </center>
            </div>
            <div v-else>
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                    Vamos Conversar?
                </h2>
                <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                    Tem alguma dúvida ou quer potencializar a presença digital do seu negócio? Preencha o formulário abaixo e eu entrarei em contato o mais rápido possível.                </p>
                <form action="#" class="space-y-8">
                    <div>
                        <FwbInput type="email" id="email" v-model="mail" :label="'Email'" placeholder="email@gmail.com"
                            required />
                    </div>
                    <div>
                        <FwbInput type="text" v-model="subject" :label="'Assunto'" placeholder="Como posso ajudar você"
                            required />
                    </div>
                    <div>
                        <FwbInput type="text" v-model="phone" v-maska :label="'Telefone'" placeholder="(99) 99999-9999"
                            required :data-maska="['(##) #####-####']" />
                    </div>
                    <div class="sm:col-span-2">
                        <FwbTextarea id="message" rows="6" v-model="message" :label="'Sua mensagem'"
                            placeholder="Deixe seu comentário..."></FwbTextarea>
                    </div>

                    <fwb-alert type="danger" v-if="errorMessage">
                        {{ errorMessage }}
                    </fwb-alert>

                    <div class="p-4 mb-4 text-sm rounded-lg bg-gray-800 dark:text-green-400" role="alert"
                        v-if="showSuccess">
                        <span class="font-medium text-green-400">Email enviado com sucesso!</span>
                        <span class="text-white"> Obrigado por entrar em contato.</span>
                    </div>

                    <a target="_blank" @click="send"
                        class="mobile-text-center-button inline-flex items-center text-white bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-primary-900 cursor-pointer">
                        Enviar
                    </a>
                </form>
            </div>
        </div>
    </section>
</template>

<script setup>
import axios from 'axios';
import { FwbInput, FwbTextarea, FwbAlert } from "flowbite-vue";

const mail = ref('');
const subject = ref('');
const message = ref('');
const phone = ref('');
const errorMessage = ref('');
const config = useRuntimeConfig()
const showLoading = ref(false);
const showSuccess = ref(false);

function send() {
    showSuccess.value = false;

    if (!validateData())
        return;

    const data = {
        mail: mail.value,
        subject: subject.value,
        message: message.value,
        phone: phone.value
    }

    showLoading.value = true;
    axios.post(config.baseURLBackend, data)
        .then(function (response) {
            if (response.data === 'Mail sent successfully') {
                showSuccess.value = true;
                clearFields();
            }
            else
                setError();
        })
        .catch(function (error) {
            setError();
        })
        .finally(function () {
            showLoading.value = false;
        })
}

function setError() {
    errorMessage.value = 'Erro ao enviar mensagem. Por favor, envie um e-mail para contato.lucasgehlen@gmail.com';
}

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validateData() {
    errorMessage.value = '';

    if (!validateEmail(mail.value)) {
        errorMessage.value = 'Email inválido';
        return false;
    }

    if (subject.value === '') {
        errorMessage.value = 'Assunto inválido';
        return false;
    }

    if (message.value === '') {
        errorMessage.value = 'Mensagem inválida';
        return false;
    }

    if (phone.value === '') {
        errorMessage.value = 'Telefone inválido';
        return false;
    }

    return true;
}

function clearFields() {
    mail.value = '';
    subject.value = '';
    message.value = '';
    phone.value = '';
}
</script>