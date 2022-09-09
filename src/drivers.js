import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import Header from './header';
import {
    withAuthenticator,
    Button
  } from "@aws-amplify/ui-react";
import { API, Storage } from 'aws-amplify';
import { createDriverDocument as createDriverDocumentMutation} from './graphql/mutations';


const initialFormState = { name: '', description: '' }

function Drivers({ signOut }){
    const [documents, setDocuments] = useState([]);
    const [formData, setFormData] = useState(initialFormState);
  
   
    async function onChange(e) {
      if (!e.target.files[0]) return
      const file = e.target.files[0];
      setFormData({ ...formData, image: file.name });
      await Storage.put(file.name, file);
    
    }
  
    async function uploadDocument() {
      if (!formData.name || !formData.description || !formData.image) return;
      await API.graphql({ query: createDriverDocumentMutation, variables: { input: formData } });
      if (formData.image) {
        const image = await Storage.get(formData.image);
        formData.image = image;
      }
      setDocuments([ ...documents, formData ]);
      setFormData(initialFormState);

    }

    return (

          <div class="cover-container d-flex h-100 p-3 mx-auto flex-column bg-light">
            <Header />
            
            <main role="main" class="inner cover">
            <h1 class="cover-heading">Upload Driver Identity Documents</h1>
            <div class="m-4">
            <input class="m-1"
              onChange={e => setFormData({ ...formData, 'name': e.target.value})}
              placeholder="Document name"
              value={formData.name}
            />
            <input class="m-1"
              onChange={e => setFormData({ ...formData, 'description': e.target.value})}
              placeholder="Document description"
              value={formData.description}
            />
            <input class="m-1"
              type="file"
              onChange={onChange}
            />
            </div>
            <div>
                <button class="btn-lg btn-secondary "  onClick={uploadDocument}>Upload Document</button>
            </div>
            <div style={{marginBottom: 30}}>
                {
                documents.map(document => (
                    <div class="m-3 bg-info" key={document.id || document.name}>
                    <h2>Document {document.name} Uploaded to System</h2>
                    <p>{document.description}</p>
                    </div>
                ))
                }
            </div>


            <Button class="btn btn-primary mr-1" onClick={signOut}>Sign Out</Button>

          </main>
        </div>
    );
}

export default withAuthenticator(Drivers);