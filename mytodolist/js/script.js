
let btn = document.getElementById('add-btn')
btn.addEventListener('click', (e) => {
    let user = document.getElementById('todo-input').value
    if (user == '') {
        alert('لطفا وارد کنید!')
        return
    }
    let li = document.createElement('li')
    li.innerHTML = `
        <h3>${user}</h3>
        <div class="actions">
            <input type="text" class ="edit hide">
        <!-- دکمه ویرایش -->
        <button class="btn btn-edit" title="ویرایش">
        <i onclick="myedit(this)" class="fas fa-pen-to-square"></i>
        </button>
        
        <!-- دکمه تکمیل -->
        <button  class="btn btn-check" title="تکمیل شده">
            <i class="fas fa-check"onclick="mycheck(this)"></i>
        </button>
        
        <!-- دکمه حذف -->
        <button class="btn btn-delete" title="حذف">
            <i class="fas fa-trash-can" onclick="mydel(this)"></i>
        </button>
    </div>
`;
    let _ul = document.getElementById('todo-list')
    _ul.appendChild(li)
    document.getElementById('todo-input').value = ''
    document.getElementById('todo-input').focus()
})

function mydel(s) {
    if (confirm('مطمئن هستید؟')) {
        let item = s.parentElement.parentElement.parentElement;
        item.classList.add('del');
        setTimeout(() => {
            item.remove();
        }, 800);
    }
}

let flag = 1
function myedit(s) {
    // نکته : هیچ موقع اولش ولیو رو نگیر کد به هم میخوره 
    let li = s.parentElement.parentElement.parentElement
    let h3 = li.children[0]
    let input = li.children[1].children[0]

    if (flag % 2) {
        input.classList.remove('hide')
        input.value = h3.innerHTML
        input.focus()
        s.parentElement.classList.remove('btn', 'btn-edit')
        s.classList.remove('fas', 'fa-pen-to-square')

        s.parentElement.classList.add('btn', 'btn-check')
        s.classList.add('fas', 'fa-check')
    } else {
        h3.innerHTML = input.value
        input.classList.add('hide')

        s.parentElement.classList.remove('btn', 'btn-check')
        s.classList.remove('fas', 'fa-check')

        s.parentElement.classList.add('btn', 'btn-edit')
        s.classList.add('fas', 'fa-pen-to-square')
    }
    flag++
}
function mycheck(s) {
    let myul = document.querySelector('#archive-list')
    let li = s.parentElement.parentElement.parentElement
    let inli = li.innerHTML
    li.style.display = "none"
    let myli = document.createElement('li')
    myli.innerHTML = inli
    myul.appendChild(myli)
    myli.style.pointerEvents = 'none'
    myli.classList.add('archived')
}

function mysearch() {
    let input = document.getElementById('search-input');
    let searchValue = input.value;
    let h3_items = document.querySelectorAll('ul h3');

    h3_items.forEach((val) => {
        if (val.innerText.indexOf(searchValue) == -1) {
            val.parentElement.style.display = "none";
        } else {
            val.parentElement.style.display = "flex";
        }
    })
}

function mydelete(s) {
    window.location.reload();
}
