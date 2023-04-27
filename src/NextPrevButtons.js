import "./NextPrevButtons.css"


/**Renders buttons that help display part of a list rather than the whole thing
 * 
 * Props
 * -next(): shows next set of results
 * -prev(): shows previous set of results
 * -numBatches: number of batches the component can show
 * -currentBatch: the batch we are currently showing. use for disabling buttons
 * 
 * State
 * -none
 * 
 * {JobList, CompanyList} -> NextPrevButtons
 */
function NextPrevButtons({ next, prev, numBatches, currentBatch }) {

    return (
        <div className="NextPrevButtons">
            <button
                className='btn btn-primary'
                onClick={prev}
                disabled={currentBatch === 0}>
                Previous
            </button>
            <button
                className='btn btn-primary'
                onClick={next}
                disabled={(currentBatch >= numBatches)}>
                Next
            </button>
        </div>
    )
}

export default NextPrevButtons;