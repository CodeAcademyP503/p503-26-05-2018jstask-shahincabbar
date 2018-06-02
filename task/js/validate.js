let foodarray = [];
function ctor(_name, _weight, _category, _price, _lastdate) {
    this.name = _name;
    this.weight = _weight;
    this.category = _category;
    this.price = _price;
    this.lastdate = _lastdate;
    this.id=k;
    k++;
}
let newelement;
let k=0;
function Add() {
    let Name = document.getElementById("name").value;
    let Weight = document.getElementById("weight").value;
    let Select = document.getElementById("select").value;
    let Price = document.getElementById("price").value;     
    let Lastdate = document.getElementById("lastdate").value;
    if (Name != "" && Name != undefined && Name != null && Name.length >=3) {
        if (Weight > "0") {
            if (Select != "0") {
                if (Price > "0") {
                    if (Lastdate > "2018-10-06") {
                        newelement = new ctor(Name, Weight, Select, Price, Lastdate);
                        foodarray.push(newelement);
                      let mal_sayi=  document.getElementById("malsayi");
                      mal_sayi.innerText = foodarray.length;
                        if(Select == "1"){
                            let et_sayi = document.getElementById("etsayi");
                            et_sayi.innerText =  (+et_sayi.innerText + 1)
                        }
                        else if(Select == "2"){
                          let shirniyyat_sayi  = document.getElementById("shirniyyatsayi");
                                shirniyyat_sayi.innerText  = (+shirniyyat_sayi.innerText +1);
                        }
                        else if(Select == "3"){
                           let terevez_sayi =document.getElementById("terevezsayi");
                           terevez_sayi.innerText = (+terevez_sayi.innerText +1)
                        }
                        Clear();
                    }
                    else{
                        alert_error(date_alert,"Son istifadə tarixini daxil edin")
                    }
                }
                else{
                    alert_error(price_alert,"Qiyməti daxil edin")
                }
            }
            else{
                alert_error(select_alert,"Kategoriya seçin")
            }
        } else {
            alert_error(weight_alert, "Malin çəkisini daxil edin")
        }
    } else {
        alert_error(name_alert, "Malin adını daxil edin")
    }
    return false;
}

function alert_error(id, error_message) {
    id.innerText = error_message;
    return false;
}

function Clear() {
    document.getElementById("name").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("select").value = "";
    document.getElementById("price").value = "";
    document.getElementById("lastdate").value = "";
    document.getElementById("weight_alert").innerText="";
    name_alert.innerText="";
    select_alert="";
    price_alert="";
    date_alert="";



}