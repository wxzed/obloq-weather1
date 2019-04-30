/*！
 * @file Obloq/Obloq.ts
 * @brief DFRobot's obloq makecode library.
 * @n [Get the module here](http://www.dfrobot.com.cn/goods-1577.html)
 * @n Obloq is a serial port of WIFI connection module, Obloq can connect 
 *    to Microsoft Azure IoT and other standard MQTT protocol IoT.
 *
 * @copyright	[DFRobot](http://www.dfrobot.com), 2016
 * @copyright	GNU Lesser General Public License
 *
 * @author [email](xiao.wu@dfrobot.com)
 * @version  V1.0
 * @date  2019-04-30
 */


//debug


const OBLOQ_DEBUG = false
//wrong type
const OBLOQ_ERROR_TYPE_IS_SUCCE = 0
const OBLOQ_ERROR_TYPE_IS_ERR = 1
const OBLOQ_ERROR_TYPE_IS_WIFI_CONNECT_TIMEOUT = -1
const OBLOQ_ERROR_TYPE_IS_WIFI_CONNECT_FAILURE = -2
//data type
const OBLOQ_STR_TYPE_IS_NONE = ""
const OBLOQ_BOOL_TYPE_IS_TRUE = true
const OBLOQ_BOOL_TYPE_IS_FALSE = false

//topics name
enum TOPIC {
    topic_1 = 1,
    topic_2 = 2,
    topic_3 = 3,
    topic_4 = 4
}

enum LOCATION {
    //%block="Sentosa"
    Sentosa = 0,
    //%block="Pulau Ubin"
    Pulau_Ubin = 1,
    //%block="Pulau Tekong"
    Pulau_Tekong = 2,
    //%block="Jurong Island"
    Jurong_Island = 3,
    //%block="Tuas"
    Tuas = 4,
    //%block="Changi"
    Changi = 5,
    //%block="City"
    City = 6,
    //%block="Woodlands"
    Woodlands = 7,
    //%block="Lim Chu Kang"
    Lim_Chu_Kang = 8,
    //%block="Central Water Catchment"
    Central_Water_Catchment = 9,
    //%block="Bukit Timah"
    Bukit_Timah = 10,
    //%block="Punggol"
    Punggol = 11,
    //%block="Tanglin"
    Tanglin = 12,
    //%block="Novena"
    Novena = 13,
    //%block="Marine Parade"
    Marine_Parade = 14,
    //%block="Tampines"
    Tampines = 15,
    //%block="Jurong East"
    Jurong_East = 16,
    //%block="Paya Lebar"
    Paya_Lebar = 17,
    //%block="Queenstown"
    Queenstown = 18,
    //%block="Kallang"
    Kallang = 19
}

/**
 *Obloq implementation method.
 */
//% weight=10 color=#008B00 icon="\uf1eb" block="Obloq-weather"
namespace ObloqWeather{

    //serial
    let OBLOQ_SERIAL_INIT = OBLOQ_BOOL_TYPE_IS_FALSE
    let OBLOQ_SERIAL_TX = SerialPin.P2
    let OBLOQ_SERIAL_RX = SerialPin.P1
    //wifi
    let OBLOQ_WIFI_SSID = OBLOQ_STR_TYPE_IS_NONE
    let OBLOQ_WIFI_PASSWORD = OBLOQ_STR_TYPE_IS_NONE
    let OBLOQ_WIFI_IP = "0.0.0.0"
    //http
    let OBLOQ_HTTP_IP = OBLOQ_STR_TYPE_IS_NONE
    let OBLOQ_HTTP_PORT = 8080
    let OBLOQ_HTTP_BUSY = OBLOQ_BOOL_TYPE_IS_FALSE
    //state
    let OBLOQ_WIFI_CONNECTED = OBLOQ_BOOL_TYPE_IS_FALSE
    let OBLOQ_WIFI_CONNECT_FIRST = OBLOQ_BOOL_TYPE_IS_TRUE
    let OBLOQ_MQTT_INIT = OBLOQ_BOOL_TYPE_IS_FALSE
    let OBLOQ_HTTP_INIT = OBLOQ_BOOL_TYPE_IS_FALSE
    //callback
    let OBLOQ_MQTT_CB: Action[] = [null, null, null, null, null]
    //commands
    let OBLOQ_ANSWER_CMD = OBLOQ_STR_TYPE_IS_NONE
    let OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
    let OBLOQ_WRONG_TYPE = OBLOQ_STR_TYPE_IS_NONE
    //animation
    let OBLOQ_WIFI_ICON = 1
    let OBLOQ_MQTT_ICON = 1
    //event
    let OBLOQ_MQTT_EVENT = OBLOQ_BOOL_TYPE_IS_FALSE
    //mode
    let OBLOQ_WORKING_MODE_IS_MQTT = OBLOQ_BOOL_TYPE_IS_FALSE
    let OBLOQ_WORKING_MODE_IS_HTTP = OBLOQ_BOOL_TYPE_IS_FALSE
    let OBLOQ_WORKING_MODE_IS_STOP = OBLOQ_BOOL_TYPE_IS_TRUE
    let G_city = 0;


