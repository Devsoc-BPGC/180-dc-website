import classes from './Capabilities.module.css'

const Capabilities = () => {
    return (
        <div className={classes['capabilities']}>
            <div className={classes['capa-text']}>
                <h1>
                    Our Core Capabilities
                </h1>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchan
                </p>
            </div>
            <div className={classes['cards']}>
                <div className={classes['card-row']}>
                    <div className={classes['card']}>
                        <h1>Market Research</h1>
                        <ul>
                            <li>Competitve Analysis</li>
                            <li>Industry Profiling</li>
                            <li>Consumer Insights</li>
                            <li>Data Analysis & Visualization</li>
                        </ul>
                    </div>
                    <div className={classes['card']}>
                        <h1>Operations</h1>
                        <ul>
                            <li>Financial Analysis</li>
                            <li>Business Model Transformation</li>
                            <li>Process Optimization</li>
                            <li>Patnership Evaluaiton</li>
                        </ul>
                    </div>
                    <div className={classes['card']}>
                        <h1>Growth</h1>
                        <ul>
                            <li>Go-To-Market Stratergy</li>
                            <li>New Product Development</li>
                            <li>Costomer Aquisition Stratergy</li>
                            <li>Funding Stratergy</li>
                        </ul>
                    </div>
                </div>
                <div className={classes['card-row']}>
                    <div className={classes['card']}>
                        <h1>Organization</h1>
                        <ul>
                            <li>Organization Design</li>
                            <li>Huamn Capital Stratergy</li>
                            <li>Diversity Equity & Inclusion</li>
                            <li>Purpsoe Alignment</li>
                        </ul>
                    </div>
                    <div className={classes['card']}>
                        <h1>Sustainability</h1>
                        <ul>
                            <li>Impact Assesment</li>
                            <li>Policy Research and Analysis</li>
                            <li>Social Responsibility Stratergy</li>
                            <li>Employee Engagement</li>
                        </ul>
                    </div>
                    <div className={classes['card']}>
                        <h1>Marketing & Sales</h1>
                        <ul>
                            <li>Digital Marketing Stratergy</li>
                            <li>Market Segmentation</li>
                            <li>Sustainable Brand Building</li>
                            <li>Use Engagement & Analytics</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Capabilities;