import React from 'react';
import { Container } from 'reactstrap';
// import EmailSidebar from './EmailSidebar';
import EmailToolbar from './EmailToolbar';

const MailInbox = () => {
    document.title="Mailbox | Velzon - React Admin & Dashboard Template";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    {/* <EmailSidebar /> */}
                    <EmailToolbar />
                </Container>
            </div>
        </React.Fragment>
    );
};

export default MailInbox;