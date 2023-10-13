import css from './statistics.module.css'
export const Statistics = ({ good, neutral, bad, countTotalFeedback, countPositiveFeedbackPercentage, addFeedback }) => {

    return (<div>
        <div>  <p className={css.toSee}> Good: {good}</p>
            <p className={css.toSee}> Neutral: {neutral}</p>
            <p className={css.toSee}> Bad: {bad}</p>

            <p className={css.toSee}>Total: {countTotalFeedback}</p>
            <p className={css.toSee}>Positive feedback: {countPositiveFeedbackPercentage}%</p>
        </div>
    </div>

    )
}