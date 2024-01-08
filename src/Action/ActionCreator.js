export const depositMoney = (amount) =>
{
    return(dispatch) =>
    {
        console.log(dispatch.action)
        dispatch({
            type: 'deposit',
            payload: amount
        })
    }
}

export const withdrawMoney = (amount) =>
{
    return(dispatch) =>
    {
        console.log(dispatch.action)
        dispatch({
            type: 'withdraw',
            payload: amount
        })
    }
}


