import { PrettyChatWindow} from 'react-chat-engine-pretty'
const ChatsPage = (props) => 
{ 
   return (
    <div style= {{ height:'100vh'}}>
        <PrettyChatWindow
           projectId='
           637ba869-3295-4b4d-92e6-65ef7990e425'
           username={'props.user.username'}
           secret={'props.user.secret'}
           style={{ height: '100%'}}
        />

    </div>

   )
}

export default ChatsPage