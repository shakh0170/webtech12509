let categories = [
    {
        id: 1,
        name: 'Интерьеры'
    },
    {
        id: 2,
        name: 'Архитектура'
    },
    {
        id: 3,
        name: 'Строительство'
    },
    {
        id: 4,
        name: 'Ремонт'
    },
]

let items = [
    {
        categorie_id: 1,
        img: 'https://images.unsplash.com/photo-1505409859467-3a796fd5798e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        title: 'Разработка интерьера для загородного дома',
    },
    {
        categorie_id: 2,
        img: 'https://images.unsplash.com/photo-1464075208758-5623fb69e13b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
        title: 'Разработка интерьера для загородного дома',
    },
    {
        categorie_id: 4,
        img: 'https://images.unsplash.com/photo-1526055577108-80193f001dde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        title: 'Разработка интерьера для загородного дома',
    },
    {
        categorie_id: 2,
        img: 'https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80',
        title: 'Разработка интерьера для загородного дома',
    },
    {
        categorie_id: 2,
        img: 'https://images.unsplash.com/photo-1497366672149-e5e4b4d34eb3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
        title: 'Разработка интерьера для загородного дома',
    },
    
    {
        categorie_id: 4,
        img: 'https://images.unsplash.com/photo-1577701244709-a4b6fa3b4057?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        title: 'Разработка интерьера для загородного дома',
    },
    {
        categorie_id: 3,
        img: 'https://images.unsplash.com/photo-1543490791-db8323d8e5b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        title: 'Разработка интерьера для загородного дома',
    },
    {
        categorie_id: 4,
        img: 'https://images.unsplash.com/photo-1558211583-d26f610c1eb1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=995&q=80',
        title: 'Разработка интерьера для загородного дома',
    },
    
    {
        categorie_id: 2,
        img: 'https://images.unsplash.com/photo-1625585598750-3535fe40efb3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        title: 'Разработка интерьера для загородного дома',
    },
]

let wrap2 = document.querySelector('.wrapper_2')
let btn1 = document.getElementById('1')
let btn2 = document.getElementById('2')
let btn3 = document.getElementById('3')
let btn4 = document.getElementById('4')
let btn5 = document.getElementById('5')

let reactivty = (a) =>{
    wrap2.innerHTML = ''

    for(let item of a){
        let box = document.createElement('div')
        let bac = document.createElement('div')
        let span = document.createElement('h3')
        let p = document.createElement('h2')

        box.classList.add('item_screen_2')
        bac.classList.add('black')
        box.id = item.categorie_id

        box.style.backgroundImage = `url(${item.img})`

        span.innerText = 'Дизайн интерьера'
        p.innerText = item.title

        bac.append(span, p)
        box.append(bac)
        wrap2.append(box)

        box.onmouseover = () => {
            bac.style.display = 'block'
        }
        box.onmouseleave = () => {
            bac.style.display = 'none'
        }
        
    }
}

reactivty(items)


btn1.onclick = () =>{
    let value = event.target.id
    let filtered = items.filter(item => item.categorie_id == +value)
    reactivty(filtered)
}
btn2.onclick = () =>{
    let value = event.target.id
    let filtered = items.filter(item => item.categorie_id == +value)
    reactivty(filtered)
}
btn3.onclick = () =>{
    let value = event.target.id
    let filtered = items.filter(item => item.categorie_id == +value)
    reactivty(filtered)
}
btn4.onclick = () =>{
    let value = event.target.id
    let filtered = items.filter(item => item.categorie_id == +value)
    reactivty(filtered)
}
btn5.onclick = () =>{
    let value = event.target.id
    reactivty(items)
}


