export const QuoteBB = ({quote, author}) => {
    return (
        <>
            <blockquote  className="blockquote text-end">
                <p>{quote}</p>
                <footer className="blockquote-footer">{author}</footer>
            </blockquote>
        </>
    );
};
