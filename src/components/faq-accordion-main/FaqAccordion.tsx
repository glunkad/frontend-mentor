import "./style.scss"
export const FaqAccordion = () => {
    return (
        <>
            <div className="bg-image"></div>
            <div className="wrapper1">
                <div className="card">
                    <div className="card-header">
                        <div className="icon"></div>
                        <h1>FAQs</h1>
                    </div>
                    <div className="card-body">
                        <div className="card-body-title">
                            <div className="title-text">What is Frontend Mentor, and how will it help me?</div>
                            <div className="icon"></div>
                        </div>
                        <div className="card-body-text">
                            <p>
                                Frontend Mentor offers realistic coding challenges to help developers improve their
                                frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for
                                all levels and ideal for portfolio building.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="wrapper2">
            </div>
        </>
    );
}