    export enum SERVERS {
        //% blockId=SERVERS_China block="China"
        China,
        //% blockId=SERVERS_Global block="Global"
        Global
    }

    export class PacketaMqtt {
        /**
         * Obloq receives the message content.
         */
        public message: string;
    }


    //% advanced=true shim=Obloq::obloqSetTxBufferSize
    function obloqSetTxBufferSize(size: number): void {
        return
    }

    //% advanced=true shim=Obloq::obloqSetRxBufferSize
    function obloqSetRxBufferSize(size: number): void {
        return
    }

    //% advanced=true shim=Obloq::obloqEventOn
    function obloqEventOn(): void {
        return
    }

    //% advanced=true shim=Obloq::obloqClearRxBuffer
    function obloqClearRxBuffer(): void {
        return
    }

    //% advanced=true shim=Obloq::obloqClearTxBuffer
    function obloqClearTxBuffer(): void {
        return
    }

    //% advanced=true shim=Obloq::obloqforevers
    function obloqforevers(a: Action): void {
        return
    }

    function obloqWriteString(text: string): void {
        serial.writeString(text)
    }

    function Obloq_wifi_icon_display(): void {
        switch (OBLOQ_WIFI_ICON) {
            case 1: {
                basic.clearScreen()
                led.plot(0, 4)
                OBLOQ_WIFI_ICON += 1
            } break;
            case 2: {
                led.plot(0, 2)
                led.plot(1, 2)
                led.plot(2, 3)
                led.plot(2, 4)
                OBLOQ_WIFI_ICON += 1
            } break;
            case 3: {
                led.plot(0, 0)
                led.plot(1, 0)
                led.plot(2, 0)
                led.plot(3, 1)
                led.plot(4, 2)
                led.plot(4, 3)
                led.plot(4, 4)
                OBLOQ_WIFI_ICON = 1
            } break;
        }
    }

    function Obloq_mark_reset(type: string): void {
        if (type == "wifi") {
            OBLOQ_WIFI_IP = "0.0.0.0"
            OBLOQ_WIFI_CONNECT_FIRST = OBLOQ_BOOL_TYPE_IS_TRUE
            OBLOQ_WIFI_CONNECTED = OBLOQ_BOOL_TYPE_IS_FALSE
        }
        OBLOQ_MQTT_INIT = OBLOQ_BOOL_TYPE_IS_FALSE
        OBLOQ_HTTP_INIT = OBLOQ_BOOL_TYPE_IS_FALSE
        OBLOQ_WIFI_ICON = 1
        OBLOQ_WIFI_ICON = 1
        led.stopAnimation()
        basic.clearScreen()
    }

    function Obloq_serial_init(): void {
        let item = OBLOQ_STR_TYPE_IS_NONE
        //First send data through usb, avoid the first data scrambled.
        obloqWriteString("123")
        item = serial.readString()
        item = serial.readString()
        item = serial.readString()
        serial.redirect(
            OBLOQ_SERIAL_TX,
            OBLOQ_SERIAL_RX,
            BaudRate.BaudRate9600
        )
        obloqSetTxBufferSize(300)
        obloqSetRxBufferSize(300)
        obloqWriteString("\r")
        item = serial.readString()
        OBLOQ_SERIAL_INIT = OBLOQ_BOOL_TYPE_IS_TRUE
        obloqClearRxBuffer()
        obloqClearTxBuffer()
        onEvent()
    }

