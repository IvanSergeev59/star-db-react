import Spinner from "../spinner/spinner";
import React, {Component} from "react";
import { Record } from "../item-details/item-details";
const withDetails = (View, getDetails, getImage) => {
    return class extends Component {
      state = {
          item:null,
          image:null
        }
      
        componentDidMount() {
          this.updatePerson()
        
        }
      
        componentDidUpdate(prevProps) {
       
          if (this.props.personId !== prevProps.personId){
            this.updatePerson();
          }
        }
      
        updatePerson() {                    
          
          const {id} = this.props
         
          if (!id) {
            return
          }
          getDetails(id)
            .then((item) => {
              this.setState({
                  item
              })
          })
           
            const image = getImage(id)             
               this.setState({ 
                image
               })          

           
           }
        render() {
          const {item, image} = this.state
          
          const Parametrs =   
            React.Children.map(this.props.children, (child) => {
              return React.cloneElement(child, {item})
            })
                 
          if (!item) {
            return <span>Select a item from a list</span>;
          }
          return <View item={item} image={image} Parametrs={Parametrs}>
          </View>
          
         }
}
}

export default withDetails