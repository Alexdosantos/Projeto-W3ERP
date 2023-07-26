import React from "react";
import Tour from "reactour";

type StepsProps = {
  selector: string;
  content: string;
};

const steps: StepsProps[] = [
  // ... (os passos do tour)
];

const TourComponent = () => {
  const [isTourOpen, setIsTourOpen] = React.useState(true);
  const [isNewUser, setIsNewUser] = React.useState(false); // Define como falso por padrão

  React.useEffect(() => {
    const hasViewedTour = localStorage.getItem('hasViewedTour');
    if (!hasViewedTour) { // Verifica se o tour ainda não foi visualizado
      setIsNewUser(true); // Define como novo usuário somente se ainda não tiver visto o tour antes
    } else {
      setIsTourOpen(false); // Caso já tenha visto o tour, fecha o tour automaticamente
    }
  }, []);

  const handleCloseTour = () => {
    localStorage.setItem('hasViewedTour', 'true');
    setIsNewUser(false);
  };

  return (
    <div>
      {isNewUser && (
        <Tour
          steps={steps}
          isOpen={isTourOpen}
          onRequestClose={handleCloseTour}
        />
      )}
    </div>
  );
};

export default TourComponent;