    function Obloq_start_connect_http(): void {
        OBLOQ_WORKING_MODE_IS_HTTP = OBLOQ_BOOL_TYPE_IS_TRUE
        let ret = Obloq_connect_wifi()
        if (OBLOQ_DEBUG) { basic.showNumber(ret) }
        switch (ret) {
            case OBLOQ_ERROR_TYPE_IS_SUCCE: {
                basic.showIcon(IconNames.Yes)
                basic.pause(500)
                basic.clearScreen()
                OBLOQ_WIFI_CONNECTED = OBLOQ_BOOL_TYPE_IS_TRUE
            } break
            case OBLOQ_ERROR_TYPE_IS_WIFI_CONNECT_TIMEOUT: {
                basic.showIcon(IconNames.No)
                basic.pause(500)
                OBLOQ_WRONG_TYPE = "wifi connect timeout"
                return
            } break
            case OBLOQ_ERROR_TYPE_IS_WIFI_CONNECT_FAILURE: {
                basic.showIcon(IconNames.No)
                basic.pause(500)
                OBLOQ_WRONG_TYPE = "wifi connect failure"
                return
            } break
            case OBLOQ_ERROR_TYPE_IS_ERR: {
                basic.showNumber(ret)
                basic.showIcon(IconNames.No)
                while (OBLOQ_BOOL_TYPE_IS_TRUE) { basic.pause(10000) }
            } break
        }
        OBLOQ_HTTP_INIT = OBLOQ_BOOL_TYPE_IS_TRUE
        OBLOQ_WORKING_MODE_IS_STOP = OBLOQ_BOOL_TYPE_IS_FALSE
    }

    basic.forever(() => {
        if (OBLOQ_DEBUG) { led.plot(0, 0) }
        basic.pause(150)
        if ((OBLOQ_WRONG_TYPE == "wifi disconnect") ||
            (OBLOQ_WRONG_TYPE == "wifi connect timeout") ||
            (OBLOQ_WRONG_TYPE == "wifi connect failure") ||
            (OBLOQ_WRONG_TYPE == "mqtt pulish failure") ||
            (OBLOQ_WRONG_TYPE == "mqtt subtopic timeout") ||
            (OBLOQ_WRONG_TYPE == "mqtt subtopic failure") ||
            (OBLOQ_WRONG_TYPE == "mqtt connect timeout") ||
            (OBLOQ_WRONG_TYPE == "mqtt connect failure")) {
            OBLOQ_WORKING_MODE_IS_STOP = OBLOQ_BOOL_TYPE_IS_TRUE
            let type = "wifi"//OBLOQ_WRONG_TYPE.substr(0,4)
            Obloq_mark_reset(type)
            if (OBLOQ_DEBUG) { basic.showString(OBLOQ_WRONG_TYPE) }
            if (OBLOQ_WORKING_MODE_IS_HTTP) {
                Obloq_start_connect_http()
                if (OBLOQ_HTTP_INIT) {
                    OBLOQ_WRONG_TYPE = OBLOQ_STR_TYPE_IS_NONE
                    OBLOQ_WORKING_MODE_IS_STOP = OBLOQ_BOOL_TYPE_IS_FALSE
                }
            }

        }
        if (OBLOQ_DEBUG) { led.unplot(0, 0) }
        basic.pause(150)
    })

    /**
     * Two parallel stepper motors are executed simultaneously(DegreeDual).
     * @param SSID to SSID ,eg: "yourSSID"
     * @param PASSWORD to PASSWORD ,eg: "yourPASSWORD"
     * @param IP to IP ,eg: "0.0.0.0"
     * @param PORT to PORT ,eg: 80
     * @param receive to receive ,eg: SerialPin.P1
     * @param send to send ,eg: SerialPin.P2
    */
    //% weight=99
    //% receive.fieldEditor="gridpicker" receive.fieldOptions.columns=3
    //% send.fieldEditor="gridpicker" send.fieldOptions.columns=3
    //% blockId=Obloq_http_setup
    //% block="Obloq setup http | Pin set: | receiving data (green wire): %receive| sending data (blue wire): %send | Wi-Fi: | name: %SSID| password: %PASSWORD| start connection"
    export function Obloq_http_setup(/*serial*/receive: SerialPin, send: SerialPin,
                                     /*wifi*/SSID: string, PASSWORD: string
    ):
        void {
        OBLOQ_WIFI_SSID = SSID
        OBLOQ_WIFI_PASSWORD = PASSWORD
        OBLOQ_SERIAL_TX = send
        OBLOQ_SERIAL_RX = receive
        Obloq_serial_init()
        Obloq_start_connect_http()
    }

