const AuthValidationErrors = ({ errors = [], ...props }) => (
    <>
        {errors.length > 0 && (
            <div {...props}>
                <div style={{textWeight: 500, color: 'red'}}>
                    Whoops! Something went wrong.
                </div>

                <ul style={{color: 'red'}}>
                    {errors.map(error => (
                        <li key={error}>{error}</li>
                    ))}
                </ul>
            </div>
        )}
    </>
)

export default AuthValidationErrors