import css from './AppSpinner.module.css';
import { Spinner } from '@chakra-ui/react';

const AppSpinner = () => {

    return (
      <div className={css.backdroop}>
        <div className={css.spinner}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </div>
      </div>
    );

}

export default AppSpinner;