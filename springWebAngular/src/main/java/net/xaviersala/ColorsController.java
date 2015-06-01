package net.xaviersala;

import java.util.List;

import net.xaviersala.model.Color;
import net.xaviersala.repositories.ColorsRepository;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ColorsController {

  private static final Log log = LogFactory.getLog(ColorsController.class);

  /**
   * El servei que genera objectes Pinta.
   */
  ColorsRepository colorsRepository;


//  /**
//   * Automàticament Spring se n'encarregarà d'emplenar el servei.
//   *
//   * @param colorsRepository Obtenir el repositori de forma automàtica
//   */
  @Autowired
  public ColorsController(ColorsRepository colorsRepository) {
    // Assert.notNull(repository, "Repository must not be null!");
    this.colorsRepository = colorsRepository;
  }

  /**
   * La URL /color retorna un objecte Pinta.
   *
   * @return Objecte Pinta en XML
   */
  @RequestMapping(value = "/colors")
  public List<Color> generaColors() {
    
    List<Color> colors = (List<Color>) colorsRepository.findAll();
    log.info("Algú demana tots els colors" + colors);    
    return colors;
  }
  
  @RequestMapping(value= "/color/{nom}")
  public Color buscaColor(@PathVariable("nom") String nom, Model model) {
    log.info("Cercant el color " + nom );
    Color color = colorsRepository.findByCatala(nom);    
//    if (color == null) throw new ColorNotFoundException(nom);;        
    return color;
  }
  
}
