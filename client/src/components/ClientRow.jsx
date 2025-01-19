import {FaTrash} from 'react-icons/fa'
import { useMutation } from '@apollo/client'
import { DELETE_CLIENT } from '../mutations/clientMutations'
import { GET_CLIENTS } from '../queries/clientQueries'


export default function ClientRow({ client }) {

    const [deleteClient] = useMutation(DELETE_CLIENT, {
        variables: {id: client.id},
        refetchQueries: [{query: GET_CLIENTS}] // One way but slow, as it calls the query every update  
    })

    return (
        <tr>
            <td>{client.name}</td>
            <td>{client.email}</td>
            <td>{client.phone}</td>
            <td>
                <button className='btn btn-danger btn-sm' onClick={deleteClient}>
                    <FaTrash />
                </button>
            </td>
        </tr>
    )
}
