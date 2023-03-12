export const QuoteBB = (params) => {
    const {quote, author} = params;
    return (
        <>
            <blockquote  className="blockquote text-end">
                <p>{quote}</p>
                <footer className="blockquote-footer">{author}</footer>
            </blockquote>
        </>
    );
};
