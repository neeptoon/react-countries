import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

import { Button } from '../components/Button';
import { Info } from '../components/Info';

import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import {selectCurrentCountry} from "../store/details/detailsSelector";
import {clearDetails, loadDetail} from "../store/details/detailsAction";

export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const currentCountry = useSelector(selectCurrentCountry);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDetail(name))
    return () => {
      dispatch(clearDetails())
    }
  },  [name, dispatch])

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </div>
  );
};
