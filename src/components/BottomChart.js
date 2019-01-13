
import Constants from '../config/app_constants';

var BottomChart = (chartType, lblLeft, percentLeft, numberLeft, lblRight, percentRight, numberRight) => {
    var bottomChartTemplate =
        `<div class='bottom-chart' >
            <div class='device-info device-info-left' >
                ${BottomDeviceInfo(chartType, lblLeft, percentLeft, numberLeft)}
            </div>
            <div class='device-info device-info-right'>
                ${BottomDeviceInfo(chartType, lblRight, percentRight, numberRight)}
            </div>                        
        </div>`;

    return bottomChartTemplate;
}

var BottomDeviceInfo = (chartType, lblDevice, percent, data) => {
    let lblCssClass = "lbl-device-" + lblDevice.toLowerCase() + "-" + chartType;
    let formattedDataNumber = data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    let currency = "";
    if(chartType == Constants.Revenue.toLowerCase()){
        currency = "€";
    }
    var bottomDeviceInfoTemplate  = 
        `<div>
            <span class='lbl-device ${lblCssClass}' >${lblDevice}</span>
            <div class='device-details' >
                <span class='device-percent' >${percent}%</span>
                <span class='device-data' >${formattedDataNumber} ${currency}</span>
            </div>
        </div>`;
        
    return bottomDeviceInfoTemplate;
}

export default BottomChart;