    //% weight=80
    //% blockId=Obloq_Weather_setLocation
    //% block="Set Location|%location"
    export function Set_location(location: LOCATION): void {
        G_city = location;
    }
    function get_city(): string {
        let city = "";
        switch (G_city) {
            case 0:
                city = "Sentosa";
                break;
            case 1:
                city = "Pulau_Ubin";
                break;
            case 2:
                city = "Pulau_Tekong";
                break;
            case 3:
                city = "Jurong_Island";
                break;
            case 4:
                city = "Tuas";
                break;
            case 5:
                city = "Changi";
                break;
            case 6:
                city = "City";
                break;
            case 7:
                city = "Woodlands";
                break;
            case 8:
                city = "Lim_Chu_Kang";
                break;
            case 9:
                city = "Central_Water_Catchment";
                break;
            case 10:
                city = "Bukit_Timah";
                break;
            case 11:
                city = "Punggol";
                break;
            case 12:
                city = "Tanglin";
                break;
            case 13:
                city = "Novena";
                break;
            case 14:
                city = "Marine_Parade";
                break;
            case 15:
                city = "Tampines";
                break;
            case 16:
                city = "Jurong_East";
                break;
            case 17:
                city = "Paya_Lebar";
                break;
            case 18:
                city = "Queenstown";
                break;
            case 19:
                city = "Kallang";
                break;
            default:
                city = "Sentosa";
                break;
        }
        return city;


    }
    function get_request(city: string, info: string): string {
        while (OBLOQ_WORKING_MODE_IS_STOP) { basic.pause(20) }
        if (!OBLOQ_HTTP_INIT)
            return OBLOQ_STR_TYPE_IS_NONE

        if (!OBLOQ_SERIAL_INIT) {
            Obloq_serial_init()
        }
        obloqWriteString("|3|1|http://api.dfrobot.top/weather?city=Singapore&locations=" + city + "&info=" + info + "|\r")
        //obloqWriteString("|3|1|http://192.168.1.103:1125/weather?city=Singapore&locations=" + city + "&info=" + info + "|\r")

        return Obloq_http_wait_request(10000);
    }
    //% weight=80
    //% blockId=Obloq_Weather_getWeather
    //% block="get weather"
    export function get_weather(): string {
        let city = get_city();
        let ret = get_request(city, "weather");
        let len = <number>ret.length() - 1;
        return ret.substr(0, len);
    }
    /*
    //% weight=80
    //% blockId=Obloq_Weather_getRainfall
    //% block="get rainfall"
    export function get_rainfall(): string {
        let city = get_city();
        let ret = get_request(city, "rainfall");
        let len = <number>ret.length() - 1;
        ret = ret.substr(0, len);
        return ret;
    }*/

    //% weight=80
    //% blockId=Obloq_Weather_getTemperature
    //% block="get temperature"
    export function get_temperature(): string {
        let city = get_city();
        let ret = get_request(city, "temp_high/temp_low")
        let len = <number>ret.length() - 1;
        return ret.substr(0, len);
    }

    //% weight=80
    //% blockId=Obloq_Weather_getHumidity
    //% block="get humidity"
    export function get_humidity(): string {
        let city = get_city();
        let ret = get_request(city, "humi_high/humi_low")
        let len = <number>ret.length() - 1;
        return ret.substr(0, len);
    }

    //% weight=80
    //% blockId=Obloq_Weather_getWindSpeed
    //% block="Get wind speed"
    export function get_windSpeed(): string {
        let city = get_city();
        let ret = get_request(city, "winds_max/winds_min");
        let len = <number>ret.length() - 1;
        return ret.substr(0, len);
    }

    /**
     * Send the ping.time(ms): private long maxWait
     * @param time to timeout, eg: 10000
    */
    //% weight=49
    //% blockId=Obloq_send_ping
    //% block="sendPing"
    //% advanced=true
    export function Obloq_send_ping(): boolean {
        while (OBLOQ_WORKING_MODE_IS_STOP) { basic.pause(20) }
        let time = 5000
        if (time < 100) {
            time = 100
        }
        let timeout = time / 100
        let _timeout = 0
        if (!OBLOQ_SERIAL_INIT) {
            Obloq_serial_init()
        }
        obloqWriteString("|1|1|\r")

        while (OBLOQ_BOOL_TYPE_IS_TRUE) {
            if (OBLOQ_ANSWER_CMD == "PingOk") {
                return OBLOQ_BOOL_TYPE_IS_TRUE
            } else if (OBLOQ_ANSWER_CMD == "timeout") {
                return OBLOQ_BOOL_TYPE_IS_FALSE
            }
            basic.pause(100)
            _timeout += 1
            if (_timeout > timeout) {
                if (OBLOQ_ANSWER_CMD != "PingOk") {
                    return OBLOQ_BOOL_TYPE_IS_FALSE
                }
                else {
                    return OBLOQ_BOOL_TYPE_IS_TRUE
                }
            }
        }
        return OBLOQ_BOOL_TYPE_IS_FALSE
    }


