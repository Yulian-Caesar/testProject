// let yulikNumber = 'Wed Dec 06 2023 00:00:00 GMT+0200';
// let yulikNumber = ("12/13/2023 00:00:00").slice(0, 10).replaceAll("/", "-")

// function yulik(data) {
// 	// console.log(data)
// 	let result = data.map(item => item.Comments);
// 	console.log(JSON.parse(result[0]))
// 	// for (item in data.objects) {
// 	// 	let commentsArr = JSON.parse(data.objects[item].Comments)
// 	// 	let commentsTextArr = commentsArr.map((item) => {
// 	// 		return item.Text
// 	// 	})
// 	// 	console.log(commentsTextArr)
// 	// }

// }

// function yulik2(commentText, comments) {
// 	//var $commentRow = $(`.sequence-comment-row[id="${commentId}"]`);
// 	var $container = $('.yulik');
// 	console.log(comments)
// 	var template = `<div class="yulik-item"  data-field="" data-text="comments">
// 		${comments[0].Type}
// 	</div>`;
// 	partialInit({ objects: comments, template: template }, $container)
// }
// let obj = {
//     "query": {
//         "modelId": "12603",
//         "date": "2023-12-27"
//     },
//     "method": "GetPart",
//     "part": "statisticlist",
//     "queryName": "sql_assembly_installed_details",
//     "template": "<div class=\"d-inline-flex model-assembly-row j3m-table-body-row w-100\" name=\"guid\" data-field=\"\" installationStart=\"\" installationEnd=\"\" installationStatus=\"\"\r\n\t\tdata-attrs='[{\"name\": \"id\", \"field\": \"guid\"}, \r\n\t\t{\"name\": \"installationStart\", \"field\": \"InstallationStart\"}, \r\n\t\t{\"name\": \"installationEnd\", \"field\": \"InstallationEnd\"}, \r\n\t\t{\"name\": \"InstallationStatus\", \"field\": \"Status\"}]'>\r\n\t<div class=\"d-flex j3m-table-cell flex-shrink-0 align-items-center fm-inter py-2 overflow-hidden\" style=\"width: 170px;\">\r\n\t\t<span class=\"d-inline-block text--ellipsis w-100\"></span>\r\n\t</div>\r\n\t<div class=\"d-flex j3m-table-cell flex-shrink-0 align-items-center fm-inter py-2 overflow-hidden\" style=\"width: 150px;\">\r\n\t\t<a class=\"d-inline-block text--ellipsis cursor-pointer w-100\" style=\"text-decoration: underline;\" name=\"teamId\" data-field=\"\" data-text=\"Team\" data-value=\"TeamId\" onclick=\"statistic_list_filter(this);\"></a>\r\n\t</div>\r\n\t<div class=\"d-flex j3m-table-cell flex-shrink-0 align-items-center fm-inter py-2 overflow-hidden\" style=\"width: 150px;\">\r\n\t\t<span class=\"d-inline-block text--ellipsis w-100\" data-field=\"\" data-text='{\"name\": \"InstallationEnd\", \"type\": \"datetime2\"}'></span>\r\n\t</div>\r\n\t<div class=\"d-flex j3m-table-cell flex-shrink-0 align-items-center fm-inter py-2 overflow-hidden\" style=\"width: 150px;\">\r\n\t\t<span class=\"d-inline-block text--ellipsis w-100\"  data-field=\"\" data-text='Type'></span>\r\n\t</div>\r\n\t<div class=\"d-flex j3m-table-cell flex-shrink-0 align-items-center fm-inter py-2 overflow-hidden\" style=\"width: 150px;\">\r\n\t\t<span class=\"d-inline-block text--ellipsis w-100\"  data-field=\"\" data-text='Name'></span>\r\n\t</div>\r\n\t<div class=\"d-flex j3m-table-cell flex-shrink-0 align-items-center fm-inter py-2 overflow-hidden\" style=\"width: 170px;\">\r\n\t\t<span class=\"d-inline-block text--ellipsis w-100\" data-field=\"\" data-text='{\"name\": \"InstallationEndTime\", \"type\": \"datetime2\"}'></span>\r\n\t</div>\r\n\t<div class=\"d-flex j3m-table-cell flex-shrink-0 align-items-center fm-inter py-2 overflow-hidden\" style=\"width: 150px;\">\r\n\t\t<span class=\"d-inline-block text--ellipsis w-100\"  data-field=\"\" data-text='Comments'></span>\r\n\t</div>\r\n\t<div class=\"d-flex j3m-table-cell flex-shrink-0 justify-content-center align-items-center overflow-hidden\" name=\"InstallationStatus\" style=\"width: 62px;\">\r\n\t\t<span></span>\r\n\t\t<span></span>\r\n\t\t<span></span>\r\n\t</div>\r\n</div>",
//     "objects": [
//         {
//             "ModelName": "Yulik Local Test",
//             "Team": null,
//             "InstallationEnd": "2023-12-27T00:00:00",
//             "Type": "3887",
//             "Name": "Crane moving calc",
//             "Status": "ok",
//             "InstallationEndTime": "2023-12-27T08:46:24.5624389",
//             "Comments": "[{\"Id\":238,\"AssemblyId\":2382717,\"Text\":\"sdfsdfsdfsdfsdf\",\"CreateDate\":\"2023-12-13T16:54:13.2135868\",\"CreatedBy\":\"test.avatar.mail.2@gmail.com\",\"Checked\":true,\"CheckedBy\":\"test.avatar.mail.2@gmail.com\",\"CheckedDate\":\"2023-12-15T19:42:43.5610159\"},{\"Id\":239,\"AssemblyId\":2382717,\"Text\":\"second comment\",\"CreateDate\":\"2023-12-13T16:54:31.5841303\",\"CreatedBy\":\"test.avatar.mail.2@gmail.com\",\"Checked\":false,\"CheckedBy\":\"test.avatar.mail.2@gmail.com\",\"CheckedDate\":\"2023-12-15T19:42:35.9500438\"},{\"Id\":253,\"AssemblyId\":2382717,\"Text\":\"fgfghfghfgf\",\"CreateDate\":\"2023-12-18T14:02:12.8121464\",\"CreatedBy\":\"test.avatar.mail.2@gmail.com\",\"Checked\":false},{\"Id\":257,\"AssemblyId\":2382717,\"Text\":\"11111\",\"CreateDate\":\"2023-12-18T15:11:11.8584303\",\"CreatedBy\":\"test.avatar.mail.2@gmail.com\",\"Checked\":false}]"
//         },
//         {
//             "ModelName": "Yulik Local Test",
//             "Team": null,
//             "InstallationEnd": "2023-12-27T00:00:00",
//             "Type": "5045",
//             "Name": "Crane moving calc",
//             "Status": "ok",
//             "InstallationEndTime": "2023-12-27T08:46:26.7213799",
//             "Comments": null
//         },
//         {
//             "ModelName": "Yulik Local Test",
//             "Team": "Custom team",
//             "InstallationEnd": "2023-12-27T00:00:00",
//             "Type": "BEAM",
//             "Name": "E1-B/103",
//             "Status": "ok",
//             "InstallationEndTime": "2023-12-27T08:46:22.8063251",
//             "Comments": null
//         },
//         {
//             "ModelName": "Yulik Local Test",
//             "Team": "Custom team",
//             "InstallationEnd": "2023-12-27T00:00:00",
//             "Type": "COLUMN",
//             "Name": "E1-P/67",
//             "Status": "ok",
//             "InstallationEndTime": "2023-12-27T08:46:30.2315083",
//             "Comments": null
//         }
//     ],
//     "objectName": "statisticlist"
// }
// // "[{\"Id\":238,\"AssemblyId\":2382717,\"Text\":\"sdfsdfsdfsdfsdf\",\"CreateDate\":\"2023-12-13T16:54:13.2135868\",\"CreatedBy\":\"test.avatar.mail.2@gmail.com\",\"Checked\":true,\"CheckedBy\":\"test.avatar.mail.2@gmail.com\",\"CheckedDate\":\"2023-12-15T19:42:43.5610159\"},{\"Id\":239,\"AssemblyId\":2382717,\"Text\":\"second comment\",\"CreateDate\":\"2023-12-13T16:54:31.5841303\",\"CreatedBy\":\"test.avatar.mail.2@gmail.com\",\"Checked\":false,\"CheckedBy\":\"test.avatar.mail.2@gmail.com\",\"CheckedDate\":\"2023-12-15T19:42:35.9500438\"},{\"Id\":253,\"AssemblyId\":2382717,\"Text\":\"fgfghfghfgf\",\"CreateDate\":\"2023-12-18T14:02:12.8121464\",\"CreatedBy\":\"test.avatar.mail.2@gmail.com\",\"Checked\":false},{\"Id\":257,\"AssemblyId\":2382717,\"Text\":\"11111\",\"CreateDate\":\"2023-12-18T15:11:11.8584303\",\"CreatedBy\":\"test.avatar.mail.2@gmail.com\",\"Checked\":false}]"
// yulik(obj)

