import { createApp } from "vue";
import App from "./App.vue";

/* PrimeVue Import */
import "primeflex/primeflex.css";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import PrimeVue from "primevue/config";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import Textarea from "primevue/textarea";
import Divider from "primevue/divider";
import Toast from "primevue/toast";
import ConfirmDialog from "primevue/confirmdialog";
import Badge from "primevue/badge";
import Avatar from "primevue/avatar";

import ToastService from "primevue/toastservice";
import ConfirmationService from "primevue/confirmationservice";

const app = createApp(App);

app.use(PrimeVue, { ripple: true });
app.use(ToastService);
app.use(ConfirmationService);

app.component("Dialog", Dialog);
app.component("Button", Button);
app.component("Textarea", Textarea);
app.component("Divider", Divider);
app.component("Toast", Toast);
app.component("ConfirmDialog", ConfirmDialog);
app.component("Badge", Badge);
app.component("Avatar", Avatar);
app.mount("#app");

import BadgeDirective from "primevue/badgedirective";

app.directive("badge", BadgeDirective);
