//this is for looping and showing the data whether in table or card or li
//it is list rendering and conditional rendering
import React, { useState } from "react";
//it's like avilable-   outOfStock, Few minutes to

const ProductCart_25 = () => {
  const [state, setState] = useState({
    contacts: [
      {
        id: "D6BNdWnHI",
        age: 45,
        name: "Karan Kwed",
        company: "Geo",
        email: "Kwen@gmail.com",
        photo:
          "data:image/png;base64,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"
      },
      {
        id: "D6BJdWkHp",
        age: 0,
        name: "User Dead",
        company: "Geo",
        email: "dead@gmail.com",
        photo: "http://pluspng.com/img-png/user-png-icon-big-image-png-2240.png"
      },
      {
        id: "UyEDV5Yds",
        age: 70,
        name: "Vladeen Min",
        company: "Service",
        email: "vladeen@gmail.com",

        photo:
          "https://png.pngtree.com/png-clipart/20190922/original/pngtree-business-male-user-avatar-vector-png-image_4774078.jpg"
      },
      {
        name: "Rajan",
        age: 37,
        photo:
          "https://icons.iconarchive.com/icons/graphicloads/colorful-long-shadow/256/User-icon.png",
        mobile: "9090909090",
        email: "rajan@gmail.com",
        company: "HCL Technologies",

        id: "kLt-bJF"
      },
      {
        name: "Babu",
        age: 23,
        photo:
          "https://www.pngfind.com/pngs/m/470-4703547_icon-user-icon-hd-png-download.png",
        mobile: "789456123",
        email: "abv@inn.co",
        company: "Brad",
        title: "Hitler",
        groupId: "2",
        id: "Lws-bd6"
      }
    ]
  });
  //let's destructure
  let { contacts } = state;
  return (
    <>
      <div className="container ">
        {/* to make all the items in center like name,mail etc */}
        <div className="row ">
          <div className="col-md-8">
            <h4>Contacts Card </h4>
            {contacts.length > 0 &&
              contacts.map((contact) => {
                return (
                  <div key={contact.id} className="card shadow-lg mt-2">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-md-4">
                          <img
                            src={contact.photo}
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="col-md-8">
                          <h5 className="display-4"> {contact.name}</h5>
                          <h6 className="display-6"> {contact.email}</h6>
                          <h6 className="display-6">
                            {contact.age >= 30 && (
                              <span className="text-success"> Mid Age </span>
                            )}
                            {contact.age <= 25 && contact.age >= 1 && (
                              <span className="text-warning"> Fresh Age </span>
                            )}
                            {contact.age === 0 && (
                              <span className="text-danger"> Died </span>
                            )}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCart_25;
