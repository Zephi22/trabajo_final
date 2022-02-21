import { Button, Container, Form, FormControl, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { trivia_categories, trivia_difficulty } from '../data/Data';
import useSelect from '../hooks/useSelect';

const Formulario = ({name, setName}) => {
    // para usar redirección
    let navigate = useNavigate();
    // ** 
    const [category, SelectCategory] = useSelect ("9", trivia_categories, "Seleccionar categoría");
    const [difficulty, SelectDifficulty] = useSelect ("easy", trivia_difficulty, "Selecciona dificultad");

    const handleNameChange = ({ target }) => {
        setName(target.value);
      };

    const handleSubmit =(e)=>{
      e.preventDefault();
        if(name !== ""){          
        SelectCategory(category);  
        SelectDifficulty(difficulty);
        // redirigir
        navigate(`/jugar/${name}/${category}/${difficulty}`);
        };        
    };

  return (<>
    <Container>
      <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3"  >
              <Form.Label>Ingrese el nombre</Form.Label>
              <InputGroup className="mb-3">
              <FormControl    
                placeholder="Nombre del jugador"  
                value = {name}                     
                onChange={handleNameChange}   
              />
          </InputGroup>
              <SelectCategory />
              <SelectDifficulty />
          </Form.Group>
          <Button variant= "primary" type = "submit"> 
              Jugar
          </Button>
      </Form>
    </Container>
  </>);
};

export default Formulario