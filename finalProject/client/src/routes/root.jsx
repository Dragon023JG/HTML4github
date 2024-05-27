import {Outlet, Link,NavLink, useLoaderData, Form, redirect,
  useNavigation, useSubmit,} from "react-router-dom"
import {getContacts, getContactFromMongoDB, createContact} from "../contacts"
import React, { useState, useEffect } from 'react';


export async function action(){
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);
}
export async function loader({request}){
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts= await getContacts(q);
 
  return {contacts,q};
}
export default function Root() {
  const apiurl= "http://127.0.0.1:5001/api/contacts";
  const [contacts, setContacts] = useState([]);
 
  useEffect(() => {
      getContactFromMongoDB(apiurl)
          .then(data => {
              setContacts(data);
          })
          .catch(error => {
              console.error('Error:', error);
          });
  }, []);
  const{q}= useLoaderData();
  
  console.log("contacts", contacts);
  const navigation=useNavigation();
  const submit = useSubmit();

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has(
      "q"
    );


  useEffect(() =>{
    document.getElementById("q").value =q;
  }, [q]);

    return (
      <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <div>
            <Form id="search-form" role="search">
              <input
                id="q"
                className={searching? "loading": ""}
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
                defaultValue={q}
                onChange={(event)=>{
                  const isFirstSearch = q == null;
                  submit(event.currentTarget.form,{ 
                    replace: !isFirstSearch,
                  });
                }}
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={!searching}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </Form>
            <Form method="post">
              <button type="submit">New</button>
            </Form>
          </div>
          <nav>
            {contacts.length ? (
            <ul>
              {contacts.map((contact)=>(
              <li key ={contact._id}>
                <NavLink to={`contacts/${contact._id}`}
                className={({ isActive, isPending }) =>
                isActive
                  ? "active"
                  : isPending
                  ? "pending"
                  : ""
              }
                >
                  {contact.first|| contact.last ? (
                  <>
                {contact.first} {contact.last}
                
                </>
                  ):(
                    <i>No Name</i>
                  )}{" "}
                  {contact.favorite && <span>★</span>}
                </NavLink>
              </li>
            ))}
          </ul>
        ) : (
          <p>
            <i>No contacts</i>
          </p>
        )}
          </nav>


        </div>
        <div id="detail"
        className={navigation.state=== "loading"? "loading": ""
        }
        >
          <Outlet/>
        </div>
      </>
    );
  }