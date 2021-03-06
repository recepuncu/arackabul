angular.module('app.controllers', [])

        .controller('araKabulCtrl', ['$scope', '$stateParams', '$cordovaCamera',
            function ($scope, $stateParams, $cordovaCamera) {
				
				document.addEventListener("deviceready", function () {
					$scope.takePicture = function () {
						var options = {
							quality: 100,
							destinationType: Camera.DestinationType.DATA_URL,
							sourceType: Camera.PictureSourceType.CAMERA,
							allowEdit: false,
							encodingType: Camera.EncodingType.JPEG,
							targetWidth: 350,
							targetHeight: 350,
							popoverOptions: CameraPopoverOptions,
							correctOrientation: true,
							saveToPhotoAlbum: false
						};
						$cordovaCamera.getPicture(options).then(function (imageData) {
							$scope.imgURI = "data:image/jpeg;base64," + imageData;
						}, function (err) {
							// An error occured. Show a message to the user
						});
					};
				}, false);
            }
        ])

        .controller('LemDetaylarCtrl', ['$scope', '$stateParams',
            function ($scope, $stateParams) {
            }

        ])

        .controller('oturumACtrl', ['$scope', '$stateParams', '$http',
            function ($scope, $stateParams, $http) {
                $scope.kayitOl = function (data) {
                    var data = data;
                    $(function () {
                        var req = {              
							cache: false,
                            url: "https://arackabul.herokuapp.com/index.php?islem=kayit-ol",
                            method: "POST",
                            headers: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: $.param({
                                'id': _id,
                                'adi': data.adi,
                                'soyadi': data.soyadi,
                                'kullanici_adi': data.kullanici_adi,
                                'sifre': data.sifre
                            })
                        };
                        $http(req).then(function () {
                            alert('Kayıt edildi.');
                        }, function (data, stts) {
                            alert('Kayıt edilemedi!');
                            alert(JSON.stringify(data));
                        });
                    });
                }
            }
        ])