    /**
     * Get the software version.time(ms): private long maxWait
     * @param time to timeout, eg: 10000
    */
    //% weight=50
    //% blockId=Obloq_get_version
    //% block="get version"
    //% advanced=true
    export function Obloq_get_version(): string {
        while (OBLOQ_WORKING_MODE_IS_STOP) { basic.pause(20) }
        let time = 5000
        if (time < 100) {
            time = 100
        }
        let timeout = time / 100
        let _timeout = 0
        if (!OBLOQ_SERIAL_INIT) {
            Obloq_serial_init()
        }
        obloqWriteString("|1|2|\r")

        while (OBLOQ_BOOL_TYPE_IS_TRUE) {
            if (OBLOQ_ANSWER_CMD == "GetVersion") {
                return OBLOQ_ANSWER_CONTENT
            } else if (OBLOQ_ANSWER_CMD == "timeout") {
                return "timeout"
            }
            basic.pause(100)
            _timeout += 1
            if (_timeout > timeout) {
                if (OBLOQ_ANSWER_CMD != "GetVersion") {
                    return "timeout"
                }
                else {
                    return OBLOQ_ANSWER_CONTENT
                }
            }
        }
        return OBLOQ_STR_TYPE_IS_NONE
    }


    /**
     * Heartbeat request.time(ms): private long maxWait
     * @param time to timeout, eg: 10000
    */
    //% weight=48
    //% blockId=Obloq_get_heartbeat
    //% block="get heartbeat"
    //% advanced=true
    export function Obloq_get_heartbeat(): boolean {
        while (OBLOQ_WORKING_MODE_IS_STOP) { basic.pause(20) }
        let time = 5000
        if (time < 100) {
            time = 100
        }
        let timeout = time / 100
        let _timeout = 0
        if (!OBLOQ_SERIAL_INIT) {
            Obloq_serial_init()
        }
        obloqWriteString("|1|3|" + time + "|\r")

        while (OBLOQ_BOOL_TYPE_IS_TRUE) {
            if (OBLOQ_ANSWER_CMD == "Heartbeat") {
                return OBLOQ_BOOL_TYPE_IS_TRUE
            } else if (OBLOQ_ANSWER_CMD == "timeout") {
                return OBLOQ_BOOL_TYPE_IS_FALSE
            }
            basic.pause(100)
            _timeout += 1
            if (_timeout > timeout) {
                if (OBLOQ_ANSWER_CMD != "Heartbeat") {
                    return OBLOQ_BOOL_TYPE_IS_FALSE
                }
                else {
                    return OBLOQ_BOOL_TYPE_IS_TRUE
                }
            }
        }
        return OBLOQ_BOOL_TYPE_IS_FALSE
    }

    /**
     * Stop the heartbeat request.
    */
    //% weight=47
    //% blockId=Obloq_stop_heartbeat
    //% block="stop heartbeat"
    //% advanced=true
    export function Obloq_stop_heartbeat(): boolean {
        while (OBLOQ_WORKING_MODE_IS_STOP) { basic.pause(20) }
        let time = 5000
        if (time < 100) {
            time = 100
        }
        let timeout = time / 100
        let _timeout = 0
        if (!OBLOQ_SERIAL_INIT) {
            Obloq_serial_init()
        }
        obloqWriteString("|1|3|-2|\r")

        while (OBLOQ_BOOL_TYPE_IS_TRUE) {
            if (OBLOQ_ANSWER_CMD == "Heartbeat") {
                return OBLOQ_BOOL_TYPE_IS_TRUE
            } else if (OBLOQ_ANSWER_CMD == "timeout") {
                return OBLOQ_BOOL_TYPE_IS_FALSE
            }
            basic.pause(100)
            _timeout += 1
            if (_timeout > timeout) {
                if (OBLOQ_ANSWER_CMD != "Heartbeat") {
                    return OBLOQ_BOOL_TYPE_IS_FALSE
                }
                else {
                    return OBLOQ_BOOL_TYPE_IS_TRUE
                }
            }
        }
        return OBLOQ_BOOL_TYPE_IS_FALSE
    }


