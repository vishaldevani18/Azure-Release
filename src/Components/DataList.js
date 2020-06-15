import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import styles from './Css/List.module.css'
import Spinner from 'react-bootstrap/Spinner'
// List Of Users Components

function UsersNameList(props) {
    return (

        <div>

            <div className={styles.firstDiv}>
                <label>{props.name}</label>
                <Button variant="primary" onClick={props.click} >
                    Show more</Button>

            </div>
            <hr />
        </div>
    )
}
function Users(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>UserId:{props.id}</p>
            <p>UserName:{props.name}</p>
            <p>City:{props.city}</p>
            <p>Age{props.age}</p>
        </div>
    )
}
class DataList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Users: [
                { id: 1, Name: 'Vishal Devani', Age: '15', City: 'Amreli' },
                { id: 2, Name: 'Devani Vishal', Age: '16', City: 'Amreli' },
                { id: 3, Name: 'Mihir Shah', Age: '22', City: 'Ahmedavad' },
            ], UsersId: 0,
            isLoading: true
        };
    };

    toggleUserHandler = (id) => {

        this.setState({ UsersId: id })
    }
    componentDidMount() {

        console.log("done");

        this.timerHandle = setTimeout(() => this.setState({ isLoading: false }), 2000);

    }


    render() {

        let user = null
        user =


            <Container>
                <div className={styles.secondDiv}>{

                    this.state.Users.filter((user) => user.id === this.state.UsersId).map((user) => {
                        return <Users
                            key={user.id}
                            name={user.Name}
                            city={user.City}
                            id={user.id}
                            age={user.Age}
                        />
                    })
                }
                </div>
            </Container>
        //set spinner for 2 second before screen rendering
        return (
            this.state.isLoading ? <div className={styles.spinnerDiv}> <Spinner animation="border" variant="primary" />  Loading...</div> :
                <div className={styles.mainDiv}>
                    <Jumbotron fluid>
                        <Container>
                            {
                                this.state.Users.map((user) =>
                                    <UsersNameList
                                        key={user.id}
                                        name={user.Name}

                                        click={() => this.toggleUserHandler(user.id)}
                                    />
                                )
                            }
                        </Container>
                    </Jumbotron>
                    {user}
                </div>
        );
    }

};
export default DataList;
