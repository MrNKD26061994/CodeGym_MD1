class Moblie {
    battery;
    message;
    inbox;
    messageSent;
    status;

    constructor(battery, message, inbox, messageSent, status) {
        this.battery = battery;
        this.message = message;
        this.inbox = inbox;
        this.messageSent = messageSent;
        this.status = status;
    }

    setBattery(battery) {
        this.battery = battery;
    }

    getBattery() {
        return this.battery;
    }

    setMessage(message) {
        this.message = message;
    }

    getMessage() {
        return this.message;
    }
    setInbox(inbox) {
        this.inbox.push(inbox);
    }

    getInbox() {
        if(this.status === 1) {
            return this.inbox;
        } else {
            return '';
        }
    }
    setMessageSent(messageSent) {
        this.messageSent.push(messageSent);
    }

    getMessageSent() {
        return this.messageSent;
    }
    setStatus(status) {
        this.status = status;
    }

    getStatus() {
        this.setBattery(this.battery - 1);
        return this.status;
    }

    toggleStatus() {
        this.setBattery(this.battery - 1);
        if(this.getStatus() ===  0) {
            this.setStatus(1);
        } else {
            this.setStatus(0);
        }
    }

    upBattery() {
        this.setBattery(100);
    }

    writeMessage(mess) {
        if(this.status === 1) {
            this.setBattery(this.battery - 1);
            this.setMessage(mess);
        } else {
            return '';
        }

    }

    receiveMessage(mess) {
        this.setBattery(this.battery - 1);
        this.setInbox(mess);
    }

    sendMessage(mess) {
        if(this.status === 1) {
            this.setBattery(this.battery - 1);
            this.setMessageSent(mess);
        }
    }

    seeInbox() {
        if(this.status === 1) {
            this.setBattery(this.battery - 1);
            this.getInbox();
        }
    }

    seeMessageSent() {
        if(this.status === 1) {
            this.setBattery(this.battery - 1);
            this.getMessageSent();
        }
    }
}

let moblie01 = new Moblie(80, '', [], [], 1);
let moblie02 = new Moblie(90, 'Duy', [], [], 1);

function displayStatus(status) {
    if(status === 1) {
        return `đang bật`;
    } else {
        return `đang tắt`;
    }
}
document.write(`<h1>Điện thoại 01 trong trạng thái ${displayStatus(moblie01.getStatus())}</h1>`)

// moblie01.toggleStatus();

document.write(`<h1>Điện thoại 01 trong trạng thái ${displayStatus(moblie01.getStatus())}</h1>`)

document.write(`<h1>Hộp thư đến: ${moblie01.getInbox()}</h1>`)

moblie01.upBattery();

document.write(`<h1>Phần trăm PIN của điện thoại là: ${moblie01.getBattery()}</h1>`)

let mess = 'ABC D BF';
moblie01.writeMessage(mess);
document.write(`<h1>Tin nhắn đang soạn: ${moblie01.getMessage()}</h1>`)


moblie01.receiveMessage(moblie02.getMessage());
document.write(`<h1>Tin nhắn đã nhận từ 2: ${moblie01.getInbox()}</h1>`)

function sendMessToMoblie(mess, mobile) {
    moblie01.sendMessage(mess);
    mobile.receiveMessage(moblie01.getMessage())
}

sendMessToMoblie(moblie01.getMessage(), moblie02);

document.write(`<h1>Hộp thư đến: ${moblie01.getInbox()}</h1>`)

document.write(`<h1>Tin đã gửi: ${moblie01.getMessageSent()}</h1>`)

console.log(moblie01)



