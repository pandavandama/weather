let url = 'https://api.openweathermap.org/data/2.5/weather?appid=c4140dc62db74678e058b647104492a1';
let urltime = 'http://worldtimeapi.org/api/timezone/Europe/London';
let url_base = 'js/city.list.json';
let box_status;
let _select_town = document.getElementById('select_town_s');
let _select_country = document.getElementById('select_country');
let _select_state = document.getElementById('select_state');
let _town_letters = document.getElementById('town_letters');
let _town = document.querySelector('.town');
let id = 0;
let _data;
let letters_change_array = ['Ă', 'Â', 'Î', 'Ş','Ș', 'Ţ','Ț',];
let letters_change_array_EN = ['A', 'A', 'I', 'S', 'S', 'T','T'];
let state;
let town_name_info = document.getElementById('town_name_info');
let town_temp_info = document.getElementById('town_temp_info');
let town_wind_info = document.getElementById('town_wind_info');
let town_date_info = document.getElementById('town_date_info');
let town_visual_info = document.getElementById('town_visual_info');
let icon1 = document.getElementById('icon1');
let your_time_const=7200;
let your_time = Number(7200+'000');
let img_bck = document.getElementById('img_bck');
let info = document.getElementById('info');
let your_gmt;
let current_gmt;
let info_elem = document.querySelector('.info_elem');

let canvas=document.getElementById('canvas');
let ctx = canvas.getContext('2d');