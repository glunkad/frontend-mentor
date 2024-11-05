import "./style.scss";
import jsonData from "./data.json";
const Section = ({title, description}) => {
    return (
        <>
            <div className="card-body-question">
                <div className="question">{title}</div>
                <a>SHOW</a>
            </div>
            <div className="card-body-answer">
                <p>
                    {description}
                </p>
            </div>
        </>
    );
}


export const FaqAccordion = () => {
    const data = jsonData.sections;
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
                        {
                            data.map((section) => <Section {...section} key={section.title}/> )
                        }
                    </div>
                </div>

            </div>
            <div className="wrapper2">
            </div>
        </>
    );
}