$('.input-datepicker')
    .datepicker({
        format: 'yyyy-mm-dd',
        todayBtn: 'linked',
        clearBtn: true,
        autoclose: true,
        todayHighlight: true,
        calendarWeeks: true,
        weekStart: 1,
        disableTouchKeyboard: false,
    })
    .on('show', function (e) {
        /**
         * hack to disable touch keyboard with blur() method,
         * but only if the datepicker is not visible (to minimize accessibility problems)
         * so with a second click, the keyboard appears
         */
        if (window.navigator.msMaxTouchPoints || 'ontouchstart' in document) {
            if (!isDatepickerVisible) {
                $('.input-datepicker', $(this))[0].blur();
            }
        }
        isDatepickerVisible = true;
    })
    .on('hide', function (e) {
        isDatepickerVisible = false;
    });

$('.input-datepicker2').datepicker({
    format: 'yyyy-mm-dd',
    todayBtn: 'linked',
    clearBtn: true,
    autoclose: true,
    todayHighlight: true,
    calendarWeeks: true,
    weekStart: 1,
    disableTouchKeyboard: true,
});

var input = document.querySelectorAll('.js-date')[0];

var dateInputMask = function dateInputMask(elm) {
    elm.addEventListener('keypress', function (e) {
        if (e.keyCode < 47 || e.keyCode > 57) {
            e.preventDefault();
        }

        var len = elm.value.length;

        // If we're at a particular place, let the user type the slash
        // i.e., 12/12/1212
        if (len !== 1 || len !== 3) {
            if (e.keyCode == 47) {
                e.preventDefault();
            }
        }

        // If they don't add the slash, do it for them...
        if (len === 2) {
            elm.value += '/';
        }

        // If they don't add the slash, do it for them...
        if (len === 5) {
            elm.value += '/';
        }
    });
};

dateInputMask(input);