    function Obloq_disconnect_wifi(): boolean {
        while (OBLOQ_WORKING_MODE_IS_STOP) { basic.pause(20) }
        let time = 5000
        if (time < 100) {
            time = 100
        }
        let timeout = time / 100
        let _timeout = 0
        if (!OBLOQ_SERIAL_INIT) {
            Obloq_serial_init()
        }
        obloqWriteString("|2|2|\r")

        while (OBLOQ_BOOL_TYPE_IS_TRUE) {
            if (OBLOQ_ANSWER_CMD == "WifiDisconnect") {
                Obloq_mark_reset("wifi")
                return OBLOQ_BOOL_TYPE_IS_TRUE
            } else if (OBLOQ_ANSWER_CMD == "timeout") {
                return OBLOQ_BOOL_TYPE_IS_FALSE
            }
            basic.pause(100)
            _timeout += 1
            if (_timeout > timeout) {
                if (OBLOQ_ANSWER_CMD != "WifiDisconnect") {
                    return OBLOQ_BOOL_TYPE_IS_FALSE
                }
                else {
                    return OBLOQ_BOOL_TYPE_IS_TRUE
                }
            }
        }
        return OBLOQ_BOOL_TYPE_IS_FALSE
    }


    function Obloq_connect_wifi(): number {
        if (OBLOQ_WIFI_CONNECTED == OBLOQ_BOOL_TYPE_IS_TRUE) {
            return OBLOQ_ERROR_TYPE_IS_SUCCE
        }

        OBLOQ_WIFI_ICON = 1
        let timeout = 10000  //Set the default timeout period 10s.
        timeout = timeout < 100 ? 100 : timeout //Timeout minimum resolution 100ms

        let timeout_count_max = timeout / 100
        let timeout_count_now = 0
        if (OBLOQ_WIFI_CONNECT_FIRST) {
            //serial init
            if (!OBLOQ_SERIAL_INIT) {
                Obloq_serial_init()
            }
            //show icon
            Obloq_wifi_icon_display()
            for (let i = 0; i < 3; i++) {
                obloqWriteString("|1|1|\r")
                basic.pause(100)
            }
            obloqWriteString("|2|1|" + OBLOQ_WIFI_SSID + "," + OBLOQ_WIFI_PASSWORD + "|\r") //Send wifi account and password instructions
            OBLOQ_WIFI_CONNECT_FIRST = OBLOQ_BOOL_TYPE_IS_FALSE
        }

        while (OBLOQ_BOOL_TYPE_IS_TRUE) {
            if ((timeout_count_now + 1) % 3 == 0) {
                Obloq_wifi_icon_display()
            }
            if (OBLOQ_ANSWER_CMD == "WifiConnected") {
                OBLOQ_WIFI_IP = OBLOQ_ANSWER_CONTENT
                return OBLOQ_ERROR_TYPE_IS_SUCCE
            } else if (OBLOQ_ANSWER_CMD == "WifiConnectFailure") {
                return OBLOQ_ERROR_TYPE_IS_WIFI_CONNECT_FAILURE
            }
            basic.pause(100)
            timeout_count_now += 1
            if (timeout_count_now > timeout_count_max) {
                //basic.showIcon(IconNames.No)
                return OBLOQ_ERROR_TYPE_IS_WIFI_CONNECT_TIMEOUT
            }
        }
        return OBLOQ_ERROR_TYPE_IS_ERR
    }

    /**
     * Get IP address.
    */
    //% weight=98
    //% blockId=Obloq_Obloq_ifconfig
    //% block="ipconfig"
    //% advanced=true
    export function Obloq_wifi_ipconfig(): string {
        while (OBLOQ_WORKING_MODE_IS_STOP) { basic.pause(20) }
        return OBLOQ_WIFI_IP
    }


