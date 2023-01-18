document.addEventListener('DOMContentLoaded', function(){
     const applicantsArray = [
          {
               firstName: 'Michael',
               lastName: 'Tailwind',
               email: 'michaeltailwind@gmail.com',
               phoneNumber: '07087508867',
               gender: 'male',
               birthday: '02 October 1994',
               businessName: 'tailwind Enterprise',
               businessAddress: '12, Ajanlekoko avenue. Ikeja Lagos',
               businessType: 'Engineering',
               registeredBusiness:'Yes'
          },
          {
               firstName: 'Ojelabi',
               lastName: 'Tomiwa',
               email: 'tomminsin@gmail.com',
               phoneNumber: '09022345876',
               gender: 'Male',
               birthday: '19 Feburary 1999',
               businessName: 'Tommin Fashions',
               businessAddress: '19, Alex street. Oshodi Lagos',
               businessType: 'Fashion',
               registeredBusiness:'No'
          },
          {
               firstName: 'Mary',
               lastName: 'Oyelowo',
               email: 'oyelowomary178@gmail.com',
               phoneNumber: '08183675433',
               gender: 'Female',
               birthday: '13 May 2000',
               businessName: 'Desec Styles',
               businessAddress: '14 Airport Road Ikeja Lagos',
               businessType: 'Hair Styling',
               registeredBusiness:'Yes'
          }
     ]
     let table = document.getElementById('tbl-data');
     let tbody = document.getElementById('tbody')
     applicantsArray.map(element => {
          let tableRow = `<tr class="table-row p-1">
                              <td class = 'table-row-data'>${element.firstName}</td>
                              <td class = 'table-row-data'>${element.lastName}</td>
                              <td class = 'table-row-data'>${element.email}</td>
                              <td class = 'table-row-data'>${element.businessName}</td>
                              <td class = 'table-row-data'>${element.businessAddress}</td>
                              <td class = 'table-row-data'>${element.businessType}</td>
                              <td class = 'table-row-data'><span class="badge badge-success">Success</span></td>
                              <td class = 'table-row-data'><a href = "dashboard-2.html" class = "btn table-btn btn theme1-bg text-white shadow-none">View</a></td>
                         </tr>`
          tbody.insertAdjacentHTML('beforeend', tableRow);
     });


});