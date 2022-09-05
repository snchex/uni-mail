import { MailCard } from '../components/MailCard';

export function SearchPage() {
  return (
    <>
        <div class="row">

            <div className="col-5">
                <h4> SearchPage</h4>
                <hr/>
                <form> 
                    <input type="text" className="form-control" name="search" placeholder="Search Mail" />
                    <button className="btn btn-outline-primary mt-1">
                        Search
                    </button>
                </form>

            </div>
            <div className="col-7">
                <h4> RESULTS </h4>
                <hr/>
                <div className="alert alert-primary">
                    Search Results
                </div>
                <div className="alert alert-danger">
                    Sin Results
                </div>
                <MailCard></MailCard>
            </div>    
            
        </div>

    </>
  )
}

export default SearchPage;
