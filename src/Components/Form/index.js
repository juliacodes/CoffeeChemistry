import React from 'react';
import FormCont from './styles';
export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ''
        };
    }

    render() {
        const { status } = this.state;
        return (
            <FormCont
                onSubmit={this.submitForm}
                action='https://formspree.io/xbjleeng'
                method='POST'
            >
                <input type='email' name='email' placeholder='email address' />
                {status === 'SUCCESS' ? (
                    <p>Thanks!</p>
                ) : (
                    <button>&#8594;</button>
                )}
                {status === 'ERROR' && <p>Ooops! There was an error.</p>}
            </FormCont>
        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: 'SUCCESS' });
            } else {
                this.setState({ status: 'ERROR' });
            }
        };
        xhr.send(data);
    }
}
