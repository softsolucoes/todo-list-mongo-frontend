import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    .pageHeader{
        width: 100vw;
        height: 10vh;
        background-color: #2F4F4F;
        color: white;
        text-align: center;
        padding-top: 2.5vh;
    }

    .digitNotes{
        margin-left: 8vw;
        margin-top: 10vh;
    }

    input{
        width: 70vw;
        height: 10vh;
        background-color: rgba(0, 0, 0, 0.2);
        border: none;
        padding: 10px;

    }

    button{
        width: 10vw;
        height: 10vh;
        margin-left: 2vw;
        border: none;
        background-color: #00FF00;

    }

    ul{
        list-style: none;

    

    .note{
        width: 82vw;
        height: 20vh;
        margin-top: 10vh;
        margin-left: 8vw;
        /* background-color: orange; */

        li{
            width: 70vw;
            height: 20vh;
            float: left;
            background-color: rgba(0, 0, 0, 0.2);
            padding: 10px;

        }

        button{
            float: right;
            margin-top: 5vh;
            background-color: #FF0000;
        }

    }
    }

    @media (max-width: 720px){
        .digitNotes{
            margin-left: 0;
        }
        input{
            width: 90vw;
            margin-left:5vw;
        }
        .buttonInput{
            width: 40vw;
            height: 5vh;
            margin-top: 2vh;
            margin-left: 55vw;

        }
        ul{
            .note{
                width: 90vw;
                height: 20vh;
                margin-left: 5vw;

                li{
                width: 90vw;

                }
                .buttonDelete{
                    width: 40vw;
                    height: 5vh;
                    margin-left: 55vw;
                    margin-bottom: 5vh;

                }
            }

        }

    }

`