    function Obloq_http_wait_request(time: number): string {
        if (time < 100) {
            time = 100
        }
        let timeout = time / 100
        let _timeout = 0

        while (OBLOQ_BOOL_TYPE_IS_TRUE) {
            basic.pause(100)
            if (OBLOQ_ANSWER_CMD == "200") {//http请求成功
                return OBLOQ_ANSWER_CONTENT //返回消息
            } else if (OBLOQ_ANSWER_CMD == "-1") {//获取数据失败
                Obloq_http_wrong_animation("requestFailed")
                return OBLOQ_STR_TYPE_IS_NONE
            } else if (OBLOQ_ANSWER_CMD == "1") {//http请求字段错误
                Obloq_http_wrong_animation("requestFailed")
                return OBLOQ_STR_TYPE_IS_NONE
            }

            _timeout += 1
            if (_timeout > timeout) {
                Obloq_http_wrong_animation("timeOut")
                return OBLOQ_STR_TYPE_IS_NONE
            }
        }

        return OBLOQ_STR_TYPE_IS_NONE
    }

    function Obloq_http_wrong_animation(wrongType: string): void {
        if (wrongType == "requestFailed") {  //http 请求失败或者字段错误动画
            basic.showIcon(IconNames.No, 10)
            basic.pause(500)
            for (let i = 0; i < 3; i++) {
                basic.clearScreen()
                basic.pause(100)
                basic.showIcon(IconNames.No, 10)
                basic.pause(50)
            }
        } else if (wrongType == "timeOut") { //http 请求超时动画
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . . . .
                . . # . .
                `, 10)
            basic.pause(500)
            for (let i = 0; i < 3; i++) {
                basic.clearScreen()
                basic.pause(100)
                basic.showLeds(`
                    . . # . .
                    . . # . .
                    . . # . .
                    . . . . .
                    . . # . .
                    `, 10)
                basic.pause(50)
            }
        }
        basic.pause(150)
        basic.clearScreen()
    }

    /**
     * The HTTP get request.url(string):URL:time(ms): private long maxWait
     * @param time set timeout, eg: 10000
    */
    /*
    //% weight=79
    //% blockId=Obloq_http_get
    //% block="http(get) | url %url| timeout(ms) %time"
    //% advanced=false
    export function Obloq_http_get(url: string, time: number): string {
        while (OBLOQ_WORKING_MODE_IS_STOP) { basic.pause(20) }
        if (!OBLOQ_HTTP_INIT)
            return OBLOQ_STR_TYPE_IS_NONE

        if (!OBLOQ_SERIAL_INIT) {
            Obloq_serial_init()
        }
        obloqWriteString("|3|1|http://" + OBLOQ_HTTP_IP + ":" + OBLOQ_HTTP_PORT + "/" + url + "|\r")

        return Obloq_http_wait_request(time)
    }*/

    /**
     * The HTTP post request.url(string): URL; content(string):content
     * time(ms): private long maxWait
     * @param time set timeout, eg: 10000
    */
    /*
    //% weight=78
    //% blockId=Obloq_http_post
    //% block="http(post) | url %url| content %content| timeout(ms) %time"
    export function Obloq_http_post(url: string, content: string, time: number): string {
        while (OBLOQ_WORKING_MODE_IS_STOP) { basic.pause(20) }
        if (!OBLOQ_HTTP_INIT)
            return OBLOQ_STR_TYPE_IS_NONE

        if (!OBLOQ_SERIAL_INIT) {
            Obloq_serial_init()
        }
        obloqWriteString("|3|2|http://" + OBLOQ_HTTP_IP + ":" + OBLOQ_HTTP_PORT + "/" + url + "," + content + "|\r")

        return Obloq_http_wait_request(time)
    }
    */

    /**
     * The HTTP put request,Obloq.put() can only be used for http protocol!
     * url(string): URL; content(string):content; time(ms): private long maxWait
     * @param time set timeout, eg: 10000
    */
    //% weight=77
    //% blockId=Obloq_http_put
    //% block="http(put) | url %url| content %content| timeout(ms) %time"
    /*
    export function Obloq_http_put(url: string, content: string, time: number): string {
        while (OBLOQ_WORKING_MODE_IS_STOP) { basic.pause(20) }
        if (!OBLOQ_HTTP_INIT)
            return OBLOQ_STR_TYPE_IS_NONE

        if (!OBLOQ_SERIAL_INIT) {
            Obloq_serial_init()
        }
        obloqWriteString("|3|3|http://" + OBLOQ_HTTP_IP + ":" + OBLOQ_HTTP_PORT + "/" + url + "," + content + "|\r")

        return Obloq_http_wait_request(time)
    }*/




    /**
     * Delete an HTTP connection.url(string): URL; content(string):content
     * time(ms): private long maxWait
     * @param time set timeout, eg: 10000
    */
    /* 
    export function Obloq_httpDelete(url: string, content: string, time: number): string[] {
        if (time < 100) { 
            time = 100
        }
        let timeout = time / 100
        let _timeout = 0
        if (!OBLOQ_SERIAL_INIT) { 
            Obloq_serial_init()
        }
        obloqWriteString("|3|4|http://"+myip+":"+myport+"/"+url+","+content+"|\r")
        let item = OBLOQ_STR_TYPE_IS_NONE
        let num = 0
        let j = 0
        while (OBLOQ_BOOL_TYPE_IS_TRUE) {
            if (e == "200") {
                let list = ["200", param]
                return list
            } else if (e == "err") {
                let list = ["err", param]
                return list
            } else if (e == "|2|1|") {
                let list = ["999", "disconnet wifi"]
                return list
            }
            basic.pause(100)
            _timeout += 1
            if (_timeout > timeout) { 
                let list = ["408", "time out"]
                return list
            }
        }
        let list = ["408", "time out"]
        return list
    }*/


    function Obloq_serial_recevice(): void {

        let Obloq_message_str = serial.readString()
        let size = Obloq_message_str.length
        let item = Obloq_message_str

        if (item.indexOf("|4|1|1|1|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "MqttConneted"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|4|1|1|2|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "MqttConnectFailure"
            OBLOQ_ANSWER_CONTENT = item.substr(9, size - 2 - 9)
            return
        } else if (item.indexOf("|4|1|2|1|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "SubOk"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|4|1|2|2|1|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "SubCeiling"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|4|1|2|2|2|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "SubFailure"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|4|1|3|1|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "PulishOk"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|4|1|3|2|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "PulishFailure"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            OBLOQ_WRONG_TYPE = "mqtt pulish failure"
            return
        } else if (item.indexOf("|4|1|4|1|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "MqttDisconnected"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|4|1|4|2|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "MqttDisconnectFailure"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|4|1|5|") != -1) {//|4|1|5|topic|message|
            let str = item.substr(7, size - 2 - 7)
            let num = str.indexOf("|")
            OBLOQ_ANSWER_CMD = str.substr(0, num)
            OBLOQ_ANSWER_CONTENT = str.substr(num + 1, str.length - OBLOQ_ANSWER_CMD.length - 1)
            return
        } else if (item.indexOf("|4|1|6|1|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "UnSubOk"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|4|1|6|2|1|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "UnSubFailure"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|4|1|6|2|2|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "UnSubFailure"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|1|1|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "PingOk"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|1|2|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "GetVersion"
            OBLOQ_ANSWER_CONTENT = item.substr(5, size - 2 - 5)//version
            return
        } else if (item.indexOf("|1|3|", 0) != -1) {
            if (OBLOQ_MQTT_INIT) {
                OBLOQ_ANSWER_CMD = "Heartbeat"
                OBLOQ_ANSWER_CONTENT = "OK"
            }
            return
        } else if (item.indexOf("|2|1|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "WifiDisconnect"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            if (OBLOQ_MQTT_INIT || OBLOQ_HTTP_INIT || OBLOQ_WIFI_CONNECTED) {
                OBLOQ_WRONG_TYPE = "wifi disconnect"
            }
            return
        } else if (item.indexOf("|2|2|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "WifiConnecting"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|2|3|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "WifiConnected"
            OBLOQ_ANSWER_CONTENT = item.substr(5, size - 2 - 5)//IP addr
            return
        } else if (item.indexOf("|2|4|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "WifiConnectFailure"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|3|", 0) != -1) {//|3|errcode|message|
            let str = item.substr(3, size - 2 - 3)
            let num = str.indexOf("|")
            OBLOQ_ANSWER_CMD = str.substr(0, num)
            OBLOQ_ANSWER_CONTENT = str.substr(num + 1, str.length - OBLOQ_ANSWER_CMD.length - 1)
            return
        } else {
            return
        }
    }

    function onEvent() {
        if (!OBLOQ_SERIAL_INIT) {
            Obloq_serial_init()
        }
        OBLOQ_MQTT_EVENT = OBLOQ_BOOL_TYPE_IS_TRUE
        obloqEventOn()
        control.onEvent(<number>32, <number>1, Obloq_serial_recevice); // register handler
    }
} 