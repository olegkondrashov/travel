import ceo from "../../assets/team/ceo.jpg";
import manager from "../../assets/team/manager.jpg";
import finance from "../../assets/team/finance.jpg";
import sales from "../../assets/team/sales.jpg";
import operations from "../../assets/team/head-operations.jpg";
import hrd from "../../assets/team/hrd.jpg";

import "./team.styles.scss";

const Team = () => {
    return (
        <section className="team">
            <h3 className="team-title">Meet our team</h3>
            <div className="team-section">
                <div className="team-member ceo">
                    <img className="card-image" src={ceo} alt="ceo" />
                    <div className="card-content">
                        <h3>CEO</h3>
                        <p>Paul Johnson</p>
                        <blockquote>
                            "I believe in giving only the best quality travel
                            service for our clients."
                        </blockquote>
                    </div>
                </div>

                <div className="team-member manager">
                    <img className="card-image" src={manager} alt="manager" />
                    <div className="card-content">
                        <h3>MANAGER</h3>
                        <p>Rowena Chen</p>
                        <blockquote>
                            "I believe in giving only the best quality travel
                            service for our clients."
                        </blockquote>
                    </div>
                </div>

                <div className="team-member finance">
                    <img className="card-image" src={finance} alt="finance" />
                    <div className="card-content">
                        <h3>FINANCE</h3>
                        <p>Jessica Parker</p>
                        <blockquote>
                            "I believe in giving only the best quality travel
                            service for our clients."
                        </blockquote>
                    </div>
                </div>

                <div className="team-member sales-marketing">
                    <img className="card-image" src={sales} alt="sales" />
                    <div className="card-content">
                        <h3>SALES & MARKETING MANAGER</h3>
                        <p>John Lock</p>
                        <blockquote>
                            "I believe in giving only the best quality travel
                            service for our clients."
                        </blockquote>
                    </div>
                </div>

                <div className="team-member head-operations">
                    <img
                        className="card-image"
                        src={operations}
                        alt="head-operations"
                    />
                    <div className="card-content">
                        <h3>HEAD OF OPERATIONS</h3>
                        <p>Eugene Kim</p>
                        <blockquote>
                            "I believe in giving only the best quality travel
                            service for our clients."
                        </blockquote>
                    </div>
                </div>

                <div className="team-member hrd">
                    <img className="card-image" src={hrd} alt="hrd" />
                    <div className="card-content">
                        <h3>HRD</h3>
                        <p>Olivia Barkley</p>
                        <blockquote>
                            "I believe in giving only the best quality travel
                            service for our clients."
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
