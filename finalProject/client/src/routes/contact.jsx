import { Form, useLoaderData, useFetcher, } from "react-router-dom";
import { getContact,getContactFromMongoByID,updateContact } from "../contacts";
import React, { useState, useEffect } from 'react';

export async function action ({request, params}){
  let formData = await request.formData();
  return updateContact(params.contactId,{
    favorite: formData.get("favorite")=== "true",
  });
}

  export async function loader({params}){
    const apiurl= "http://127.0.0.1:5001/api/contacts";
    const contactId = params.contactId;
    let contact ={};
    await getContactFromMongoByID(apiurl, params.contactId).then((resp)=>{
       console.log(resp);
       contact= resp;
    })
    // const contact = await getContact(params.contactId);
    // if (!contact){
    //   throw new Response("",{
    //     status : 404,
    //     statusText: "Not Found",
    //   });
    // }
    return {contact, contactId};
  }

export default async function Contact() {
  const {contactId, contact} = useLoaderData();
  // const [contact, setContact] = useState([]);
  //  console.log('contactId', contactId);

  // useEffect(() => {
  //   getContactFromMongoByID(apiurl, contactId)
  //     .then(data => {
  //       setContact(data);
  //       console.log('setContactdata', data)
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //     });
  // }, []);
  
//  const {contact,contactId}= useLoaderData();
  console.log('contactid', contact,contactId)

  return (
    <div id="contact">
      <div>
        <img
          key={contact.avatar}
          src={contact.avatar || null}
        />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a
              target="_blank"
              href={`https://twitter.com/${contact.twitter}`}
            >
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (
                !confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite({ contact }) {
  const fetcher = useFetcher();
  // yes, this is a `let` for later
  let favorite = contact.favorite;
  if(fetcher.formData){
    favorite = fetcher.formData.get("favorite") === "true";
  }

  return (
    <fetcher.Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </fetcher.Form>
  );
}