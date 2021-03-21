var models = [
    {
        name: 'BMW 320i 1.6 Luxury Line',
        image: 'img/bmw.jpg',
        link: 'http://www.arabalar.com.tr/bmw/3-serisi/2020/320i-1-6-luxury-line'
    },
    {
        name: 'Audi A3 Sportback 1.5 FSI',
        image: 'img/audi.jpg',
        link: 'http://www.arabalar.com.tr/audi/a3/2021/sportback-1-5-fsi'
    },
    {
        name: 'Mercedes C200 1.5 AMG',
        image: 'img/mercedes.jpg',
        link: 'http://www.arabalar.com.tr/mercedes/c-serisi/2020/c200-1-5-amg'
    },
    {
        name: 'Peugeot 508 1.5 BlueHDi',
        image: 'img/peugeot.jpg',
        link: 'http://www.arabalar.com.tr/peugeot/508/2021/1-5-bluehdi-allure-at'
    },
    {
        name: 'Volkswagen Golf 1.5 R-Line DSG',
        image: 'img/vw.jpg',
        link: 'http://www.arabalar.com.tr/volkswagen/golf/2021/1-5-r-line-dsg'
    }
];

const clickLeft = document.querySelector('#clickLeft');
const clickRight = document.querySelector('#clickRight');
const arrows = document.querySelectorAll('.arrow');

var index = 0;
var slaytCount = models.length;
var interval;
var settings = {
    duration: '2000',
    random: false
};


init(settings);
eventListener();

function eventListener() {
    // next event.
    clickLeft.addEventListener('click', prevItem);

    // prev event.
    clickRight.addEventListener('click', nextItem);

    // arrows mouseenter event
    arrows.forEach(function(k){
        k.addEventListener('mouseenter',function(){
            clearInterval(interval);
        })
    });

    // arrows mouseleave event
    arrows.forEach(function(k){
        k.addEventListener('mouseleave',function(){
            init(settings);
        })
    });
}

function nextItem(e) {
    index++;
    getItem(index);
    e.preventDefault();
}

function prevItem(e) {
    index--;
    getItem(index);
    e.preventDefault();
}

function getItem(i) {
    index = i;
    if (i < 0) {
        index = slaytCount - 1;
    }
    if (i >= slaytCount) {
        index = 0;
    }

    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-link').setAttribute('href', models[index].link);
    document.querySelector('.card-img-top').setAttribute('src', models[index].image)
}

function init(s) {
    var prevItem;
    interval = setInterval(() => {
        if (s.random) {
            do {
                index = Math.floor(Math.random() * slaytCount);
            } while (index == prevItem)
            prevItem = index;
        }
        else {
            if (slaytCount == index + 1) {
                index = -1;
            }
            getItem(index);
            index++;
        }
        console.log(index);
        getItem(index);
    }, s.duration)
}

